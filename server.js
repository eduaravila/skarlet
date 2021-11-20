const express = require("express");
const app = express();

const PORT = process.env.PORT_SERVER || 5001;
const TEMPLATE = "public/index.html";

// serve assets, if they exist
app.use(express.static("public"));

// otherwise serve Routify
app.get("*", async (req, res) => {
  res.sendFile(TEMPLATE, { root: __dirname });
});

// start server
app.listen(PORT);
console.log("serving on port", PORT);
