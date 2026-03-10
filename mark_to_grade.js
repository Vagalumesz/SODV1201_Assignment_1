function MarkToGrade() { // gets the input of the mark and showas the grade
    const mark = document.getElementById('mark-input').value;
    const validationMessage = document.getElementById('validationmessage');
    const gradeOutput = document.getElementById('grade-output');
    
    // Validates the mark to see if it is acceptable
    if (isNaN(mark) || mark < 0 || mark > 100) {
        validationMessage.textContent = "Please enter a valid mark (0 - 100).";
        return;
    } else {
        validationMessage.textContent = "";
    }
    
    // Determine grade according to the mark
    let grade = "";
    if (mark >= 90) {
        grade = "A";
    } else if (mark >= 80) {
        grade = "B";
    } else if (mark >= 70) {
        grade = "C";
    } else if (mark >= 60) {
        grade = "D";
    } else if (mark >= 50) {
        grade = "E";
    } else {
        grade = "F";
    }

    gradeOutput.textContent = "Your grade is: " + grade;
}
