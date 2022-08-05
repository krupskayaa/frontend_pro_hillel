const createElem = (tag, clas = null, text = null, append, attr1 = null, attr2 = null) => {
    let el = document.createElement(tag);
    if (clas) {
        el.className = clas;
    }
    if (text) {
        el.textContent = text;
    }
    append.append(el);
    if (attr1) {
        el.setAttribute(attr1, attr2);
    }
    return el;
}
export { createElem }