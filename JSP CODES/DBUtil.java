import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBUtil {
    // Update the database URL, user, and password as per your hospital management system's configuration
    private static final String URL = "jdbc:mysql://localhost:3306/hospital_management_system";
    private static final String USER = "root"; // Change if necessary
    private static final String PASSWORD = "yourpassword"; // Change to your actual password

    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }
}
