export default function getStudentIdsSum(data) {
  const sum = data.reduce((accumulator, current) => (accumulator + current.id), 0);
  return sum;
}
