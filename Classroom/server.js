const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const cookieParser = require("cookie-parser");

// app.use(express.json())
app.use(cookieParser("secretcode")); //for signed cookies
//sending cookies
//npm i cookie-parser
//cookie is a small piece of data that a server sends to the user's web browswer.

app.get("/getsignedcookies", (req, res) => {
  res.cookie("madeIn", "India", { signed: true });
  res.send("signed cookie sent");
});

app.get("/verify", (req, res) => {
  console.log(req.signedCookies);
  res.send("verified");
});

app.get("/getcookies", (req, res) => {
  res.cookie("greet", "namaste");
  res.cookie("madeIn", "India");
  res.send("sent you some cookies");
});

app.get("/greet", (req, res) => {
  let { name = "KV" } = req.cookies;
  res.send(`hello${name}`);
});

app.get("/", (req, res) => {
  console.dir(req.cookies); //print unsigned cookies
  res.send("Hi,I am root!");
});

app.use("/users", users);
app.use("/posts", posts);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
