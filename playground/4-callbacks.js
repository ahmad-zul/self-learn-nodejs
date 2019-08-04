setTimeout(() => {
    console.log("2 seconds")
}, 2000)

const names = ['Zul', 'Hafiz', 'Kamal'];

const shortNames = names.filter((name) => {
    return name.length <= 4
})

const geoCode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data);
    }, 2000)
}

geoCode('Kuala Lumpur', (data) => {
    console.log(data);
});

// using arrow function
const add = (x, y, callback) => {
    setTimeout(() => {
        const sum = x + y; 
        callback(sum);
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

// using no arrow function
// const add = function(x, y, callback) {
//     setTimeout(() => {
//         const sum = x + y; 
//         callback(sum);
//     }, 2000)
// }

// add(1, 4, function (sum) {
//     console.log(sum) // Should print: 5
// })