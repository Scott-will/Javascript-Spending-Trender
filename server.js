const dbOperations = require("./database/dbOperations");
var Db = require("./database/dbOperations");

var Expense = require("./database/models/expense");

var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

router.use((request, response, next) => {
console.log("middleware");
next();
})
router.route("/expenses").get((request, response) => {
    dbOperations.getExpenses().then(result => {
        if(result == null){
            response.status(500).send('Failed');
        }
        else{
            response.json(result);
        }
    })
});

router.route("/add-expense").post((request, response) => {
    let expense = {...request.body}
    console.log(request.body);
    dbOperations.addExpense(expense).then(result => {
        if(result){
            response.status(200).send('Status: OK');
        }
        else{
            response.status(500).send('Failed');
        }
        
    })
});

var port = process.env.PORT || 8090;
app.listen(port);
console.log("listening on port: " + port);



