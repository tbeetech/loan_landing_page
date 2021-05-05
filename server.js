const express = require("express");
const sendMail = require('./mail')
const bodyParser = require("body-parser");
const app = express();
var path = require("path")
var favicon = require('serve-favicon');
app.use(express.static(__dirname + "/public"));

// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())


app.post("/contact", (req, res) => {

  const {subject, email, text} = req.body
  console.log('Data: ', req.body);

  sendMail(email, subject, text, function(err,data){
    if(err) {
      res.status(500).json({ message: 'Internal Error'});
    } else {
      res.json({message: "Email has been sent!!"})
    }
  })
  return res.redirect("/index")
});


app.use(favicon(path.join(__dirname, 'public','images', 'favicon.ico')))


app.get("/", (req, res) => {
  res.render("index");
});

app.get("/assetinfo", (req, res) => {
 res.render("assetinfo")

})

app.get("/about-our-company", (req, res) => {
  res.render("about-our-company")
});

app.get("/loaninfo", (req, res)=>{
  res.render("loaninfo")
})
app.get("/business-services", (req, res)=>{
  res.render("business-services")
});


app.get("/contact", (req, res)=> {
  res.render("contact")
});

//MAILING SYSTEM.....

app.set("view engine", "ejs");


app.listen(8080, () => {
  console.log("compassionate development server is now running");
});
