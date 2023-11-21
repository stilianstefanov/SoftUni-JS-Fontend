function solve(inputArr) {
    let studentsByGrade = {};

    for (const studentInfo of inputArr) {
        let [nameInfo, gradeInfo, scoreInfo] = studentInfo.split(', ');
        let name = nameInfo.split(': ')[1];
        let grade = Number(gradeInfo.split(': ')[1]);
        let score = Number(scoreInfo.split(': ')[1]);

        if (score < 3) continue;

        if (!studentsByGrade.hasOwnProperty(grade)) {
            studentsByGrade[grade] = {};
        }
        studentsByGrade[grade][name] = score;
    }

    for (const [grade, students] of Object.entries(studentsByGrade).sort((a, b) => a[0] - b[0])) {
        console.log(`${Number(grade) + 1} Grade`);
        console.log(`List of students: ${Object.keys(students).join(', ')}`);
        console.log(`Average annual score from last year: ${calculateAverage(Object.values(students)).toFixed(2)}`);
        console.log();
    }

    function calculateAverage(numbers) {
        if (numbers.length === 0) {
          return 0;
        }
        let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        let average = sum / numbers.length;
      
        return average;
      }
}