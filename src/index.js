import './styles/all.scss';
import moment from 'moment';
import { MDCDataTable } from '@material/data-table';
import students from "../students.json";
import Chart from 'chart.js/auto';

let wrapper = document.querySelector('.wrapper-all');

const createElem = (tag, append, text = null, clName) => {
  let el = document.createElement(tag);
  if(text){
    el.innerHTML = text;
  }
  el.classList.add(clName);
  append.prepend(el);
};

createElem('div', wrapper, `
<div class="mdc-data-table">
  <div class="mdc-data-table__table-container">
    <table class="mdc-data-table__table" aria-label="Students">
      <thead>
        <tr class="mdc-data-table__header-row">
          <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Student name</th>
          <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Date of Birth</th>
          <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Rating</th>
        </tr>
      </thead>
      <tbody class="mdc-data-table__content"></tbody>
    </table>
  </div>
</div>
`, 'wrapper');

const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));
const { content } = dataTable;

let names = students.map(el => el.name);
let rating = students.map(el => el.rating);

students.forEach((elem) => {
  let date = moment(`${elem.birthday}`, "DD-MM-YYYY").format('LL');
  createElem('tr', content, `
  <th class="mdc-data-table__cell" scope="row">${elem.name}</th>
  <td class="mdc-data-table__cell mdc-data-table__cell--numeric">${date}</td>
  <td class="mdc-data-table__cell mdc-data-table__cell--numeric">${elem.rating}</td>`, 'mdc-data-table__row')
});

const ctx = document.getElementById('lineChart');

new Chart(ctx, {
  responsive: true,
  maintainAspectRatio: false,
  type: 'line',
  options: {
    maintainAspectRatio: false,
  },
  data: {
    labels: names,
    datasets: [{
      label: 'Rating',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: rating,
    }]
  }
});