// include mysql module
var mysql = require('mysql');

// create a connection variable with the details required
var con = mysql.createConnection({
    host: "localhost",    // ip address of server running mysql
    user: "root",    // user name to your mysql database
    password: "12345678", // corresponding password
    database: "entries"
});


function getData() {
    let sql = 'Select * From entries';
    con.query(sql, (err, res) => {
        console.log(res);
    });
}

// connect to the database.
con.connect(function (err) {
    if (err) throw err;
    console.log(getData());
});
