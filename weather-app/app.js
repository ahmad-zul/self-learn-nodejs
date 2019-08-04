const chalk = require("chalk");

const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")

const url = "https://api.darksky.net/forecast/166131b5ff6dfe182cb6573aaaa7a86b/3.136681,101.689373?units=si";

const address = process.argv[2]

if (!address) {
    console.log("Please provide address");
} else {
    geocode(address, (error, {latitude, longitude, location}) => {
        if (error) {
            return console.log(error)
        } 

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            } 
            
            console.log(location);
            console.log(forecastData);
        })
    });
}