const mongoose = require('mongoose');



const CoarseModelSchema = new mongoose.Schema({
    Coarsetname: String,
    prerequisites: [{
    type: String
  }],
  creditHour: Number,
  estc: Number,
  semister: Number,
  status: Boolean,
  year: Number,
});

const CoarseModel = mongoose.model('CoarseModel', CoarseModelSchema);
module.exports = CoarseModel;