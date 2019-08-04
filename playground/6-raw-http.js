const https = require("https");

const url = "https://api.darksky.net/forecast/166131b5ff6dfe182cb6573aaaa7a86b/3.158383,101.713272?units=si";

const request = https.request(url, (response) => {
    let data = ''
    response.on("data", (chunk) => {
        data = data + chunk.toString()
    })

    response.on("end", () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log("Error occurerd "+error)
})

request.end()
