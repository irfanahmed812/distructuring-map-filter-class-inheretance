class support {
    name;
    website = 'www.webdeveloper.edu.bd';
    address = 'Dhanmondi, Dhaka';
    phone = 123645978;

    constructor(name, address, phone) {
        this.name = name;
        this.address = address;
        // this.phone = phone;
    }
}

const rafik = new support('rafik ahmed', 'cumilla', 12345689712);
// console.log(rafik);
const shafik = new support('shafik ahmed', 'rajshai', 1236549787);
// console.log(shafik);