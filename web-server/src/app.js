const path = require("path");
const express = require("express");
const hbs = require("hbs");

console.log(__dirname);
console.log(path.join(__dirname, "../public"));

const app = express();

// Define paths for Express config
const publicDirecotryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine","hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirecotryPath))

app.get("/", (req, res) => {
    res.render("index", {
        title: "Weather App",
        name: "Zulhafiz"
    })
})

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About page",
        name: "Zulhafiz"
    })
})

app.get("/help", (req, res) => {
    res.render("help", {
        title: "Help page",
        name: "Zulhafiz"
    })
})

app.get("/weather", (req, res) => {
    const weatherObject = {
        location: "Kuala Lumpur",
        temperature: 34,
        prepChance: "11%"
    }
    res.send(weatherObject)
});

app.get("/help/*", (req, res) => {
    res.render("404", {
        title: "404 Help",
        name: "Zulhafiz",
        errorMessage: "Help article not found"
    })
})

app.get("*", (req, res) => {
    res.render("404", {
        title: "404",
        name: "Zulhafiz",
        errorMessage: "Page not found"
    })
})

app.listen(3000, () => {
    console.log("Server is up on port 3000")
})