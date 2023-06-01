class Expense{
    constructor(id, category, amount){
        this.id = id;
        this.category = category;
        this.amount = amount;
        this.timestamp = new Date().getTime();
    }
}

module.exports = Expense;