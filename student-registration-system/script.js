// student-registration-system/script.js

// Function to validate form fields
function validateForm() {
    const name = document.getElementById('studentName').value;
    const email = document.getElementById('studentEmail').value;
    const age = document.getElementById('studentAge').value;

    if (!name || !email || !age) {
        alert('Please fill all fields.');
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (age < 1 || age > 120) {
        alert('Please enter a valid age.');
        return false;
    }

    return true;
}

// Function to submit form data
function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission
    if (validateForm()) {
        // If validation passes, proceed with data management
        const studentData = {
            name: document.getElementById('studentName').value,
            email: document.getElementById('studentEmail').value,
            age: document.getElementById('studentAge').value
        };

        // Store student data (for example in localStorage)
        const students = JSON.parse(localStorage.getItem('students')) || [];
        students.push(studentData);
        localStorage.setItem('students', JSON.stringify(students));

        alert('Student registered successfully!');
        document.getElementById('registrationForm').reset();
    }
}