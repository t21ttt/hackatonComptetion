const mongoose = require("mongoose");

const studentCoarseModelSchema = new mongoose.Schema({
  Coarsetname: String,
  creditHour: Number,
  estc: Number,
});

const studentCoarseModel = mongoose.model(
  "StudentCoarseModel",
  studentCoarseModelSchema
);
module.exports = studentCoarseModel;