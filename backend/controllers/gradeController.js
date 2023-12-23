exports.getAllGrade = async (req, res) => {
    try {
      const grades = await Grade.find()
        .populate('coarse')
        .populate('student')
        .exec();
  
      // Prepare the grade report
      const report = grades.map((grade) => {
        return {
          studentName: grade.student.name,
          coarseTitle: grade.coarse.title,
          creditHour: grade.coarse.creditHour,
          ects: grade.coarse.ects,
          grade: grade.grade,
          year: grade.year,
          semester: grade.semester,
        };
      });
  
      res.json(report);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  exports.getAllGradeById = async (req, res) => {
    try {
      const id = req.params.id;
      const grade = await gradeModel.findOne({ _id: id });
      res.json(grade);
    } catch (err) {
      res.json(err);
    }
  };

  
exports.createCoarse = async (req, res) => {
    try {
      const { Coarsetname, studentId,preRequstCoarse,department,creditHour,estc,status,semister,year,isComplated} = req.body;
       const Coarse = await coarseModel.create({ Coarsetname, studentId,preRequstCoarse, department,creditHour,estc,status,semister,year,isComplated});
      res.json(Coarse);
    } catch (err) {
      res.json(err);
    }
  };