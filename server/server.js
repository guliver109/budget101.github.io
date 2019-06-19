const express = require('express'),
    cookieParser = require('cookie-parser'),
    app = express(),
    path = require('path'),
    PORT = process.env.PORT || 3000,
    userRoutes = require('./routes/user'),
    expensesRoutes = require('./routes/expenses');

require('./config/connection'); // data base connection

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.get('/favicon.ico', (req, res, next) => {
    next();
})
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
// }  

require('./config/session')(app);
// require('dotenv').config({path:__dirname+'/./../../.env'})
// require('dotenv').config({ path: __dirname + './.env' })
// app.get('')

app.use(express.static(path.join(__dirname, '../client/build')));

app.use(userRoutes);
app.use('/expenses', expensesRoutes);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + './../client/build/index.html'))
})

app.listen(PORT);