import { v4 as uuidv4 } from "uuid"; // wykorzystujemy bardzo popularną bibliotekę uuid, która tworzy dla nas id w formacie uuid4 (https://www.npmjs.com/package/uuid) (https://en.wikipedia.org/wiki/Universally_unique_identifier)
// przykładowe uuid: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

// Data
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

// Funkcje
const setStudentName = (studentId, newName) => {
  // tutaj Twoj kod
};
const addStudent = (newStudent) => {
  // tutaj Twoj kod
};

export { students, setStudentName, addStudent };
