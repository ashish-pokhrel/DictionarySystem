const sqlConfig = {
    user: "root",
    password: "1234",
    database: "Test",
    server: 'localhost',
    options: {
        trustServerCertificate: true, // change to true for local dev / self-signed certs
        instancename: "ASHISH",
        trustedconnections: true
    }
}

module.exports = sqlConfig;
