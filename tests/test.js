import { v4 as uuidv4 } from "uuid";
import { students, setStudentName, addStudent } from "./../index.js";

const STUDENT1_ID = students[0].id;
const STUDENT1_NEW_NAME = "Marek Dudek";

const NEW_STUDENT = { id: uuidv4(), name: "Jaroslaw Nowy", age: 1 };

beforeEach(() => {});

describe("", () => {
  it("Funkcja setStudentName zwraca zmienionych studentow", async () => {
    const newStudents = setStudentName(STUDENT1_ID, STUDENT1_NEW_NAME);
    const newName = newStudents.find(({ id }) => id === STUDENT1_ID).name;
    expect(newName).toBe(STUDENT1_NEW_NAME);
  });
  it("Funkcja addStudent zwraca zmienionych studentow", async () => {
    const newStudents = addStudent(NEW_STUDENT);
    const expectedStudents = [...students, NEW_STUDENT];
    expect(newStudents.length).toBe(expectedStudents.length);
  });
});
