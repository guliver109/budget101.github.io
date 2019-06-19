var User = require('../models/User');

// for no session
function cookieChecker(req, res, next) {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');
    }
    next();
}

// for cookie with session
function sessionChecker(req, res, next) {
    let { user_sid } = req.cookies,
        { user } = req.session;
        console.log(user, "user from sessionChecker");
    if (user_sid && user) {
        let { userName, expenses, budget } = user,
            payload = { userName, expenses, budget };
        return res.send(payload);
    }
    next();
}

function logIn(req, res) {
    console.log('hit login')
    let { userName, password } = req.body;
    if (userName && password) {
        User.findOne({ userName }).then(user => {
            req.session.user = user;
            let { userName, expenses, budget } = req.session.user;
            res.send( userName, expenses, budget );
        }).catch(err => {
            if (err) throw err;
        })
    }
};

function signUp(req, res) {
    User.create(req.body).then(user => {
        req.session.user = user;
        let { userName, expenses, budget } = req.session.user;
        res.send(userName, expenses, budget);
    }).catch(err => {
        if (err) throw err;
    })
}

function logOut(req, res) {
    if (req.session.user && req.cookies.user_sid) {
        res.clearCookie('user_sid');
        req.session.destroy();
        res.send('logout successful')
    } else {
        res.sendStatus(400);
    }
}

module.exports = {
    logIn,
    signUp,
    cookieChecker,
    sessionChecker,
    logOut
}
