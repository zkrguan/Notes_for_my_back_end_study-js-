const express = require('express');
const app = express();
const path = require('path');
//1 After npm install express-handlebars, import the express-handlebars//
const exphbs = require("express-handlebars");


const HTTP_PORT = process.env.PORT || 5000;

//2 This will tell our server that any file with the “.hbs” extension 
//(instead of “.html”) will use the handlebars “engine” (template engine).//

/*
This is something serious. 
A:  Prof never mention anything about setting up Paths for partials and normal layouts
    In the real proj, you would not only have one layout
    So this is why we need to set it up here. 
    Syntax from recent handlebar is exphbs.engine({the attribute name you would like to set})
        layoutsDir: the path to the full template
        partialsDir: the path to the partials 
                    you could use an array for this because there could be multiple partials

B: You could also add the CUSTOMIZED handlebar helpers into the configuration
   You could define two types of helpers here.
    Again inside the exphbs.engine({
        helpers:{
            helper1:function(options){
                // the helper funciton without context//
            }
            e.g.:
            strong: function(options){
                return '<strong> +options.fn(this)+'</strong>;
            }
            // This is just used you wrap the HTML outside of the content// 
            // options paramter contains a property called fn//
            // by using this, we make sure the .fn method will return the right context//

            // in .hbs we will just use (just like how we use built in helpers from hbs)
            {{#strong}}{{data,name}}{{/strong}}

            
            
            helper2:funciton(context, options){
                // the helper functions with context//
            }
            
            e.g. :
            list: function(context, options) {
                var ret = "<ul>";
                
                for(var i = 0; i < context.length; i++) {
                    ret = ret + "<li>" + options.fn(context[i]) + "</li>";
                }
                
                return ret + "</ul>";
            }

            // This is normally used for helpers iterating just like {{#each data}}{{/each}}
        }
    })

    we will have some more examples in the latter section.
*/
app.engine('hbs', exphbs.engine({
    extname: 'hbs', 
    defaultLayout: 'base', 
    layoutsDir: path.resolve(__dirname, 'views/'),
    partialsDir  : [
        //  path to your partials
        path.join(__dirname, 'views/'),
    ]
}));

app.set('view engine','.hbs');



app.get('/',(req,res)=>{
    res.send("Hi")
})

app.get('/viewData',(req,res)=>{
    // done before learning the non-relational database//
    // used some hardcoded data instead//
    let example={
        name:"Guan",
        age:"100",
        school:"Seneca College",
        if:true
    };

    // This is how we send the json to the front end//
    // res.json(example);

    //3 using res.render() and HBS//
    // first arg is the fileNameWithoutExtension//
    // second arg is an object{
    // data: variableName, 
    // layout: false 
    //      }
    // data field holds the data
    // layout holds a boolean, false means don't use default template

    res.render('viewData',{
        data: example,
        layout: false
    });
})



app.get('/viewArr',(req,res)=>{
    let example2=[
        {name:'Guan',age:200},
        {name:'Zhaokai',age:300},
        {name:'Rajinder',age:400}
    ]
    res.render('viewArr',{
        data:example2,
        layout:false
    });
});


app.listen(HTTP_PORT,()=>{
    console.log("my humble server is listening on " + HTTP_PORT)
})


