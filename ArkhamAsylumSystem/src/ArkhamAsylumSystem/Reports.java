package ArkhamAsylumSystem;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import extras.DatabaseConnection;
import extras.JSON;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;



@Path("/report/")
public class Reports {

	@GET
	@Path("/all_patients/")
	@Produces(MediaType.TEXT_PLAIN)
	public String getPatient() throws Exception{
		
		DatabaseConnection database = new DatabaseConnection();
		
		if (database.getStatement() == null){
			return "Gamiseta";
		}
		
		ResultSet rs= database.getStatement().executeQuery("SELECT * FROM PATIENT");
		
		String result = JSON.parseJSON(rs);
		
		return  result;
		
	}
	
	
}
