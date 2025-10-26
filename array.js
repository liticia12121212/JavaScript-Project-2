
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

function filterArray(arr, condition) {
    return arr.filter(condition);
}
let numbers = [1, 5, 10, 2, 8];

console.log(findMax(numbers)); 
console.log(findMin(numbers)); 
console.log(sumArray(numbers)); 
console.log(filterArray(numbers, num => num > 5)); 
