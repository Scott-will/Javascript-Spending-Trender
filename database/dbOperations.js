var config = require("./dbconfig");
const sql = require("mssql");

async function getExpenses(){
    try{
        let pool = await sql.connect(config);
        let expenses = await pool.request().query("SELECT * FROM Expenses");
        return expenses.recordsets;
    }
    catch(error){
        console.log(error);
        return null;
    }
}

async function addExpense(expense){
    try{
        let pool = await sql.connect(config);
        console.log(`INSERT INTO Expenses (category, amount, timestamp) VALUES (${expense.category}, ${expense.amount}, ${new Date().getTime()})`)
        let expenses = await pool.request().query(
            `INSERT INTO Expenses (category, amount, unixtimestamp) VALUES (${expense.category}, ${expense.amount}, ${Number(new Date().getTime())})`
            );
        return true;
    }
    catch(error){
        console.log(error);
        return false;
    }
}

module.exports = {
    getExpenses : getExpenses,
    addExpense : addExpense
}