/**
 * What is a REST or RESTful API?
 *  According to my prof, we can think a REST API is a way to use the HTTP protocol(i.e. GET, post, put, delete)
 *  However, REST API has a standard message formet to perform CURD operations on a data source.
 */

/**
 * Before the example:
 * 
 * The structure of the user is like this.
 * {userId: number, fName: string, lName: string}
 * 
 * Example:
 */

 const express = require("express");
 const app = express();
 const path = require("path")
 
 const HTTP_PORT = process.env.PORT || 8080;
//  GET ALL// 
 app.get("/api/users", (req, res) => {
     res.json({message: "fetch all users"});
 });
 //POST//
 app.post("/api/users", (req, res) => {
     res.json({message: "add a user"});
 });
 // GET Individual//
 // Notice that we can use the : userID in the route 
 // And req.params.userID to access the value put by the user in the URL//
 app.get("/api/users/:userId", (req, res) => {
     res.json({message: "get user with Id: " + req.params.userId});
 });
 // Update Individual // 
 app.put("/api/users/:userId", (req, res) => {
     res.json({message: "update User with Id: " + req.params.userId});
 });
 // Delete Individual//
 app.delete("/api/users/:userId", (req, res) => {
         res.json({message: "delete User with Id: " + req.params.userId});
 });

 /**
 * Created a view for this backend code, called RestAPI_Index.html
 * 
 */
  app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"RestAPI_Index.html"));
});
 
 // setup http server to listen on HTTP_PORT
 app.listen(HTTP_PORT, () => {
     console.log("Express http server listening on: " + HTTP_PORT);
 });
 

// Notice that  we use the request.params.whateverAfter: to access the value//
//              Also They may not return valid data (cuz there is no validation),
//              But the route is always there, and attemps to perform the requested operation


// Test the final code with the browser opened with the inspect mode//



//To make the browser capture the information in our routes
//1. 
//app.use(express.json());
// This is using the middleware to parse the incoming data. 

// Access data passed to our API using the req.body property/
// app.post("/api/users", (req, res) => {
//     res.json({message: "add the user: " + req.body.fName + " " + req.body.lName});
// });

// app.put("/api/users/:userId", (req, res) => {
//     res.json({message: "update User with Id: " + req.params.userId + " to " + req.body.fName + " " + req.body.lName});
// });

