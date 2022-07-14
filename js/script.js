let pokemons = [];

let favourites = JSON.parse(sessionStorage.getItem('favourites')) || [];

const pagination = {
    limit: 50,
    offset: 50,
    page: 1,
}

const url = 'https://pokeapi.co/api/v2/';

const createElem = (tag, append, src = null, text = null, clName) => {
    let elem = document.createElement(tag);
    if(src){
        elem.src = src;
        elem.alt = text;
        elem.title = text;
    }
    if(!src && text){
        elem.innerHTML = text;
    }
    elem.classList.add(clName);
    append.append(elem);
    return elem;
}

const apiProcess = (api) => {
    fetch(api)
        .then(res => res.json())
        .then(res => {
            const { sprites, species, abilities, base_experience, height, weight, types } = res;
            const { front_default } = sprites;
            const { name } = species;
            info.innerHTML = '';
            createElem('h2', info, null, name, 'title');
            createElem('img', info, front_default, name, 'img-pokemon');
            createElem('h3', info, null, 'Abilities:', 'abilities-txt');
            abilities.forEach(({ ability }, index) => {
                createElem('p', info, null, `${index+1}) ${ability.name}`, 'abilities');
            });
            createElem('h3', info, null, `base experience: <span>${base_experience}</span>`, 'abilities-txt');
            createElem('h3', info, null, `height: <span>${height}</span>`, 'abilities-txt');
            createElem('h3', info, null, `weight: <span>${weight}</span>`, 'abilities-txt');
            createElem('h3', info, null, 'Types:', 'abilities-txt');
            types.forEach(({ type }, index) => {
                createElem('p', info, null, `${index+1}) ${type.name}`, 'abilities');
            })
            fetch(species.url)
                .then(result => result.json())
                .then(result => {
                    const { evolution_chain } = result;
                    const { url } = evolution_chain;
                    createElem('button', info, null, 'show-evolution', 'btn-evolution');
                    btnShow = document.querySelector('.btn-evolution');
                    btnShow.addEventListener('click', () => {
                        fetch(url)
                            .then(res => res.json())
                            .then(res => {
                                const { chain } = res;
                                createElem('div', info, null, null, 'wrap-evolution');
                                wrapEvolution = document.querySelector('.wrap-evolution');
                                wrapEvolution.innerHTML = '';
                                let array = [];
                                const getEvolution = (chain) => {
                                    if (chain.evolves_to.length) {
                                        getEvolution(chain.evolves_to[0]);
                                    }
                                    return array.push(chain.species.name);
                                }
                                getEvolution(chain);
                                array.reverse().join(' => ')
                                createElem('p', wrapEvolution, null, array.reverse().join(' => '), 'abilities-txt');
                            });
                    })
                    info.append(btnShow);
                });
                createElem('button', info, null, 'add to favourites', 'btn-favourites');
                const btnFavourites = document.querySelector('.btn-favourites');
                btnFavourites.addEventListener('click', () => {
                    const allPokemons = document.querySelectorAll('.pokemon');                    
                    favourites.push(name);
                    sessionStorage.setItem('favourites', JSON.stringify(favourites));
                    allPokemons.forEach(el => {
                        if(favourites.includes(el.textContent)) {
                            el.classList.add('selected-pokemon');
                        }
                    })
                })
        })
}

const checkPokeClass = (name) => {
    return favourites.includes(name) ?
        'selected-pokemon' :
        'pokemon';
}

createElem('div', document.body, null, null, 'wrapper-pokemons');
createElem('div', document.body, null, null, 'wrapper-paginat');
const wrapperPaginat = document.querySelector('.wrapper-paginat');

const createPag = (count) => {
    for (i = 1; i <= count; i++) {
        createElem('a', wrapperPaginat, null, i, 'btn-paginat');
    }
}

createElem('div', document.body, null, null, 'info');
const wrapper = document.querySelector('.wrapper-pokemons');
const info = document.querySelector('.info');

