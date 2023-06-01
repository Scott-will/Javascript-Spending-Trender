const config = {
    user: "expenseUser",
    password: "Welcome1234",
    server:"127.0.0.1",
    database:"SpendingTracker",
    port:1433,
    options:{
        trustedConnection:true,
        trustServerCertificate: true
    }
}

module.exports = config;