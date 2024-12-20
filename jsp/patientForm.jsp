<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Patient Registration</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Patient Registration Form</h1>

    <!-- Patient Registration Form -->
    <form action="PatientServlet" method="POST">
        <label for="patientName">Patient Name:</label>
        <input type="text" id="patientName" name="patientName" required><br><br>

        <label for="patientAge">Age:</label>
        <input type="number" id="patientAge" name="patientAge" required><br><br>

        <label for="patientDisease">Disease:</label>
        <input type="text" id="patientDisease" name="patientDisease" required><br><br>

        <button type="submit">Submit</button>
    </form>

    <footer>
        <p>&copy; 2024 Hospital Management System</p>
    </footer>
</body>
</html>
