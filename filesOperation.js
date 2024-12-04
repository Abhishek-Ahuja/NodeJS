//Blocking code fs
const fs = require('fs');

console.log("Started reading the file.");
const buffer = fs.readFileSync("data.txt", {encoding: 'utf8'});

console.log(buffer);
// To create and add data in order.txt
try{
fs.writeFileSync("order.txt", "i: 1, type: image, quantiiy: 2")
}catch(err){
    console.log("Error",err.message)
}
//To append data in order.txt
try{
fs.appendFileSync("order.txt", 'i: 2, type: choclate, quantiiy: 7')
}catch(err){
    console.log(err.message)
}
//To delete file
try{
    fs.unlinkSync("order.tt")
}catch(err){
    console.log(err.message)
}
console.log("Ended reading the file.");