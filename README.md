# 9.3

W pliku index.js znajdziesz dane studentów, do których musisz dopisać dwie update'ujące funkcje.

- setStudentName
  - inputem ma być `studentId` (String (uuid)) oraz `newName` (String)
  - outputem array wszystkich studentów (po zmianie wybranego studenta)
  - funkcja skorzysta z array `students` oraz metody `.map`
- addStudent
  - inputem ma być obiekt literalny `newStudent` nowego studenta z następującymi kluczami:
    - `studentId` (String (uuid))
    - `newName` (String)
    - `age` (Number)
  - outputem array wszystkich studentów (po dodaniu nowego studenta)
