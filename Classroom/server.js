const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

//Express Session
//used to store user data between HTTP Requests
//Express session uses cookies to store session ID on client side , its save the information and make ID for that information form of cookie.

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions = {
  secret: "mysupersecretstring",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(flash());

//Using res.locals to make flash msg available in all templates
app.use((req, res, next) => {
  res.locals.successMsg = req.flash("success");
  res.locals.errorMsg = req.flash("error");
  next();
});

app.get("/register", (req, res) => {
  let { name = "Anonymous" } = req.query;
  req.session.name = name;
  if (name === "Anonymous") {
    req.flash("error", "user not registered "); //flasg msg is show only once
  } else {
    req.flash("success", "user registered successfully"); //flasg msg is show only once
  }
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.render("page.ejs", { name: req.session.name });
});

// app.get("/reqcount", (req, res) => {
//   if (req.session.count) { //track the single session
//     req.session.count++;
//   } else {
//     req.session.count = 1;
//   }
//   res.send(`You sent a request ${req.session.count} times`);
// });

// app.get("/test", (req, res) => {
//   res.send("test succesful!");
// });

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
