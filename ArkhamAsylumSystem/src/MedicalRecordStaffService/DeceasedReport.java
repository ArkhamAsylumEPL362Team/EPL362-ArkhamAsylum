package MedicalRecordStaffService;

import java.sql.ResultSet;
import java.sql.SQLException;

import extras.DatabaseConnection;

public class DeceasedReport {
	public String patientID;
	
	public static boolean isDeceased(String patientID) throws SQLException{
		DatabaseConnection database = new DatabaseConnection();
		if (database.getStatement() == null){
			return false;
		}
		boolean result=true;
		ResultSet rs= database.getStatement().executeQuery("SELECT * FROM DECEASED WHERE id='"+patientID+"';");
		
		if (!rs.next()){
			result=false;
		}
		
		return result;
	}
}

