let name = "Prince Nna";
const courses = ["HTML", "CSS", "JavaScript", "Flutter", "Python", "Go", "C#"];

console.log("My name is: " + name);
console.log(courses);

if ((courses.length % 2) != 0) {
  for (var i = 1; i <= 200; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}else {
  for (var i = 1; i <= 200; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
