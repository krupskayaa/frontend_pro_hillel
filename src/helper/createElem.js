const createElem = (tag, append, text = null, clName) => {
  let el = document.createElement(tag);
  if(text){
    el.innerHTML = text;
  }
  el.classList.add(clName);
  append.prepend(el);
  return el;
};

export { createElem };