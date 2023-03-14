/* filter */
const numbers = [25, 64, 97, 16, 82, 12, 36, 54, 98, 4];
const bigNumber = numbers.filter(number => number > 20);
// console.log(bigNumber);
const smallNumber = numbers.filter(number => number < 30);
// console.log(smallNumber);

const products = [
    { name: 't-shirt', price: 1500, color: 'yellow' },
    { name: 'pent', price: 2000, color: 'gray' },
    { name: 'shoe', price: 1350, color: 'black' },
    { name: 'sunglass', price: 900, color: 'sunColor' },
]

const lowPrice = products.filter(product => product.price < 1500);
// console.log(lowPrice);
const highPrice = products.filter(product => product.price > 1000);
// console.log(highPrice);

/* find */

const myNumbers = [52, 36, 98, 21, 54, 36, 48, 29];
const findNumbers = myNumbers.find(number => number == 54);
console.log(findNumbers);