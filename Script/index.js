const express = require('express');
const app = express();
const dboperations = require('./msSqlServer/dboperations');

app.get("/", (req, res) => {
    // const path = __dirname.split(`Script`);
    // const result = sql.query`select * from Test`
    // console.dir(result)
    // res.sendFile(path[0] + "/Web/homePage.html");

    dboperations.getList().then(result => {
        console.log(result);
        res.send(result);
    })

});



app.listen(3000, function () { console.log("Program Started") });