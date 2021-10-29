const express = require("express");
var cookieParser = require("cookie-parser");
const app = express();
const PORT = 3000;
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");
// User for session cookike
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");

app.use(express.urlencoded());
app.use(cookieParser());

app.use(express.static("./assets"));

app.use(expressLayouts);
//extract style and script for sub-pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// Set up view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(
  session({
    name: "codeial",
    // TODO chnage the secret before deployment in production
    secret: "blasomething",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

// USe express Router
app.use("/", require("./routes"));

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error: ${err}`);
  }
  console.log(`Server Running on Port 🚀 ${PORT}`);
});
