const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Service is up and running");
});

app.listen(8000,() => {
    console.log ("Server is up");
});
