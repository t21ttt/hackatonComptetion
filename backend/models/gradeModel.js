
const mongoose = require('mongoose');

const gradeScheme = new mongoose.Schema({
    coarse: { type: mongoose.Schema.Types.ObjectId, ref: 'CoarseModelSchema' },
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    grade: Number,
 
});

const gradeSchema= mongoose.model('gradeSchema', gradeScheme);
module.exports = gradeSchema;