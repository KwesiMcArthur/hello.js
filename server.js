const express = require("express");
const app = express();
const port = 3001;

app.get("/hello", (req, res) => {
  res.send("Hello from express!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
