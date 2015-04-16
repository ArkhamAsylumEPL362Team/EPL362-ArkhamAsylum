package PatientService;

import java.sql.SQLException;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.fasterxml.jackson.databind.ObjectMapper;
import extras.DatabaseConnection;

@Path("/patient_service/")
public class RequestChange {
			
		@POST
		@Path("/request_change/")
		@Consumes({MediaType.APPLICATION_FORM_URLENCODED, MediaType.APPLICATION_JSON}) 
		@Produces(MediaType.TEXT_PLAIN)
		public String requestChange (String data){
			DatabaseConnection database =null;
			try {
				ObjectMapper mapper = new ObjectMapper();
				Request request = mapper.readValue(data, Request.class);
				database = new DatabaseConnection();
				String query = "INSERT INTO REQUEST(patient,date,content) values ( '"+ request.patient + "','"  + request.date + "','" + request.content + "')";  
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
