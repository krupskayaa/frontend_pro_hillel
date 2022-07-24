import { MDCDataTable } from '@material/data-table';
import students from "../../../students.json";
import { createElem } from '../../helper/createElem';
import moment from 'moment';

const makeTable = () => {
    let wrapper = document.querySelector('.wrapper-all');

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

    students.forEach((elem) => {
        let date = moment(`${elem.birthday}`, "DD-MM-YYYY").format('LL');
        createElem('tr', content, `
        <th class="mdc-data-table__cell" scope="row">${elem.name}</th>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">${date}</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">${elem.rating}</td>`, 'mdc-data-table__row')
    });
}

export default makeTable;