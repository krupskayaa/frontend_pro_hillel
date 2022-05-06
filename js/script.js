// Задача 1

function toSum(array) {
    if (!array.length) {
      return 0;
    } else {
      return array[0] + toSum(array.slice(1));
    }
}

console.log(toSum([2, 3, 4, 5, 6, 7]));

// Задача 2

function sum(start, end, step){
    if(start > end){
        return 0;
    } else {
        return start + sum(start + step, end, step)
    }
}

console.log(sum(1, 5, 1));
