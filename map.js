const numbers = [4, 2, 5, 9, 7, 8, 3, 6, 1];

for (const number of numbers) {
    // console.log(number);
}

const numberDouble = number => number * 2;

const output = numbers.map(numberDouble);
// console.log(output);
// numbers.map(number => console.log(number));

const products = [
    { name: 't-shirt', price: 1500, color: 'yellow' },
    { name: 'pent', price: 2000, color: 'gray' },
    { name: 'shoe', price: 1350, color: 'black' },
    { name: 'sunglass', price: 900, color: 'sunColor' },
]

// const productsName = products.map(product => console.log(product.name));
const productsPrice = products.map(product => console.log(product.price));
