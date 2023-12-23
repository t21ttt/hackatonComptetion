const StudentModel = require('../models/studentModel');

exports.getAllStudents = async (req, res) => {
  try {
    const students = await StudentModel.find({});
    res.json(students);
  } catch (err) {
    res.json(err);
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await StudentModel.findOne({ _id: id });
    res.json(student);
  } catch (err) {
    res.json(err);
  }
};

exports.updateStudentById = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await StudentModel.findOneAndUpdate(
      { _id: id },
      {
        fullName: req.body.fullName,
        gender: req.body.gender,
        department: req.body.department,
        password: req.body.password,
      },
      { new: true }
    );
    res.json(student);
  } catch (err) {
    res.json(err);
  }
};

exports.deleteStudentById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await StudentModel.findByIdAndDelete({ _id: id });
    res.json(result);
  } catch (err) {
    res.json(err);
  }
};

exports.createStudent = async (req, res) => {
  try {
    const { fullName, gender, department, password } = req.body;
    const student = await StudentModel.create({
      fullName,
      gender,
      department,
      password,
    });
    res.json(student);
  } catch (err) {
    res.json(err);
  }
};