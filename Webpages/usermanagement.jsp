<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.List" %>
<%@ page import="your.package.User" %>
<%@ page import="your.package.UserService" %>
<%
    UserService userService = new UserService();
    List<User> users = userService.getAllUsers();
%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Management</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <h1 class="mt-5">User  Management</h1>
        <a href="addUser .jsp" class="btn btn-success mb-3">Add User</a> <!-- Fixed the space in the URL -->
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <%
                    for (User  user : users) {
                %>
                <tr>
                    <td><%= user.getId() %></td>
                    <td><%= user.getUsername() %></td>
                    <td><%= user.getEmail() %></td>
                    <td><%= user.getRole() %></td>
                    <td>
                        <a href="editUser .jsp?id=<%= user.getId() %>" class="btn btn-warning btn-sm">Edit</a> <!-- Fixed the space in the URL -->
                        <a href="deleteUser ?id=<%= user.getId() %>" class="btn btn-danger btn-sm">Delete</a> <!-- Fixed the space in the URL -->
                    </td>
                </tr>
                <%
                    }
                %>
            </tbody>
        </table>
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
