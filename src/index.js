import './styles/all'
import { MDCDataTable } from '@material/data-table';

let root = document.getElementById("root");

let wrapper = document.createElement("div");
wrapper.className = "wrapper";
root.append(wrapper);

wrapper.innerHTML = `
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
`;
const dataTable = new MDCDataTable(document.querySelector(".mdc-data-table"));



console.log(dataTable)

// console.log('test')