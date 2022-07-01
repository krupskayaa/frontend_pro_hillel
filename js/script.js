let body = document.body;

let container = document.createElement('div');
body.append(container);

let section = document.createElement('section');
section.classList.add('wrapper');
container.append(section);

let title = document.createElement('h1');
title.classList.add('title');
title.innerHTML = 'TO DO LIST';
section.append(title);

let form = document.createElement('form');
section.append(form);

let input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Add new task';
form.append(input);

let btn = document.createElement('button');
btn.type = 'submit';
btn.innerHTML = '+';
form.append(btn);

let ul = document.createElement('ul');
section.append(ul);

const login = prompt('Enter your login');

const isCompleted = (e) => {
    const elem = e.target;
    const liId = elem.closest('li').dataset.id;
    const index = todos.findIndex(todo => todo.id == liId);
    todos[index].done = true;
    sessionStorage.setItem(login, JSON.stringify(todos));
    let p = elem.previousSibling;
    elem.classList.add('complete-btn');
    p.classList.add('complete-p');
}

const addTask = (txt, id, done) => {
    let li = document.createElement('li');
    li.setAttribute('data-id', id);
    ul.append(li);

    let text = document.createElement('p');
    text.classList.add('task');
    li.append(text);

    let btnCheck = document.createElement('button');
    btnCheck.innerHTML = 'DONE';
    btnCheck.classList.add('btn-check');
    li.append(btnCheck);
    text.innerHTML = txt;

    if (done) {
        btnCheck.classList.add('complete-btn');
        text.classList.add('complete-p');
    } else {
        btnCheck.addEventListener('click', isCompleted);
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();
    if(input.value !== '') {
        addTask(input.value, todos.length + 1, false);
        todos.push({
            id: todos.length + 1,
            text: input.value,
            done: false,
        });
        sessionStorage.setItem(login, JSON.stringify(todos));
    } else {
        alert("You haven't entered a task");
    }
});

let todos = JSON.parse(sessionStorage.getItem(login)) || [];
todos.forEach(element => {
    addTask(element.text, element.id, element.done);
});