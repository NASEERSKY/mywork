// script.js

// Function to handle user registration
function registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    if (username && password && email) {
        const user = { username, password, email };
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        alert('User registered successfully!');
    } else {
        alert('Please fill in all fields.');
    }
}

// Function to handle user login
function loginUser() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful!');
    } else {
        alert('Invalid username or password.');
    }
}

// Function to handle student data entry
function enterStudentData() {
    const studentName = document.getElementById('student-name').value;
    const studentId = document.getElementById('student-id').value;

    if (studentName && studentId) {
        const studentData = { studentName, studentId };
        let students = JSON.parse(localStorage.getItem('students')) || [];
        students.push(studentData);
        localStorage.setItem('students', JSON.stringify(students));
        alert('Student data added successfully!');
    } else {
        alert('Please fill in all fields.');
    }
}