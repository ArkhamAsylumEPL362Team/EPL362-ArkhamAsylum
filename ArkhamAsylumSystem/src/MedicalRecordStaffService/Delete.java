package MedicalRecordStaffService;

import java.sql.SQLException;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.fasterxml.jackson.databind.ObjectMapper;

import extras.DatabaseConnection;

@Path("/medical_record_service/")
public class Delete {

	@POST
	@Path("/delete_personel/")
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED, MediaType.APPLICATION_JSON}) 
	@Produces(MediaType.TEXT_PLAIN)
	public String deletePersonel (String data){
		DatabaseConnection database =null;
		try {
			ObjectMapper mapper = new ObjectMapper();
			Personel personel = mapper.readValue(data, Personel.class);
			
			database = new DatabaseConnection();
		
			String query = "DELETE FROM USER WHERE id ='" +personel.personelID + "'";
		
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
	
	@POST
	@Path("/delete_request/")
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED, MediaType.APPLICATION_JSON}) 
	@Produces(MediaType.TEXT_PLAIN)
	public String deleteRequest (String data){
		DatabaseConnection database =null;
		try {
			ObjectMapper mapper = new ObjectMapper();
			RequestInfo request = mapper.readValue(data, RequestInfo.class);
			
			database = new DatabaseConnection();
		
			String query = "DELETE FROM REQUEST WHERE id ='" +request.requestNumber + "'";
		
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
