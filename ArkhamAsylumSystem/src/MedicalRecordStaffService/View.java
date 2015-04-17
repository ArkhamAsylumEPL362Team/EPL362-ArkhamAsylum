package MedicalRecordStaffService;

import java.sql.ResultSet;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

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
			return "No requests have been found";
		}
		ResultSet rs= database.getStatement().executeQuery("SELECT REQUEST.id `number`,REQUEST.date,REQUEST.content,PATIENT.firstname,PATIENT.lastname,PATIENT.id FROM REQUEST,PATIENT where REQUEST.patient=PATIENT.id;");
		String result = JSON.parseJSON(rs);
		return  result;
	}
	
	@POST
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
	
}