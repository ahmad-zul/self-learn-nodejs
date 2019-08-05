// Object property shorthand

const name = "Ahmad";
const userAge = 34;

const user = {
    name,
    age: userAge,
    location: "Kuala Lumpur"
};

console.log(user)

// Object destructuring

const product = {
    label: "Red notebook",
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 3
};

// const label = product.label;
// const stock = product.stock;

const {label:productLabel,stock, rating = 5} = product;
// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, {label = "No product", stock = 0} = {}) => {
    console.log(type);
    console.log(label);
    console.log(stock)
}

transaction("order", product)