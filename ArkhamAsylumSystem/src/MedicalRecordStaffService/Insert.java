package MedicalRecordStaffService;

import java.sql.ResultSet;
import java.sql.SQLException;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.fasterxml.jackson.databind.ObjectMapper;

import extras.DatabaseConnection;
import extras.JSON;

@Path("/medical_record_service/")
public class Insert {
	
	@POST
	@Path("/insert_personel/")
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED, MediaType.APPLICATION_JSON}) 
	@Produces(MediaType.TEXT_PLAIN)
	public String insertPersonel(String data){
		
		DatabaseConnection database =null;
		
		try {
			database = new DatabaseConnection();
			ObjectMapper mapper = new ObjectMapper();
			Personel personel = mapper.readValue(data, Personel.class);
			
			String query = "INSERT INTO USER values ('"+personel.personelID + "','" +personel.firstname + "','"
					 + personel.email + "','" +personel.lastname + "','" + personel.phonenumber 
					 +"','"+personel.username+"','"+personel.password+"','"+personel.type+"')";  
	
			database.getStatement().executeUpdate(query);
						
		}catch(SQLException r){
			r.printStackTrace();
			return " { \"status\": \"SQLException\" }";
		}catch(Exception e){
			e.printStackTrace();
			return " { \"status\": \"JSONException\" }";	
		}finally{
			database.CloseConnection();
		}
		return    data;
	}
	
	@POST
	@Path("/report_deceased/")
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED, MediaType.APPLICATION_JSON}) 
	@Produces(MediaType.TEXT_PLAIN)
	public String reportDeceased(String data){
		
		DatabaseConnection database =null;
		
		try {
			database = new DatabaseConnection();
			ObjectMapper mapper = new ObjectMapper();
			DeceasedReport deceaseReport = mapper.readValue(data, DeceasedReport.class);
			
			String query = "INSERT INTO DECEASED values ('"+deceaseReport.patientID+"');";  
	
			database.getStatement().executeUpdate(query);
						
		}catch(SQLException r){
			r.printStackTrace();
			return " { \"status\": \"SQLException\" }";
		}catch(Exception e){
			e.printStackTrace();
			return " { \"status\": \"JSONException\" }";	
		}finally{
			database.CloseConnection();
		}
		return data;
	}
}
