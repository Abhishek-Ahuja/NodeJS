const http = require('http');


const server = http.createServer((request, response) => {
   response.write("Hello my name is Abhishek")
   if(request.url === '/hello'){
       return response.end(", Welcome to my NodeJS server.")
   }else if(request.url === '/about'){
       return response.end(", I am working as a full stack developer in Wipro Technologies.")
   }
   response.end(", Response received at port 8080.")
})


server.listen(8080, () => {
   console.log("Server is listening at port 8080.")
})