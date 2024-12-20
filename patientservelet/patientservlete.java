import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.sql.*;

public class UserManagementServlet extends HttpServlet {
    
    private static final String JDBC_URL = "jdbc:mysql://localhost:3306/hms";
    private static final String JDBC_USERNAME = "root";
    private static final String JDBC_PASSWORD = "password"; // Replace with your actual password
    
    // Database connection
    private Connection getConnection() throws SQLException {
        return DriverManager.getConnection(JDBC_URL, JDBC_USERNAME, JDBC_PASSWORD);
    }

    // Process GET request (Display user list or manage users)
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        try (Connection conn = getConnection()) {
            String query = "SELECT * FROM users"; // Assuming you have a 'users' table
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(query);
            
            out.println("<html><body><h2>User Management</h2>");
            out.println("<table border='1'><tr><th>User ID</th><th>Name</th><th>Email</th></tr>");
            
            while (rs.next()) {
                out.println("<tr>");
                out.println("<td>" + rs.getInt("id") + "</td>");
                out.println("<td>" + rs.getString("name") + "</td>");
                out.println("<td>" + rs.getString("email") + "</td>");
                out.println("</tr>");
            }
            out.println("</table>");
            out.println("</body></html>");
        } catch (SQLException e) {
            out.println("Error connecting to the database: " + e.getMessage());
        }
    }
    
    // Process POST request (Add or Update user data)
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String userName = request.getParameter("name");
        String userEmail = request.getParameter("email");

        try (Connection conn = getConnection()) {
            String query = "INSERT INTO users (name, email) VALUES (?, ?)";
            PreparedStatement pstmt = conn.prepareStatement(query);
            pstmt.setString(1, userName);
            pstmt.setString(2, userEmail);

            int rowsInserted = pstmt.executeUpdate();

            if (rowsInserted > 0) {
                response.sendRedirect("userManagement.html");  // Redirect to the user management page
            } else {
                response.getWriter().println("Error inserting user.");
            }
        } catch (SQLException e) {
            response.getWriter().println("Error: " + e.getMessage());
        }
    }
}
