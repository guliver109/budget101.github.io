const   router = require('express').Router(),
        { logIn, signUp, cookieChecker, sessionChecker, logOut } = require('../controllers/user');

router.use(cookieChecker);        

router.post('/login', sessionChecker, logIn);

router.post('/signup', sessionChecker, signUp);

router.get('/logout', logOut);

module.exports = router;