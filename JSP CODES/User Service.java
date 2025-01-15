import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class UserService {
    
    // Method to retrieve all users from the database
    public List<User> getAllUsers() {
        List<User> users = new ArrayList<>();
        String query = "SELECT * FROM users";

        try (Connection connection = DBUtil.getConnection();
             Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery(query)) {

            while (resultSet.next()) {
                User user = new User();
                user.setId(resultSet.getInt("id"));
                user.setUsername(resultSet.getString("username"));
                user.setEmail(resultSet.getString("email"));
                user.setRole(resultSet.getString("role"));
                users.add(user);
            }
        } catch (SQLException e) {
            e.printStackTrace(); // Consider logging this instead of printing
        }
        return users;
    }

    // Method to add a new user to the database
    public void addUser (User user) {
        String query = "INSERT INTO users (username, email, role) VALUES (?, ?, ?)";

        try (Connection connection = DBUtil.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(query)) {

            // Input validation can be added here
            if (isValidUser (user)) {
                preparedStatement.setString(1, user.getUsername());
                preparedStatement.setString(2, user.getEmail());
                preparedStatement.setString(3, user.getRole());
                preparedStatement.executeUpdate();
            } else {
                throw new IllegalArgumentException("Invalid user data");
            }
        } catch (SQLException e) {
            e.printStackTrace(); // Consider logging this instead of printing
        }
    }

    // Method to validate user data
    private boolean isValidUser (User user) {
        // Implement validation logic (e.g., check for null or empty fields)
        return user.getUsername() != null && !user.getUsername().isEmpty() &&
               user.getEmail() != null && !user.getEmail().isEmpty() &&
               user.getRole() != null && !user.getRole().isEmpty();
    }
}
