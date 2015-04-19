package MedicalRecordStaffService;

import java.sql.ResultSet;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.fasterxml.jackson.databind.ObjectMapper;

import extras.DatabaseConnection;
import extras.JSON;

@Path("/medical_record_service/")
public class View {

	@GET
	@Path("/view_patient_requests/")
	@Produces(MediaType.TEXT_PLAIN)
	public String getRequests() throws Exception{
		DatabaseConnection database = new DatabaseConnection();
		if (database.getStatement() == null){
			return "{}";
		}
		ResultSet rs= database.getStatement().executeQuery("SELECT REQUEST.id AS `number`,REQUEST.date,REQUEST.content,PATIENT.firstname,PATIENT.lastname,PATIENT.id FROM REQUEST,PATIENT where REQUEST.patient=PATIENT.id;");
		String result = JSON.parseJSON(rs);
		return  result;
	}
	
	@GET
	@Path("/view_personel_info/")
	@Produces(MediaType.TEXT_PLAIN)
	public String getPersonel() throws Exception{
		DatabaseConnection database = new DatabaseConnection();
		if (database.getStatement() == null){
			return "No requests have been found";
		}
		ResultSet rs= database.getStatement().executeQuery("SELECT * FROM USER;");
		String result = JSON.parseJSON(rs);
		return  result;
	}
	
	@POST
	@Path("/view_patient_record/")
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED, MediaType.APPLICATION_JSON}) 
	@Produces(MediaType.TEXT_PLAIN)
	public String getPatientRecord(String data) throws Exception{
		ObjectMapper mapper = new ObjectMapper();
		RequestInfo requestInfo = mapper.readValue(data, RequestInfo.class);
		
		DatabaseConnection database = new DatabaseConnection();
		if (database.getStatement() == null){
			return "No such patient has been found";
		}
		ResultSet rs= database.getStatement().executeQuery("SELECT * FROM PATIENT WHERE id='"+requestInfo.patientID+"';");
		String result = JSON.parseJSON(rs);
		return  result;
	}
}