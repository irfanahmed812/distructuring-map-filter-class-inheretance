const book = { name: 'Programming with herry', id: 2365, price: 789, color: 'brown' }

const bookPrice = book.price;
// console.log(bookPrice);
const bookColor = book.color;
// console.log(bookColor);

/* distructuring example 2 */
const { id, color, price } = book;
// console.log(price);

/* distructring nested */
const company = {
    name: 'WEB DEVELOPER LTD',
    ceo: {
        name: 'Mohammed Irfan',
        id: 5912431150,
        address: 'Dhaka, Bangladesh'
    },
    web: {
        work: ['front-end', 'back-end', 'full-stack'],
        employee: 53,
        framework: 'react',
        tech: {
            frontend: ['html', 'css', 'bootstrap', 'js'],
            backend: ['java-script', 'MongoDB', 'node js']
        }
    }
}

const frontend = company?.web?.tech?.frontend;
// console.log(frontend);

const work = company?.web?.work;
console.log(work);