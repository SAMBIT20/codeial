const express = require("express");
const app = express();
const PORT = 3000;
const expressLayouts = require("express-ejs-layouts");

app.use(express.static("./assets"));

app.use(expressLayouts);
//extract style and script for sub-pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// USe express Router
app.use("/", require("./routes"));

// Set up view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error: ${err}`);
  }
  console.log(`Server Running on Port 🌎 ${PORT}`);
});
