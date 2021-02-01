const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: String,
    email: String,
    tel: String
}, { timestamps: true })

const User = mongoose.model('user', UserSchema)
module.exports = User 