// const square = function (x) {
//     return x * x;
// }

// const square = (x) => {
//     return x * x;
// }

// const square = (x) => x * x 

// console.log(square(4));

// arrow function does not bound to it's own this value

const event = {
    name: "Birthday Party",
    guestList: ["Ahmad Zul", "Zul", "Ahmad"],
    printGuestList() { // not arrow function
        console.log("Guest list for " + this.name)
        
        this.guestList.forEach((guest) => {
            console.log(guest + "is attending " + this.name)
        }) 
    }
}

event.printGuestList();