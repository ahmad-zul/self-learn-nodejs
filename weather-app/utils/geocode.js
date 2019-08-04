const request = require("request");

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoicHJvenVsODQiLCJhIjoiY2p5cjA1MW1mMDRrdTNtbnplYXQxM294OSJ9.EgL_ukeIXyk33GB4lHd7Yg&limit=1";

    request({url, json:true}, (error, response) => {
        if (error) {
            callback ('Unable to connect to location service', undefined);
        } else if (response.statusCode !== 200) {
            callback ('Location service does not return status 200', undefined);
        } else if (response.body.features.length === 0) {
            callback ('Unable to find location based on the address', undefined);
        } else {
            const data = {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            }
            callback(undefined, data)
        }
    })
}

module.exports = geocode;