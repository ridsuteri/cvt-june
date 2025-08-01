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
 
// console.log(students)


// problem - 2

// You are given an array of student objects. Each student has the following properties:

// name (string): The student's name

// score (number): The score obtained in the exam (out of 100)

// passed (boolean): Whether the student passed the exam or not (pass mark is 40+)

// Your tasks are to:

// ✅ Use filter() to get an array of all students who passed the exam.

// 📈 Use map() to get an array of strings in the format: "Alice scored 87 marks."

// 🧮 Use reduce() to calculate the average score of all students.


const students2 = [
  { name: "Alice", score: 87, passed: true },
  { name: "Bob", score: 36, passed: false },
  { name: "Charlie", score: 52, passed: true },
  { name: "Daisy", score: 29, passed: false },
  { name: "Ethan", score: 91, passed: true }
];

const passed = students2.filter((student)=>{
  return student.passed
})

students2.map((student)=>{
  console.log(`${student.name} scored ${student.score} marks.`)
})

const average = (students2.reduce((total, student)=>{
  return total = total+student.score
},0))/students2.length;

// console.log(passed)
console.log(average)