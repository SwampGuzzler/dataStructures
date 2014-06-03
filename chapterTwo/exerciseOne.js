// Create a grades object that stores a set of student grades in an object. Provide a
// function for adding a grade and a function for displaying the student’s grade average.

var grades = {};
grades.scores = [1,2,3];

grades.add = function(grade) {
    grades.scores.push(grade);
}

grades.average = function() {
    var totalScore = 0;
    for (i = 0; i < grades.scores.length; i++) {
        totalScore += grades.scores[i];
    }
    var avg = totalScore/grades.scores.length;
    console.log(avg);
}

grades.add(4);
console.log(grades.scores);
grades.average();