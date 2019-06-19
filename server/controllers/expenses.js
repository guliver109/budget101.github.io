var Expenses = require('../models/Expenses');

function create(req, res){
    console.log(req.session, "from create expenses session");
    console.log(req.body, "from create body");
    if (req.session.user) {
        Expenses.create(req.body).then(result => {
            console.log(result, "result from expenses create");
        }).catch(err => {
            if (err) throw err;
        })
    } else {
        res.send('no user is logged in');
    }
    
}
module.exports = {
    create
}