const {Schema, model} = require('mongoose');

BudgetSchema = new Schema({
    income_from: String, 
    comment: String,
    amount: Number,  
    // timestamps: true, 
});

module.exports = model('budget', BudgetSchema); 