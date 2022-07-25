import Chart from 'chart.js/auto';
import students from '../../../students.json';
import { createElem } from "../../helper/createElem";

const makeChart = () => {
    let names = students.map(el => el.name);
    let rating = students.map(el => el.rating);
    let wrapper = document.querySelector('.wrapper');

    const canvas = createElem('canvas', wrapper, null, 'chart');
    canvas.setAttribute("id", 'lineChart');
    
    const data = {
        labels: names,
        datasets: [{
          label: 'My First Dataset',
          data: rating,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(75, 192, 192)',
            'rgb(201, 203, 207)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(153, 102, 255)',
            'rgb(0, 255, 255)',
            'rgb(255, 0, 255)',
            'rgb(255, 105, 180)',
            'rgb(221, 160, 221)',
            'rgb(123, 104, 238)',
          ],
          hoverOffset: 0
        }]
    };

    const config = {
        type: 'doughnut',
        data: data,
    };

    new Chart(document.getElementById("lineChart"), config);
}

export default makeChart;