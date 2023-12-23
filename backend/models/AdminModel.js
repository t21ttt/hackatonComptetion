const mongoose = require('mongoose');



const adminModel = new mongoose.Schema({
    fullName: String,
    email : String,
    Password: String,
    });

const adminModels = mongoose.model('AdminModel', adminModel);
module.exports = adminModels;



