const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { generateToken } = require('../routes/lib/token');
mongoose.connect('mongodb://localhost:27017/sparcs', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
})
.then(() => {
	console.log('Connected to MongoDB');
})
.catch((error) => {
	console.log(error);
});

const User = new Schema({
    username: String,
    password: String,
})

User.statics.findByUsername = function(username) {
    return this.findOne({'username':username}).exec();
}

User.statics.verify = function(username, password) {
    return this.findOne({'username' : username,'password':password}).exec();
}

User.statics.createUser = function(username, password){
    const user = new this({
        username: username,
        password: password
    });
    return user.save();
}

User.methods.makeToken = function(){
    const payload = {
        _id: this._id,
        username: this.username
    }
    return generateToken(payload);
}

module.exports = mongoose.model('User', User)