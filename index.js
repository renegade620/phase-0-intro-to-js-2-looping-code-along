// Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     // debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);
// console.log("\n");

// function that writes custom messages to an array of names
function writeCards(namesArray = [], eventName = "birthday") {
    let msg, msgArray = [];

    // for loop that iterates through the array of names and prints out a message for each
    for (let i = 0; i < namesArray.length; i++) {
        msg = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
        msgArray.push(msg); //appends each message to an array
    }

    return msgArray;
}

// logs custom messages to an array of supplied names in the terminal
console.log(writeCards(["Alice", "Bob", "Carol", "Dickson"]));


// a function
function countDown(x) {

    while (x >= 0)
        console.log(x--);
    return x;
}

console.log(countDown(10));