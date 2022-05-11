const sql = require('mysql');

const mySqlConfig = {
    user: "root",
    password: "12345678",
    database: "test",
    server: 'localhost',
    port: 3306,
    options: {
        trustServerCertificate: true, // change to true for local dev / self-signed certs
        instancename: "ASHISH",
        trustedconnections: true
    }
}

module.exports = mySqlConfig;

// function getList() {
//     sql.connect(mySqlConfig, function (err) {
//         if (err) console.log(err);
//         // create Request object
//         var request = new sql.Request()
//         request.query('select * from userDetail', function (err, recordset) {
//             if (err) console.log(err)
//             else
//             console.log("success")
//             return recordset;
//         })
//     });
// }

// module.exports = {
//     getList: getList
// }