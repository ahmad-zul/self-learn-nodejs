const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const url = "https://api.darksky.net/forecast/166131b5ff6dfe182cb6573aaaa7a86b/"+latitude+","+longitude+"?units=si";

    request({url, json: true}, (error, response) => {
        if (error) {
            callback("Error connecting to forecast API", undefined)
        } else if (response.statusCode !== 200) {
            callback ('Forecast service does not return status 200', undefined);
        } else if (response.body.error) {
            callback(response.body.code +": "+ response.body.error, undefined)
        } else {
            const data = response.body.daily.data[0].summary+" It is currently "+response.body.currently.temperature +" degrees out. There is a " + (response.body.currently.precipProbability * 100).toFixed(0) + "% chance of rain."

            callback(undefined,data)
        }
    })
}

module.exports = forecast;