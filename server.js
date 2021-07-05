const express = require("express");
const app = express();


app.listen(5000, () => console.log("server running"));
app.get("/", (req, res) => {
    res.send("Welcome to the Server");
});