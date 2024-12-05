// Function to switch between sections
function switchSection(sectionId) {
    document.querySelectorAll('.form-section').forEach((section) => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Handle Login Form Submission
document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    // For demo purposes, login is always successful
    alert('Login Successful');
    switchSection('dashboard-section');
});

// Handle Registration Form Submission
document.getElementById('register-form').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Registration Successful');
    switchSection('login-section');
});

// Logout function
function logout() {
    alert('Logged Out Successfully');
    switchSection('login-section');
}

