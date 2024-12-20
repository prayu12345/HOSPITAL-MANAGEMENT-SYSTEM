// script.js

// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Get the form element
    const form = document.querySelector('form');

    // Add event listener for form submission
    form.addEventListener('submit', function (e) {

        // Get the values from the form fields
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;

        // Validate the name field
        if (name.trim() === "") {
            alert('Name is required!');
            e.preventDefault();  // Prevent form submission
            return;
        }

        // Validate the email field
        if (email.trim() === "") {
            alert('Email is required!');
            e.preventDefault();  // Prevent form submission
            return;
        }

        // Validate email format using a regular expression
        if (!validateEmail(email)) {
            alert('Please enter a valid email address!');
            e.preventDefault();  // Prevent form submission
            return;
        }

    });

    // Function to validate the email format
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    }

});
