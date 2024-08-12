export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const updatedStudent = { ...student };
      for (const gradeInfo of newGrades) {
        if (updatedStudent.id === gradeInfo.id) {
          updatedStudent.grade = gradeInfo.grade;
        }
      }
      if (updatedStudent.grade === undefined) {
        updatedStudent.grade = 'N/A';
      }
      return updatedStudent;
    });
}
