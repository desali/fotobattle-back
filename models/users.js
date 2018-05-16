const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	username: String,
	fullname: String,
	email: String,
	city: String,
	birthdate: String,
	gender: String,
	password: String,
	status: String,
	avatar: String,
	background: String,
	coins: Number
});

const User = mongoose.model('User', UserSchema);

module.exports = User;