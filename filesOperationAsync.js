//Non-Blocking code fs
const fs = require('fs');

console.log("Started reading the file.");

fs.readFile("orderAsync.txt", (err, data) => {
    if(err){
        console.log(err.message)
    }else{
        console.log("Data:",data.toString())
    }
})


console.log("Operations");
// // To create and add data in order.txt
// fs.writeFile("orderAsync.txt", "i: 1, type: image, quantiiy: 2", (err) => {
//     if(err)console.log(err)
// })

//To append data in order.txt
// fs.appendFile("orderAsync.txt", 'i: 2, type: choclate, quantiiy: 7', (err) => {
//     if(err)console.log(err)
// })

//To delete file
fs.unlink("orderAsync.txt", (err) => {
    if(err)console.log(err)
})

console.log("Ended reading the file.");