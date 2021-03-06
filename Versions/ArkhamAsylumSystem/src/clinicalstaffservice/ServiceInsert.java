package clinicalstaffservice;

import java.sql.SQLException;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.fasterxml.jackson.databind.ObjectMapper;

import extras.DatabaseConnection;

@Path("/clinicalstaff_service/insert/")
public class ServiceInsert {
	
	@POST
	@Path("/Incident/")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response insertStaffService(String data){
		DatabaseConnection database =null;
		try {
			ObjectMapper mapper = new ObjectMapper();
			Incident incident = mapper.readValue(data, Incident.class);
			
			database = new DatabaseConnection();
		
			String query = "INSERT INTO INCIDENT values ( '"+ incident.id + "','" + incident.patient + "','"+ 
						incident.details + "','"+incident.type + "')";  
		
			database.getStatement().executeUpdate(query);
			
		}catch(SQLException r){
			r.printStackTrace();
			return Response
					.status(Status.BAD_REQUEST)
					.entity(((String)" { \"status\": \"JSONException\" }"))
					.build();
		}catch(Exception e){
			e.printStackTrace();
			return Response
					.status(Status.BAD_REQUEST)
					.entity(((String)" { \"status\": \"JSONException\" }"))
					.build();	
		}finally{
			database.CloseConnection();
		}
		return    Response.ok().build();
	}
	
	@POST
	@Path("/ConsultationComment/")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response insertConsultationComment(String data){
		DatabaseConnection database =null;
		try {
			ObjectMapper mapper = new ObjectMapper();
			Comment comments = mapper.readValue(data, Comment.class);
			
			database = new DatabaseConnection();
		
			String query = "INSERT INTO COMMENT values ( '"+ comments.id + "','" + comments.content + "','"+ 
						comments.patient + "','"+comments.clinician + "','"+comments.date+"')";  
		
			database.getStatement().executeUpdate(query);
			
		}catch(SQLException r){
			r.printStackTrace();
			return Response
					.status(Status.BAD_REQUEST)
					.entity(((String)" { \"status\": \"JSONException\" }"))
					.build();
		}catch(Exception e){
			e.printStackTrace();
			return Response
					.status(Status.BAD_REQUEST)
					.entity(((String)" { \"status\": \"JSONException\" }"))
					.build();	
		}finally{
			database.CloseConnection();
		}
		return    Response.ok().build();
	}
	
	@POST
	@Path("/Treatment/")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response insertNewTreatment(String data){
		DatabaseConnection database =null;
		try {
			ObjectMapper mapper = new ObjectMapper();
			Treatment treatment = mapper.readValue(data, Treatment.class);
			
			database = new DatabaseConnection();
		
			String query = "INSERT INTO TREATMENT values ( '"+ treatment.id + "','" + treatment.prev_id + "','"+ 
					treatment.patient+"')";  
		
			database.getStatement().executeUpdate(query);
			
		}catch(SQLException r){
			r.printStackTrace();
			return Response
					.status(Status.BAD_REQUEST)
					.entity(((String)" { \"status\": \"JSONException\" }"))
					.build();
		}catch(Exception e){
			e.printStackTrace();
			return Response
					.status(Status.BAD_REQUEST)
					.entity(((String)" { \"status\": \"JSONException\" }"))
					.build();	
		}finally{
			database.CloseConnection();
		}
		return    Response.ok().build();
	}
	
	@POST
	@Path("/TreatmentMedicine/")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response insertNewTreatmentMedicine(String data){
		DatabaseConnection database =null;
		try {
			ObjectMapper mapper = new ObjectMapper();
			TreatmentMedicine treatmentMedicine = mapper.readValue(data, TreatmentMedicine.class);
			
			database = new DatabaseConnection();
		
			String query = "INSERT INTO TREATMENT_MEDICINE values ( '"+ treatmentMedicine.treatment_id + "','" + treatmentMedicine.medicine + "','"+ 
					treatmentMedicine.quantity+"','"+treatmentMedicine.condition+"')";  
		
			database.getStatement().executeUpdate(query);
			
		}catch(SQLException r){
			r.printStackTrace();
			return Response
					.status(Status.BAD_REQUEST)
					.entity(((String)" { \"status\": \"JSONException\" }"))
					.build();
		}catch(Exception e){
			e.printStackTrace();
			return Response
					.status(Status.BAD_REQUEST)
					.entity(((String)" { \"status\": \"JSONException\" }"))
					.build();	
		}finally{
			database.CloseConnection();
		}
		return    Response.ok().build();
	}
	
	@POST
	@Path("/MedicalRecord/")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response insertUpdateMedicalRecord(String data){
		DatabaseConnection database =null;
		try {
			ObjectMapper mapper = new ObjectMapper();
			MedicalRecord medicalRecord = mapper.readValue(data, MedicalRecord.class);
			
			database = new DatabaseConnection();
		
			String update = "UPDATE MEDICAL_RECORD SET "
					+ "last_updated="+medicalRecord.last_updated
					+",dangerousness='"+medicalRecord.dangerousness+"' WHERE patient='"+medicalRecord.patient+"'";
			
			if(database.getStatement().executeUpdate(update)==0){
				String insert = "INSERT INTO MEDICAL_RECORD values ( '"+ medicalRecord.patient + "',"+ medicalRecord.last_updated +",'"+ 
						medicalRecord.dangerousness+"')"; 
				database.getStatement().executeUpdate(insert);
			}
			
			 
			
		}catch(SQLException r){
			r.printStackTrace();
			return Response
					.status(Status.BAD_REQUEST)
					.entity(((String)" { \"status\": \"JSONException\" }"))
					.build();
		}catch(Exception e){
			e.printStackTrace();
			return Response
					.status(Status.BAD_REQUEST)
					.entity(((String)" { \"status\": \"JSONException\" }"))
					.build();	
		}finally{
			database.CloseConnection();
		}
		return    Response.ok().build();
	}
}
