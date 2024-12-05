document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    // Handle Login Form Submission
    loginForm.addEventListener('submit', function(event) {
        // Prevent form submission
        event.preventDefault();

        // Clear previous validation messages
        clearValidationMessages(loginForm);

        // Validate form fields
        const username = document.getElementById('login-username').value.trim();
        const password = document.getElementById('login-password').value.trim();

        let isValid = true;

        // Validate username
        if (username === '') {
            showValidationMessage('login-username', 'Please enter your username.');
            isValid = false;
        }

        // Validate password
        if (password === '') {
            showValidationMessage('login-password', 'Please enter your password.');
            isValid = false;
        }

        // If the form is valid, proceed with login (for demo purposes, always successful)
        if (isValid) {
            alert('Login Successful');
            switchSection('dashboard-section');
        }

        // Add Bootstrap validation class
        loginForm.classList.add('was-validated');
    });

    // Handle Registration Form Submission
    registerForm.addEventListener('submit', function(event) {
        // Prevent form submission
        event.preventDefault();

        // Clear previous validation messages
        clearValidationMessages(registerForm);

        // Validate form fields
        const fullname = document.getElementById('register-fullname').value.trim();
        const email = document.getElementById('register-email').value.trim();
        const username = document.getElementById('register-username').value.trim();
        const password = document.getElementById('register-password').value.trim();

        let isValid = true;

        // Validate fullname
        if (fullname === '') {
            showValidationMessage('register-fullname', 'Please enter your full name.');
            isValid = false;
        }

        // Validate email
        if (email === '') {
            showValidationMessage('register-email', 'Please enter your email.');
            isValid = false;
        } else if (!validateEmail(email)) {
            showValidationMessage('register-email', 'Please enter a valid email format.');
            isValid = false;
        }

        // Validate username
        if (username === '') {
            showValidationMessage('register-username', 'Please choose a username.');
            isValid = false;
        }

        // Validate password
        if (password === '') {
            showValidationMessage('register-password', 'Please create a password.');
            isValid = false;
        }

        // If the form is valid, proceed with registration (for demo purposes, always successful)
        if (isValid) {
            alert('Registration Successful');
            switchSection('login-section');
        }

        // Add Bootstrap validation class
        registerForm.classList.add('was-validated');
    });

    // Function to show validation message
    function showValidationMessage(fieldId, message) {
        const field = document.getElementById(fieldId);
        const feedback = document.createElement('div');
        feedback.className = 'invalid-feedback';
        feedback.innerText = message;
        field.classList.add('is-invalid');
        field.parentNode.appendChild(feedback);
    }

    // Function to clear validation messages
    function clearValidationMessages(form) {
        const fields = form.querySelectorAll('.form-control');
        fields.forEach(field => {
            field.classList.remove('is-invalid');
            const feedback = field.parentNode.querySelector('.invalid-feedback');
            if (feedback) {
                feedback.remove();
            }
        });
    }

    // Function to validate email format
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Function to switch between sections
    function switchSection(sectionId) {
        document.querySelectorAll('.form-section').forEach((section) => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    }

    // Logout function
    window.logout = function() {
        alert('Logged Out Successfully');
        switchSection('login-section');
    }
});
