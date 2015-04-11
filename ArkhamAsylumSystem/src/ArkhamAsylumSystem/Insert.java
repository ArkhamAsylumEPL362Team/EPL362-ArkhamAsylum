package ArkhamAsylumSystem;

import java.sql.SQLException;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import com.fasterxml.jackson.databind.ObjectMapper;

import extras.DatabaseConnection;



@Path("/insert/")
public class Insert {
	
	@POST
	@Path("/patient/")
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
	@Path("/medicine/")
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED, MediaType.APPLICATION_JSON}) 
	@Produces(MediaType.TEXT_PLAIN)
	public String insertMedicine (String data) {
		
		
		DatabaseConnection database=null;
		try {
			ObjectMapper mapper = new ObjectMapper();
			Medicine medicine = mapper.readValue(data, Medicine.class);
		
			database = new DatabaseConnection();
		
		String query = "INSERT INTO MEDICINE values ( '"+ medicine.name + "','" + medicine.description + "')";  
			database.getStatement().executeUpdate(query);
		}catch (SQLException e){
			e.printStackTrace();
			return " { \"status\": \"SQLException\" }";	
		}catch(Exception r){
			r.printStackTrace();
			return " { \"status\": \"JSONException\" }";
		}finally{
			database.CloseConnection();
		}	
		return data;
	}
	
	@POST
	@Path("/side_effect/")
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED, MediaType.APPLICATION_JSON}) 
	@Produces(MediaType.TEXT_PLAIN)
	public String insertSideEffect (String data) {
		
		
		DatabaseConnection database=null;
		try {
			ObjectMapper mapper = new ObjectMapper();
			SideEffect side_effect = mapper.readValue(data, SideEffect.class);
		
			database = new DatabaseConnection();
		
		String query = "INSERT INTO SIDE_EFFECT values ( '"+ side_effect.medicine + "','" + side_effect.effect+ "')";  
			database.getStatement().executeUpdate(query);
		}catch (SQLException e){
			e.printStackTrace();
			return " { \"status\": \"SQLException\" }";	
		}catch(Exception r){
			r.printStackTrace();
			return " { \"status\": \"JSONException\" }";
		}finally{
			database.CloseConnection();
		}	
		return data;
	}
	
	
	@POST
	@Path("/clinical_staff/")
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED, MediaType.APPLICATION_JSON}) 
	@Produces(MediaType.TEXT_PLAIN)
	public String insertClinicalStaff (String data) {
		
		
		DatabaseConnection database=null;
		try {
			ObjectMapper mapper = new ObjectMapper();
			ClinicalStaff clinical_staff = mapper.readValue(data, ClinicalStaff.class);
		
			database = new DatabaseConnection();
		
		String query = "INSERT INTO CLINICAL_STAFF values ( '"+ clinical_staff.id + "','" + clinical_staff.profession+ "')";  
			database.getStatement().executeUpdate(query);
		}catch (SQLException e){
			e.printStackTrace();
			return " { \"status\": \"SQLException\" }";	
		}catch(Exception r){
			r.printStackTrace();
			return " { \"status\": \"JSONException\" }";
		}finally{
			database.CloseConnection();
		}	
		return data;
	}
	
	@POST
	@Path("/user/")
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED, MediaType.APPLICATION_JSON}) 
	@Produces(MediaType.TEXT_PLAIN)
	public String insertUser (String data){
		
		DatabaseConnection database =null;
		try {
			ObjectMapper mapper = new ObjectMapper();
			User user = mapper.readValue(data, User.class);
			
			database = new DatabaseConnection();
		
			String query = "INSERT INTO USER values ( '"+ user.id + "','" + user.firstname + "','"
						+ user.lastname + "','"+user.email + "','" + user.phonenumber + "','" 
						+ user.username + "','" + user.password +"','" + user.type+ "')";  
		
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
		return   data;
	}
	
	
	@POST
	@Path("/incident/")
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED, MediaType.APPLICATION_JSON}) 
	@Produces(MediaType.TEXT_PLAIN)
	public String insertIncident (String data){
		
		DatabaseConnection database =null;
		try {
			ObjectMapper mapper = new ObjectMapper();
			Incident incident = mapper.readValue(data, Incident.class);
			
			database = new DatabaseConnection();
		
			String query = "INSERT INTO INCIDENT values ( '"+ incident.id + "','" + incident.patient 
						+ "','" + incident.details + "','" +incident.type  + "')";  
		
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
		return   data;
	}
	
	@POST
	@Path("/medical_record/")
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED, MediaType.APPLICATION_JSON}) 
	@Produces(MediaType.TEXT_PLAIN)
	public String insertMedicalRecord (String data){
		
		DatabaseConnection database =null;
		try {
			ObjectMapper mapper = new ObjectMapper();
			MedicalRecord medical_record = mapper.readValue(data, MedicalRecord.class);
			
			database = new DatabaseConnection();
		
			String query = "INSERT INTO MEDICAL_RECORD values ( '" + medical_record.patient + "','" + medical_record.alergies 
						+ "','" + medical_record.last_update + "','" +medical_record.current_treatment  + "','" +medical_record.status +"')";  
		
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
		return   data;
	}
	
	@POST
	@Path("/incident_by_prescription/")
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED, MediaType.APPLICATION_JSON}) 
	@Produces(MediaType.TEXT_PLAIN)
	public String insertIncidentByPrescription (String data){
		
		DatabaseConnection database =null;
		try {
			ObjectMapper mapper = new ObjectMapper();
			IncidentByPrescription inc_by_pre = mapper.readValue(data, IncidentByPrescription.class);
			
			database = new DatabaseConnection();
		
			String query = "INSERT INTO INCIDENT_BY_PRESCRIPTION values ( '" + inc_by_pre.id + "','" +
					inc_by_pre.patient + "','" + inc_by_pre.details  +"')";  
		
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
		
		return   data;
	}
	
	@POST
	@Path("/comment/")
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED, MediaType.APPLICATION_JSON}) 
	@Produces(MediaType.TEXT_PLAIN)
	public String insertComment(String data){
		
		DatabaseConnection database =null;
		try {
			ObjectMapper mapper = new ObjectMapper();
			Comment comment = mapper.readValue(data, Comment.class);
			
			database = new DatabaseConnection();
		
			String query = "INSERT INTO COMMENT values ( '" + comment.id + "','" +
					comment.content + "','" + comment.patient + "','" + comment.clinician  + "','" + 
					comment.date   +"')";  
		
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
		
		return   data;
	}
	
	@POST
	@Path("/consultant/")
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED, MediaType.APPLICATION_JSON}) 
	@Produces(MediaType.TEXT_PLAIN)
	public String insertConsultan(String data){
		
		DatabaseConnection database =null;
		try {
			database = new DatabaseConnection();
			ObjectMapper mapper = new ObjectMapper();
			Consultant con = mapper.readValue(data, Consultant.class);
			
			
		
			String query = "INSERT INTO CONSULTANT values ( '" + con.clinician + "','" +
					con.patient + "')";  
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
		
		return   data;
	}
	
	@POST
	@Path("/warning_overruled/")
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED, MediaType.APPLICATION_JSON}) 
	@Produces(MediaType.TEXT_PLAIN)
	public String insertWarningOverruled(String data){
		
		DatabaseConnection database =null;
		try {
			database = new DatabaseConnection();
			
			ObjectMapper mapper = new ObjectMapper();
			WarningOverruled warn = mapper.readValue(data, WarningOverruled.class);
			
			String query = "INSERT INTO WARNING_OVERRULED values ( '" + warn.clinician + "','" +
					warn.warning+"','"+warn.date + "')";  
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
		
		return   data;
	}
	
	@POST
	@Path("/appointment/")
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
}

