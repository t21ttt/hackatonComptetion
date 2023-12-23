const AdminModel = require('../models/AdminModel');

exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await AdminModel.find({});
    res.json(admins);
  } catch (err) {
    res.json(err);
  }
};

exports.getAdminById = async (req, res) => {
  try {
    const id = req.params.id;
    const admin = await AdminModel.findOne({ _id: id });
    res.json(admin);
  } catch (err) {
    res.json(err);
  }
};

exports.updateAdminById = async (req, res) => {
  try {
    const id = req.params.id;
    const admin = await AdminModel.findOneAndUpdate(
      { _id: id },
      {
        fullName: req.body.fullName,
        email: req.body.email,
        Password: req.body.Password,
      },
      { new: true }
    );
    res.json(admin);
  } catch (err) {
    res.json(err);
  }
};

exports.deleteAdminById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await AdminModel.findByIdAndDelete({ _id: id });
    res.json(result);
  } catch (err) {
    res.json(err);
  }
};

exports.createAdmin = async (req, res) => {
  try {
    const { fullName, email, Password } = req.body;
    const admin = await AdminModel.create({
      fullName,
      email,
      Password,
    });
    res.json(admin);
  } catch (err) {
    res.json(err);
  }
};