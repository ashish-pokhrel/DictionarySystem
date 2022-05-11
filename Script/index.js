const express = require('express');
const app = express();


app.get("/", (req, res) => {
    const path = __dirname.split(`Script`);
    res.sendFile(path[0] + "/Web/homePage.html");
});

app.listen(3000, console.log("Program Started"));