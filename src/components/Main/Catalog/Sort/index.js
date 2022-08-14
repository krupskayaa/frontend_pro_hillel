import "./style.scss";

const Sort = () => {
    let sort = `
      <select class="sort">
        <option>По возрастанию цены</option>
      </select>`;

      let wrap = document.querySelector('.catalog__wrapper');
      wrap.innerHTML += sort;
    }
  
  export default Sort;