const apiRequest = () => {
    let customLink = `?limit=${pagination.limit}&offset=${pagination.offset * pagination.page}`
    fetch(`${url}pokemon${customLink}`)
        .then(res => res.json())
        .then(res => {
            const { results, count } = res;
            const checkBtnPag = document.querySelectorAll('.btn-paginat').length
            if (checkBtnPag === 0) {
                let countPages = Math.floor(count / pagination.limit);
                createPag(countPages);
                const btnPaginat = document.querySelectorAll('.btn-paginat');
                btnPaginat.forEach((elem, index) => {
                    elem.setAttribute('data-id', index+1);
                    elem.setAttribute('href', '#');
                    elem.addEventListener('click', function (e){
                        e.preventDefault();
                        wrapper.innerHTML = '';
                        pagination.page = elem.getAttribute('data-id');
                        apiRequest();
                    })
                })
            }
            results.forEach(el => {
                const pokemonClass = checkPokeClass(el.name);
                const elem = createElem('button', wrapper, null, el.name, pokemonClass);
                elem.addEventListener('click', () => apiProcess(el.url));
            })
        })
}

const apiRegion = () => {
    fetch(`${url}region`)
        .then(res => res.json())
        .then(res => {
            const {results} = res;
            createElem('div', document.body, null, `<p>Regions</p>`, 'wrapper-regions');
            wrapperRegions = document.querySelector('.wrapper-regions');
            results.forEach(el => {
                const btnRegion = createElem('button', wrapperRegions, null, el.name, 'btn');
                btnRegion.addEventListener('click', () => {
                    fetch(el.url)
                        .then(res => res.json())
                        .then(res => {
                            const { pokedexes } = res;
                            if(pokedexes.length > 0) {
                                fetch(pokedexes[0].url)
                                .then(res => res.json())
                                .then(res =>{
                                    const { pokemon_entries } = res;
                                    pokemons = pokemon_entries;
                                    paginatePokemons(0, pagination.limit-1, 'pokemon_species');
                                    createPagination('pokemon_species');
                                })
                            } else {
                                wrapper.innerHTML = `<p>No pokemon of this region :(</p>`;
                                wrapperPaginat.innerHTML = '';
                            }
                        });
                })
            })
        })
}

const paginatePokemons = (start, end, property) => {
    wrapper.innerHTML = '';
    pokemons.slice(start, end).forEach(el => {
        const name = el[property].name;
        const pokemonClass = checkPokeClass(name);
        const elem = createElem('button', wrapper, null, name, pokemonClass);
        elem.addEventListener('click', () => apiProcess(`${url}pokemon/${name}`));
    });
}

const createPagination = (name) => {
    wrapperPaginat.innerHTML = '';
    const countPages = Math.floor(pokemons.length / pagination.limit);
    createPag(countPages);
    const btnPaginat = document.querySelectorAll('.btn-paginat');
    btnPaginat.forEach((elem, index) => {
        elem.setAttribute('data-id', index + 1);
        elem.setAttribute('href', '#');
        elem.addEventListener('click', function (e){
            e.preventDefault();
            const start = pagination.limit * (elem.getAttribute('data-id') - 1);
            const end = pagination.limit * elem.getAttribute('data-id') - 1;
            paginatePokemons(start, end, name);
        })
    })
}

const apiTypes = () => {
    fetch(`${url}type`)
        .then(res => res.json())
        .then(res => {
            const { results } = res;
            createElem('div', document.body, null, `<p>Types</p>`, 'wrapper-types');
            wrapperTypes = document.querySelector('.wrapper-types');
            results.forEach(el => {
                const btnType = createElem('button', wrapperTypes, null, el.name, 'btn');
                btnType.addEventListener('click', () => {
                    fetch(el.url)
                        .then(res => res.json())
                        .then(res => {
                            const { pokemon } = res;
                            pokemons = pokemon;
                            if (pokemons.length > 0) {
                                paginatePokemons(0, pagination.limit-1, 'pokemon');
                            } else {
                                wrapper.innerHTML = `<p>No pokemon of this type :(</p>`;
                            }
                            createPagination('pokemon');
                        })
                })
            })
        })
}

apiRegion();

apiTypes();

apiRequest();
