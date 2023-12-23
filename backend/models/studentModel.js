const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  fullName: String,
  gender: String,
  department: String,
  password: String,
});

const StudentModel = mongoose.model('StudentModel', studentSchema);

module.exports = StudentModel;