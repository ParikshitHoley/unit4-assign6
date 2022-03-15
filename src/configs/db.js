const mongoose = require('mongoose');

module.exports = connect = () =>{
    return mongoose.connect('mongodb+srv://niks:niks_1441@cluster0.tkouq.mongodb.net/Library?retryWrites=true&w=majority')
}