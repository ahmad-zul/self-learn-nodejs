const path = require("path");
const express = require("express");
const hbs = require("hbs");

const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")

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
    if (!req.query.address) {
        return res.send({
            error: "Address term is required"
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return res.send({ error }) // shorthand
        } 

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            } 
            
            const weatherObject = {
                forecast: forecastData,
                location, // shorthand
                address: req.query.address
            }
            res.send(weatherObject)
        })
    });
});

app.get("/products", (req, res) => {
    if (!req.query.search) {
        res.send({
            error: "Search term is required"
        })
        return;
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})

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