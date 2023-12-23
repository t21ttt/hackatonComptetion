const CoarseModel = require('../models/coarseModel');

exports.getAllCoarse = async (req, res) => {
  try {
    const coarse = await CoarseModel.find({});
    res.json(coarse);
  } catch (err) {
    res.json(err);
  }
};

exports.getCoarseById = async (req, res) => {
  try {
    const id = req.params.id;
    const coarse = await CoarseModel.findOne({ _id: id });
    res.json(coarse);
  } catch (err) {
    res.json(err);
  }
};

exports.getCoarseByyearSemester = async (req, res) => {
  try {
    const { semister, year } = req.query;  

    const Coarse = await CoarseModel.find({
      semister: semister,
      year: year,
    });

    res.json(Coarse);
  } catch (err) {
    res.json(err);
  }
};

exports.updateCoarseById = async (req, res) => {
  try {
    const id = req.params.id;
    const coarse = await CoarseModel.findOneAndUpdate(
      { _id: id },
      {
        Coarsetname: req.body.Coarsetname,
        prerequisites: req.body.prerequisites,
        creditHour: req.body.creditHour,
        estc: req.body.estc,
        semister: req.body.semister,
        status: req.body.status,
        year: req.body.year,
      },
      { new: true }
    );
    res.json(coarse);
  } catch (err) {
    res.json(err);
  }
};

exports.deleteCoarseById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await CoarseModel.findByIdAndDelete({ _id: id });
    res.json(result);
  } catch (err) {
    res.json(err);
  }
};

exports.createCoarse = async (req, res) => {
  try {
    const {
        Coarsetname,
      prerequisites,
      creditHour,
      estc,
      semister,
      status,
      year,
    } = req.body;
    const coarse = await CoarseModel.create({
        Coarsetname,
      prerequisites,
      creditHour,
      estc,
      semister,
      status,
      year,
    });
    res.json(coarse);
  } catch (err) {
    res.json(err);
  }
};