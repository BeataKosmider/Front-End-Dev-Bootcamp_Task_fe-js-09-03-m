import { v4 as uuidv4 } from "uuid";
const students = [
  {
    id: uuidv4(),
    name: "Jan Dudek",
    age: 33,
  },
  {
    id: uuidv4(),
    name: "Beata Zalewska",
    age: 35,
  },
];

const setStudentName = (studentId, newName) => {
  const newStudents = students.map((student) =>
    student.id === studentId ? { ...student, name: newName } : student
  );
  console.log(students);
  return newStudents;
};
const addStudent = (newStudent) => {
  const newStudents = [...students, newStudent];
  return newStudents;
};

export { students, setStudentName, addStudent };
