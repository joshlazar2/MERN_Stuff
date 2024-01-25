const express = require("express"); // this means import express, a function is returned back when we import(require) and we assign that function to the variable express
const app = express();
const port = 8000;
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


// req is shorthand for request
// res is shorthand for response
app.get("/api", (request, response) => {
    response.json({ message: "Welcome to the bank of josh" });
});

app.post("/api/postData", (request, response) => {

    console.log(request.body);
    response.json({requestBody: request.body})
});










// this needs to be below the other code blocks
console.log('Hi');
app.listen( port, () => console.log(`Listening on port: ${port}`) );
