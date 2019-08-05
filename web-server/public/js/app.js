console.log("Client side javascript file loaded");

// fetch("http://puzzle.mead.io/puzzle").then((response) =>{
//     response.json().then((data) => {
//         console.log(data);
//     })
// });


// function fetchdata () {
//     // alert("lol")
//     fetch("http://localhost:3000/weather?address=boston").then((response) =>{
//     response.json().then((data) => {
//         if (data.error) {
//             console.log(data.error)
//         } else {
//             console.log(data.location)
//             console.log(data.forecast);
//         }
//     })
// });
// }



const weatherForm = document.querySelector("form");
const searchElement = document.querySelector("input");
const messageOne = document.querySelector("#messageOne")
const messageTwo = document.querySelector("#messageTwo")

// weatherForm.addEventListener("submit", fetchdata())

weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const location = searchElement.value;

    messageOne.textContent = "Searching..."
    messageTwo.textContent = ""

    fetch("http://localhost:3000/weather?address="+location).then((response) =>{
        response.json().then((data) => {
            if (data.error) {
                // console.log(data.error)
                messageOne.textContent = data.error
            } else {
                // console.log(data.location)
                // console.log(data.forecast);
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    });
})