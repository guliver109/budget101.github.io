const   {Schema, model} = require('mongoose'),
        bcrypt = require('bcryptjs'),
        SALT = 10;

userSchema = new Schema({
    userName: {type: String, unique: true},
    password: {type: String },
    expenses:[{
        type: Schema.ObjectId,
        ref: 'Expenses'
    }],
    budget: [{
        type: Schema.ObjectId,
        ref: 'Budget'
    }]
});

userSchema.pre('save', function(next) {
    let user = this;
    if(!user.isModified('password')) return next();
    bcrypt.genSalt(SALT, function(err, salt) {
        if (err) throw next(err);
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) throw next(err);
            user.password = hash;
            next();
        })
    }) 
})

userSchema.methods.comparePassword = (userPassword, cb) => {
    bcrypt.compare(userPassword, this.password, (err, match) => {
        if (err) throw err;
        cb(match);
    })
}

module.exports = model('User', userSchema)
    
