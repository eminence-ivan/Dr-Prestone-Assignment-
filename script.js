
let studentName = "Eminence Ivan";
let registrationNumber = "SCT211-0001/2024";
let academicProgramme = "Bachelor of Science in Computer Science";

console.log("Student Name: " + studentName);
console.log("Registration Number: " + registrationNumber);
console.log("Academic Programme: " + academicProgramme);



function calculateGrade(score) {
    if (score >= 70 && score <= 100) {
        return 'A';
    } else if (score >= 60 && score <= 69) {
        return 'B';
    } else if (score >= 50 && score <= 59) {
        return 'C';
    } else if (score >= 40 && score <= 49) {
        return 'D';
    } else if (score >= 0 && score < 40) {
        return 'E';
    } else {
        return 'Invalid Score';
    }
}



let sampleScore = 75;
let finalGrade = calculateGrade(sampleScore);

// Display the returned grade using an alert popup
alert("The grade for a score of " + sampleScore + " is: " + finalGrade);