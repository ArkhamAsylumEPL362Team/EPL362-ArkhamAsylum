package extras;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class DatabaseConnection {
	
	private Connection conn;
	private Statement statement;

	public DatabaseConnection(){
		
		try {
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager
					.getConnection("jdbc:mysql://localhost:3306/EPL362","root", "");
			statement = conn.createStatement();
			
			if (conn == null){
				System.out.println("adsasa");
			}	
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	public Statement getStatement(){
		return statement;
	}
	

	public void CloseConnection(){
		try {
			statement.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
	}
	
	

}
