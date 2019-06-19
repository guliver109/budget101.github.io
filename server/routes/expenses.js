const   router = require('express').Router(),
        { create } = require('../controllers/expenses');

router.post('/signup', create);

module.exports = router; 