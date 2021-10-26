const express = require("express");
const app = express();
const PORT = 3000;

// USe express Router
app.use("/", require("./routes"));

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error: ${err}`);
  }
  console.log(`Server Running on Port 🌎 ${PORT}`);
});
