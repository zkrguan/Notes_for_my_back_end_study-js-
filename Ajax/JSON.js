/**
 * 2 JSON
 * 
 * */
/**
 * JSON => Javascript Object Notation
 * This is a plain-text format.
 * 
 * Why we use it?
 * JSON is the way to define an object using object literal notation
 * By using the built in JSON object, we can convert JSON object from plain text to JS object 
 * Vice versa
 * 
 */

// Using JSON.parse to convert from the plain text to an object // 
let myJSONStr = '{"users":[{"userId":1,"fName":"Joe","lName":"Smith"},{"userId":2,"fName":"Jeffrey","lName":"Sherman"},{"userId":3,"fName":"Shantell","lName":"McLeod"}]}';

// Convert to An Object:
let myObj = JSON.parse(myJSONStr);

// Access the 3rd user (Shantell McLeod)
console.log(myObj.users[2].fName); // Shantell


// USing JSON.stringify(objectName) to convert object back to plain text//
let myObj2 = {users: [{userId:1,fName:"Joe",lName:"Smith"},
                        {userId:2,fName:"Jeffrey",lName:"Sherman"},
                        {userId:3,fName:"Shantell",lName:"McLeod"}]};

// Now you can understand what we did in the multer part//
let myJSON = JSON.stringify(myObj2);

console.log(myJSON);
 // Outputs: '{"users":[{"userId":1,"fName":"Joe","lName":"Smith"},{"userId":2,"fName":"Jeffrey","lName":"Sherman"},{"userId":3,"fName":"Shantell","lName":"McLeod"}]}'



/**
 * Responding with JSON( by using the express method)
 * 
 * Express.js made it so easy to respond with JSON
 * 
 * Simply using the res.json in your route like this.
 * 
 */
 const express = require("express");
 const app = express();
 
 const HTTP_PORT = process.env.PORT || 8080;
 
 // setup a 'route' to listen on the default url path (http://localhost)
 app.get("/", (req, res) => {
 
     let message = { msg: "Welcome!"};
 
     // send the message as JSON//
     // Simply like that unlike the traditional method//
     res.json(message);
 });
 
 // setup http server to listen on HTTP_PORT
 app.listen(HTTP_PORT, () => {
     console.log("Express http server listening on: " + HTTP_PORT);
 });
 



 

