const studentAverage = (students, grades) => {
  return students.map((student, index) => {
    return {
      name: student,
      average:
        grades[index].reduce((acc, currValue) => acc + currValue, 0) /
        grades[index].length,
    };
  });
};

module.exports = studentAverage;
