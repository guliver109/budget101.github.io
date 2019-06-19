const {Schema, model} = require('mongoose');

ExpensesSchema = new Schema({
    payee: String,
    comment: String,
    amount: Number,
    // timestamps: true,
});

module.exports = model('Expenses', ExpensesSchema);