let pokemons = [];

let favourites = JSON.parse(sessionStorage.getItem('favourites')) || [];

const pagination = {
    limit: 50,
    offset: 50,
    page: 1,
}

const url = 'https://pokeapi.co/api/v2/';

const createElem = (tag, append, src = null, text = null, clName, api = null) => {
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
    if(api){
        elem.addEventListener('click', () => {
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
                            btnShow = document.createElement('button');
                            btnShow.innerHTML = 'show evolution';
                            btnShow.classList.add('btn-evolution');
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
        })
    }
    append.append(elem);
    return elem;
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
                const pokemonClass = favourites.includes(el.name) ?
                    'selected-pokemon' :
                    'pokemon';

                createElem('button', wrapper, null, el.name, pokemonClass, el.url);
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
                            fetch(pokedexes[0].url)
                                .then(res => res.json())
                                .then(res =>{
                                    const { pokemon_entries } = res;
                                    pokemons = pokemon_entries;
                                    wrapper.innerHTML = '';
                                    pokemons.slice(0, pagination.limit-1).forEach(el => {
                                        const { pokemon_species } = el;
                                        const { name } = pokemon_species;
                                        const pokemonClass = favourites.includes(el.name) ?
                                            'selected-pokemon' :
                                            'pokemon';

                                        createElem('button', wrapper, null, name, pokemonClass, `${url}pokemon/${name}`);
                                    });
                                    wrapperPaginat.innerHTML = '';
                                    const countPages = Math.floor(pokemons.length / pagination.limit);

                                    createPag(countPages);
                                    const btnPaginat = document.querySelectorAll('.btn-paginat');

                                    btnPaginat.forEach((elem, index) => {
                                        elem.setAttribute('data-id', index + 1);
                                        elem.setAttribute('href', '#');
                                        elem.addEventListener('click', function (e){
                                            e.preventDefault();
                                            wrapper.innerHTML = '';
                                            const start = pagination.limit * (elem.getAttribute('data-id') - 1);
                                            const end = pagination.limit * elem.getAttribute('data-id') - 1;
                                            pokemons.slice(start, end).forEach(el => {
                                                const { pokemon_species } = el;
                                                const { name } = pokemon_species;
                                                const pokemonClass = favourites.includes(el.name) ?
                                                    'selected-pokemon' :
                                                    'pokemon';

                                                createElem('button', wrapper, null, name, pokemonClass, `${url}pokemon/${name}`);
                                            });
                                        })
                                    })
                                })
                            
                        });
                })
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
                btnType = document.createElement('button');
                btnType.innerHTML = el.name;
                btnType.classList.add('btn');
                wrapperTypes.append(btnType);
                btnType.addEventListener('click', () => {
                    fetch(el.url)
                        .then(res => res.json())
                        .then(res => {
                            const { pokemon } = res;
                            pokemons = pokemon;
                            wrapper.innerHTML = '';
                            if (pokemons.length > 0) {
                                pokemons.slice(0, pagination.limit-1).forEach(el => {
                                    const { pokemon } = el;
                                    const { name } = pokemon;
                                    const pokemonClass = favourites.includes(el.name) ?
                                        'selected-pokemon' :
                                        'pokemon';

                                    createElem('button', wrapper, null, name, pokemonClass, `${url}pokemon/${name}`);
                                });
                            } else {
                                wrapper.innerHTML = `<p>No pokemon of this type :(</p>`
                            }
                            
                            wrapperPaginat.innerHTML = '';
                            const countPages = Math.floor(pokemons.length / pagination.limit);
                            createPag(countPages);
                            const btnPaginat = document.querySelectorAll('.btn-paginat');

                            btnPaginat.forEach((elem, index) => {
                                elem.setAttribute('data-id', index + 1);
                                elem.setAttribute('href', '#');
                                elem.addEventListener('click', function (e){
                                    e.preventDefault();
                                    wrapper.innerHTML = '';
                                    const start = pagination.limit * (elem.getAttribute('data-id') - 1);
                                    const end = pagination.limit * elem.getAttribute('data-id') - 1;
                                    pokemons.slice(start, end).forEach(el => {
                                        const { pokemon } = el;
                                        const { name } = pokemon;
                                        const pokemonClass = favourites.includes(el.name) ?
                                            'selected-pokemon' :
                                            'pokemon';

                                        createElem('button', wrapper, null, name, pokemonClass, `${url}pokemon/${name}`);
                                    });
                                })
                            })
                        })
                })
            })
        })
}

apiRegion();

apiTypes();

apiRequest();
