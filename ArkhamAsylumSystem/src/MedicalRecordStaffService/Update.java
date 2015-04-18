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
public class Update {

	@POST
	@Path("/update_personel/")
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED, MediaType.APPLICATION_JSON}) 
	@Produces(MediaType.TEXT_PLAIN)
	public String updatePersonel (String data){
		DatabaseConnection database =null;
		try {
			ObjectMapper mapper = new ObjectMapper();
			Personel personel = mapper.readValue(data, Personel.class);
			
			database = new DatabaseConnection();
		
			String query = "UPDATE USER "
						 + "SET id = '" +personel.personelID + "', firstname = '" +personel.firstname + "', email = '"
						 + personel.email + "', lastname = '" +personel.lastname + "', phonenumber ='" + personel.phonenumber 
						 +"', type='"+personel.type+"'" 
						 + " WHERE id = '" + personel.personelID + "'";  
		
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
	
}
