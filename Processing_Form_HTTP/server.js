const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");


const PORT = process.env.PORT || 5000;

// now we need to learn some MULTER // 

// this is how we set up the storage path and the file name//
const storage = multer.diskStorage({
    destination: "public/photos/",
    filename: (req, file,cb)=>{
        // real world example will be more complex// 
        // This is just using current time in millseconds to name the file//
        cb(null,Date.now()+path.extname(file.originalname));
    }
})

//tell multer to use the funciton above to name files
const upload = multer({storage:storage});

// set the static folder public
app.use(express.static('./public/'));

// setting a route on the root//
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/form.html"));
})

// using the post method //
// inserting the middleware func for multer to process the photo//
app.post("/reg", upload.single("photo"),(req,res)=>{
    // notice that the upload.single("must be the name attribute from the input tag of the photo")
    //        <input id="photo" type="file" name="photo"/><br />//
    
    // using dot operator to reach the req's attribute//
    const formData = req.body;
    const formFile = req.file;
    // send back the data in the form of HTML
    const dataReceived = "Your submission was received:<br/><br/>" +
      "Your form data was:<br/>" + JSON.stringify(formData) + "<br/><br/>" +
      "Your File data was:<br/>" + JSON.stringify(formFile) +
      "<br/><p>This is the image you sent:<br/><img src='/photos/" + formFile.filename + "'/>";
    res.send(dataReceived);
})


app.listen(PORT,()=>{
    console.log("My humble server is listening on the " + PORT);
})

