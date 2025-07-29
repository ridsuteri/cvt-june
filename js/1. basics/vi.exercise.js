const students = [
  {
    name: "John Doe",
    age: 20,
    marks: 85,
    scholarship: true,
  },
  {
    name: "Jane Smith",
    age: 22,
    marks: 32,
    scholarship: false,
  },
  {
    name: "Alice Johnson",
    age: 19,
    marks: 90,
    scholarship: true,
  },
  {
    name: "Bob Brown",
    age: 21,
    marks: 65,
    scholarship: false,
  },
  {
    name: "Charlie Lee",
    age: 23,
    marks: 28,
    scholarship: true,
  },
];

// add a status field to all the objects inside student array which represents if the student passed or failed the exam,
// the passing criteria is 33 marks or above
students.forEach((student) => {
  if (student.marks > 33) {
    student.status = "pass";
  }
  else student.status = "fail";
});
 
console.log(students)