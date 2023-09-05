function Student(name, gender, age) {

  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
};
Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};
Student.prototype.addMarks = function (...marksToAdd) {

  let marks = this.marks;

  if ([...marksToAdd] !== [] && this.marks !== undefined) {
    marks.push(...marksToAdd);
  };

};
Student.prototype.getAverage = function () {

  arrayOfMarks = this.marks;

  if (arrayOfMarks === undefined) {

    return 0;

  } else {
    const sum = arrayOfMarks.reduce((a, b) => a + b, 0);
    const avg = (sum / arrayOfMarks.length) || 0;
    return avg;
  }
};
Student.prototype.exclude = function (reason) {

  delete this.marks;
  delete this.subject;
  this.excluded = reason;
};
let student1 = new Student("Анастасия", "женский", 19);
console.log(student1);
student1.setSubject("Geometry");
console.log(student1.setSubject);
console.log(student1.getAverage()); // 0
student1.addMarks(5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
// {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Анастасия", subject: "Geometry"}
let student2 = new Student("Роман", "мужской", 25);
student2.setSubject("Story");
student2.exclude('неудовлетварительная учёба');
console.log(student2);
// {name: "Роман", gender: "мужской", age: 25, excluded: "неудовлетварительная учёба"}