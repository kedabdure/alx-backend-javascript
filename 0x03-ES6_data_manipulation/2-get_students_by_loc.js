export default function getStudentsByLocation(data, city) {
  const students = data.filter((item) => item.location === city)
  return students
}
