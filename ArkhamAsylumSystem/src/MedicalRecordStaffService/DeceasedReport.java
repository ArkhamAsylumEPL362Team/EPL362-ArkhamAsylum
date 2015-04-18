package MedicalRecordStaffService;

import java.sql.ResultSet;
import java.sql.SQLException;

import extras.DatabaseConnection;

public class DeceasedReport {
	public String patientID;
	
	public static ResultSet isDeceased(String patientID) throws SQLException{
		DatabaseConnection database = new DatabaseConnection();
		if (database.getStatement() == null){
			return null;
		}
		return database.getStatement().executeQuery("SELECT * FROM DECEASED WHERE id='"+patientID+"';");
	}
}

