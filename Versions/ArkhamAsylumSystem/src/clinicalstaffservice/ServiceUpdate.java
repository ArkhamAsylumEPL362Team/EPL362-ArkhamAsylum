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

@Path("/clinicalstaff_service/update/")
public class ServiceUpdate {	
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
			
			database.getStatement().executeUpdate(update);
			
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
