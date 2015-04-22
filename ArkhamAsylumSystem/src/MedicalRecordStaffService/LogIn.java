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

@Path("/medical_record_service/")
public class LogIn {
	
	@POST
	@Path("/log_in/")
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED, MediaType.APPLICATION_JSON}) 
	@Produces(MediaType.TEXT_PLAIN)
	public String logIn(String data){
		
		DatabaseConnection database =null;
		
		try {
			database = new DatabaseConnection();
			ObjectMapper mapper = new ObjectMapper();
			Personel personel = mapper.readValue(data, Personel.class);
			
			String query = "SELECT * FROM USER WHERE "
					+ "username='"+personel.username+"' "
							+ "AND password='"+personel.password+"'AND type='"+personel.type+"'";  
			boolean result=true;
			
			ResultSet rs=database.getStatement().executeQuery(query);
			if (!rs.next()){
				result=false;
			}
			
			if(result){
				data="{\"status\":\"ok\"}";
			}else{
				data="{\"status\":\"error\"}";
			}
			
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
