const mongoose = require('mongoose'); // Import mongoose

const expenseSchema = new mongoose.Schema({ // Here am defining the Blueprint that will be used 
    amount: Number,
    category: String,
    date: String
})

const Expense = mongoose.model('Expense', expenseSchema); // Am telling mongoose to build from the blueprint

module.exports = Expense; // Put the created blueprint available to be seen, share it with other files