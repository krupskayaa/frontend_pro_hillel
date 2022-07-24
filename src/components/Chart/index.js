import Chart from 'chart.js/auto';
import students from '../../../students.json';
import { createElement } from "../../helper/createElem";

const makeChart = () => {
    let names = students.map(el => el.name);
    let rating = students.map(el => el.rating);
    
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
}

export default makeChart;