const express = require("express");
const cors = require("cors");
const app = express();
const methodOverride = require("method-override");
const path = require("path");
const corsOptions={
    origin:"http://localhost:8080",
    methods: ['GET'],
    allowedHeaders: ['text/css','text/html']
  }

app.use(cors(corsOptions));


app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"src")));
app.set("views",path.join(__dirname,"views"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.set("view engine" ," ejs")


app.listen("8080",()=>{
    console.log("Server is listening on port 8080");
});


app.get("/",(req,res)=>{
    res.render("index.ejs");
});
