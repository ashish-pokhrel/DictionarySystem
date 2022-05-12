const config = require('./dbconfig');
const sql = require('mssql');

async function getList() {
    try {
        let pool = await sql.connect(config);
        let results = await pool.request().query("Select * From UserDetail");
        return results.recordsets;
    }
    catch (e) {
        console.log(e);
    }
}

module.exports = {
    getList: getList
}

// const dboperations = require('./msSqlServer/dboperations');
// dboperations.getList().then(result => {
//     console.log(result);
//     res.send(result);
// })