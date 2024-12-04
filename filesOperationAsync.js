//Non-Blocking code fs
const fs = require('fs');

console.log("Started reading the file.");

fs.readFile("data.txt", (err, data) => {
    if(err){
        console.log(err.message)
    }else{
        console.log(data.toString())
    }
})


console.log("Ended reading the file.");