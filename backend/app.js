// All requires
const express = require('express');
const mongoose = require('mongoose');
const Expense = require('./models/Expense');
const cors = require('cors');

// Setups
const app = express();
const port = 5000;
app.use(express.json());
app.use(cors())

// Database connection
mongoose.connect('mongodb+srv://evans2006:i7KKVdHwLCalz8AE@finance-tracker.ecscqjq.mongodb.net/financeDB?appName=finance-tracker')
        .then(() => console.log('It is a success for you'))
        .catch((error) => console.log("Somethig seems off with the connection", error))




app.get('/expenses', (req, res) => {
    Expense.find()
            .then(expenses => res.json(expenses))
            .catch((error) => res.json(error))
})

app.post('/expenses', (req, res) => {
    console.log(req.body);
    const expense = new Expense(req.body); // we create the variable that will carry the new data to be added
    expense.save()
            .then(expense => res.json(expense))
            .catch((error) => res.json(error))
})

app.delete('/expenses/:id', (req, res) => {
    const id = req.params.id;
    Expense.findByIdAndDelete(id)
            .then(id => res.json('Deleted successfully'))
            .catch((error)=> res.json(error))
})

app.put('/expenses/:id',(req, res) => {
    const id = req.params.id;
    const newData = req.body;
    Expense.findByIdAndUpdate(id, newData)
            .then(id => res.json('Updated successfully'))
            .catch((error) => res.json(error))
})


app.listen(port, function(){
    console.log("Server is running on port 5000")
});