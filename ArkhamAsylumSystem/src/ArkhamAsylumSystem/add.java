package ArkhamAsylumSystem;

import java.io.IOException;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import extras.DatabaseConnection;



@Path("/insert/")
public class add {
	
	@POST
	@Path("/patient/")
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED, MediaType.APPLICATION_JSON}) 
	@Produces(MediaType.TEXT_PLAIN)
	public String insertPatient (String data) throws Exception{
		
		
		ObjectMapper mapper = new ObjectMapper();
		Patient patient = mapper.readValue(data, Patient.class);
		
		DatabaseConnection database = new DatabaseConnection();
		
		String query = "INSERT INTO PATIENT values ( '"+ patient.ssh + "','" + patient.firstname + "','" +patient.lastname +
						"','" + patient.phonenumber + "','"  + patient.birthday + "','" + patient.gender + "')";  
		try {
			database.getStatement().executeUpdate(query);
		}catch(Exception r){
			r.printStackTrace();
			return " { \"status\": \"Exception\" }";
		}
		
		return data;
	}
}

class Patient{

	public String ssh;
	public String firstname;
	public String lastname;
	public String phonenumber;
	public String birthday;
	public String gender;
	
}

