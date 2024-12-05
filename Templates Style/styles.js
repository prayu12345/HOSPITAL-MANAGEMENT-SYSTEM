document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Check if the form is valid
    if (this.checkValidity() === false) {
        event.stopPropagation(); // Stop the form from submitting if invalid
    } else {
        // Here you would typically send the data to the server
        alert('User added successfully!');
        
        // Optionally, you can reset the form after successful submission
        this.reset();
    }

    // Add Bootstrap validation classes
    this.classList.add('was-validated');
});
