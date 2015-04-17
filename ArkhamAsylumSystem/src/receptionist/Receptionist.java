package receptionist;

import java.sql.ResultSet;
import java.sql.SQLException;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.fasterxml.jackson.databind.ObjectMapper;

import extras.DatabaseConnection;
import extras.JSON;


@Path("/receptionist/")
public class Receptionist {

	@POST
	@Path("/insert/patient/")
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED, MediaType.APPLICATION_JSON}) 
	@Produces(MediaType.TEXT_PLAIN)
	public String insertPatient (String data){
		DatabaseConnection database =null;
		try {
			ObjectMapper mapper = new ObjectMapper();
			Patient patient = mapper.readValue(data, Patient.class);
			
			database = new DatabaseConnection();
		
			String query = "INSERT INTO PATIENT values ( '"+ patient.id + "','" + patient.firstname + "','"+ 
						patient.relative_email + "','" +patient.lastname + "','"+patient.address + 
						"','" + patient.phonenumber + "','"  + patient.birthday + "','" + patient.gender + "')";  
		
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
	@Path("/update/patient/")
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED, MediaType.APPLICATION_JSON}) 
	@Produces(MediaType.TEXT_PLAIN)
	public String updatePatient (String data){
		DatabaseConnection database =null;
		try {
			ObjectMapper mapper = new ObjectMapper();
			Patient patient = mapper.readValue(data, Patient.class);
			
			database = new DatabaseConnection();
		
			String query = "UPDATE PATIENT "
						 + "SET id = '" +patient.id + "', firstname = '" +patient.firstname + "', relative_email = '"
						 + patient.relative_email + "', lastname = '" +patient.lastname + "', address = '"+patient.address
						 + "', phonenumber ='" + patient.phonenumber + "', birthday ='"  + patient.birthday + "', gender = '"
						 + patient.gender +"' "
						 + "WHERE id = '" + patient.id + "'";  
		
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
	@Path("/insert/appointment/")
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED, MediaType.APPLICATION_JSON}) 
	@Produces(MediaType.TEXT_PLAIN)
	public String insertAppointment(String data){
		
		DatabaseConnection database =null;
		
		try {
			database = new DatabaseConnection();
			ObjectMapper mapper = new ObjectMapper();
			Appointment app = mapper.readValue(data, Appointment.class);
			
			
		
			String query = "INSERT INTO APPOINTMENT values ( '"+app.id + "','" + app.date + "','"+ 
						app.patient + "','" +app.clinician + "','"+app.clinic + 
						"','" + app.time + "','"  + app.type + "','" + app.status + "')";  
		
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
	
	
	@GET
	@Path("/report/all_patients/")
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
	
	@GET
	@Path("/report/clinic/")
	@Produces(MediaType.TEXT_PLAIN)
	public String getClinic() throws Exception{
		DatabaseConnection database = new DatabaseConnection();
		if (database.getStatement() == null){
			return "Gamiseta";
		}
		ResultSet rs= database.getStatement().executeQuery("SELECT * FROM CLINIC");
		String result = JSON.parseJSON(rs);
		return  result;
	}
	
	@GET
	@Path("/report/clinical_staff/")
	@Produces(MediaType.TEXT_PLAIN)
	public String getClinicalStaff() throws Exception{
		DatabaseConnection database = new DatabaseConnection();
		if (database.getStatement() == null){
			return "Gamiseta";
		}
		ResultSet rs= database.getStatement().executeQuery("SELECT * FROM USER WHERE type = 'CLINICAL_STAFF'");
		String result = JSON.parseJSON(rs);
		return  result;
	}
	
	

	@POST
	@Path("/delete/patient/")
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED, MediaType.APPLICATION_JSON}) 
	@Produces(MediaType.TEXT_PLAIN)
	public String deletePatient (String data){
		DatabaseConnection database =null;
		try {
			ObjectMapper mapper = new ObjectMapper();
			Patient patient = mapper.readValue(data, Patient.class);
			
			database = new DatabaseConnection();
		
			String query = "DELETE FROM PATIENT WHERE id ='" +patient.id + "'";
		
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
	@Path("/delete/appointment/")
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED, MediaType.APPLICATION_JSON}) 
	@Produces(MediaType.TEXT_PLAIN)
	public String deleteAppointment (String data){
		DatabaseConnection database =null;
		try {
			ObjectMapper mapper = new ObjectMapper();
			Appointment appointment = mapper.readValue(data, Appointment.class);
			
			database = new DatabaseConnection();
		
			String query = "DELETE FROM APPOINTMENT WHERE id ='" +appointment.id + "'";
		
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
