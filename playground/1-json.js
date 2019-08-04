const fs = require("fs");

// const book = {
//     title: "My Book",
//     author: "Ahmad Zul"
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log("Before " + dataJSON);

data.name = "Ahmad Zulhafiz";
data.age = 35;

const userJSON = JSON.stringify(data);
fs.writeFileSync("1-json.json", userJSON);
const userData = JSON.parse(userJSON);


console.log("After " + userJSON);