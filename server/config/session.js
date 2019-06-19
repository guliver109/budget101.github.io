const   session = require('express-session'),
        MongoStore = require('connect-mongo')(session);

module.exports = function (app) {
    app.set('trust proxy', 1)
    app.use(session({
        key: 'user_sid',
        secret: 'getting_better',
        saveUninitialized: true,
        resave: true,
        store: new MongoStore({
            url: 'mongodb://heroku_q3s09wkh:b27ev486gb6n7d5ldjbdsad802@ds149616.mlab.com:49616/heroku_q3s09wkh',
            autoRemove: 'interval',
            autoRemoveInterval: 10 //In minutes. Default
        }),
        cookie: { secure: false }
    }))
}