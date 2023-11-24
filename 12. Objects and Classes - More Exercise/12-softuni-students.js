function solve(inputArr) {
    let courses = [];

    for (const command of inputArr) {
        if (command.includes(': ')) {
            const [courseName, capacity] = command.split(': ');

            let course = courses.find(c => c.name === courseName);
            if (course) course.capacity += Number(capacity);
            else courses.push({
                name: courseName,
                capacity: Number(capacity),
                students: []
            });
        } else {
            const [userCredits, mailCourse] = command.split(' with email ');
            const [userName, credits] = userCredits.split('[');
            const [email, courseName] = mailCourse.split(' joins ');

            let course = courses.find(c => c.name === courseName);
            if (course && course.students.length < course.capacity) {
                course.students.push({
                    userName: userName,
                    credits: Number(credits.slice(0, -1)),
                    email: email
                });
            }
        }
    }
    let sortedCourses = courses.sort((a, b) => b.students.length - a.students.length);
    for (const course of sortedCourses) {
        console.log(`${course.name}: ${course.capacity - course.students.length} places left`);

        let sortedStudents = course.students.sort((a, b) => b.credits - a.credits);
        for (const student of sortedStudents) {
            console.log(`--- ${student.credits}: ${student.userName}, ${student.email}`);
        }
    }
}