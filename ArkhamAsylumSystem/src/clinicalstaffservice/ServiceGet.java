package clinicalstaffservice;

import java.sql.ResultSet;
import java.sql.SQLException;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import extras.DatabaseConnection;
import extras.JSON;

@Path("/clinicalstaff_service/get/")
public class ServiceGet {
		@GET
		@Path("/Treatmentmeds/")
		@Produces(MediaType.TEXT_PLAIN)
		public Response getMedicine()throws Exception{
			DatabaseConnection database =null;
			String result=null;
			try {
			database = new DatabaseConnection();
			ResultSet rs= database.getStatement().executeQuery("SELECT * FROM epl362.treatment_medicine group by (medicine);");
			result = JSON.parseJSON(rs);
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
			return Response.ok().entity((String)result).build();
		}
		@GET
		@Path("/Treatment/")
		@Produces(MediaType.TEXT_PLAIN)
		public Response getTreatment()throws Exception{
			DatabaseConnection database =null;
			String result=null;
			try {
			database = new DatabaseConnection();
			ResultSet rs= database.getStatement().executeQuery("SELECT * FROM epl362.treatment");
			result = JSON.parseJSON(rs);
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
			return Response.ok().entity((String)result).build();
		}
	@GET
	@Path("/Possible_treatmentmeds/{patient}")
	@Produces(MediaType.TEXT_PLAIN)
	public Response getMedicine(@PathParam("patient")int patient)throws Exception{
		DatabaseConnection database =null;
		String result=null;
		try {
		database = new DatabaseConnection();
		ResultSet rs= database.getStatement().executeQuery("SELECT * "
				+ "FROM treatment_medicine "
				+ "WHERE treatment_id IN"
				+ "(SELECT MAX(id) "
				+ "FROM treatment WHERE patient="+patient+");");
		result = JSON.parseJSON(rs);
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
		return Response.ok().entity((String)result).build();
	}
	@GET
	@Path("/AllergicMedicines/{patient}")
	@Produces(MediaType.TEXT_PLAIN)
	public Response getAllergicMedicines(@PathParam("patient")int patient)throws Exception{
		DatabaseConnection database =null;
		String result=null;
		try {
		database = new DatabaseConnection();
		ResultSet rs= database.getStatement().executeQuery("SELECT `name`"
				+ "FROM ALLERGY,MEDICINE "
				+ "WHERE patient="+patient+" and `name`=medicine;");
		result = JSON.parseJSON(rs);
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
		return Response.ok().entity((String)result).build();
	}
	@GET
	@Path("/NonAllergicMedicines/{patient}")
	@Produces(MediaType.TEXT_PLAIN)
	public Response getNonAllergicMedicines(@PathParam("patient")int patient)throws Exception{
		DatabaseConnection database =null;
		String result=null;
		try {
		database = new DatabaseConnection();
		ResultSet rs= database.getStatement().executeQuery("SELECT * FROM MEDICINE WHERE `name` NOT IN"
						+"(SELECT `medicine` "
						+ "FROM ALLERGY "
						+ "WHERE patient="+patient+");");
		result = JSON.parseJSON(rs);
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
		return Response.ok().entity((String)result).build();
	}
	@GET
	@Path("/Medicine/")
	@Produces(MediaType.TEXT_PLAIN)
	public Response getPossibleTreatmentMedicines()throws Exception{
		DatabaseConnection database =null;
		String result=null;
		try {
		database = new DatabaseConnection();
		ResultSet rs= database.getStatement().executeQuery("SELECT * FROM MEDICINE");
		result = JSON.parseJSON(rs);
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
		return Response.ok().entity((String)result).build();
	}
	@GET
	@Path("/NonUpdatedMedicalRecord/")
	@Produces(MediaType.TEXT_PLAIN)
	public Response getNonUpdatedMedicalRecord()throws Exception{
		DatabaseConnection database =null;
		String result=null;
		try {
		database = new DatabaseConnection();
		ResultSet rs= database.getStatement().executeQuery("SELECT P.id,P.firstname,P.lastname,"
				+ "MR.dangerousness,MR.last_updated "
				+ "FROM MEDICAL_RECORD AS MR,PATIENT AS P "
				+ "WHERE P.id=MR.patient and MR.last_updated <"
				+ "(SELECT MAX(APP.date) "
				+ "FROM APPOINTMENT AS APP "
				+ "WHERE APP.`status`='SHOW_UP' AND MR.patient=APP.patient);");
		result = JSON.parseJSON(rs);
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
		return Response.ok().entity((String)result).build();
	}
	@GET
	@Path("/UpdatedMedicalRecord/")
	@Produces(MediaType.TEXT_PLAIN)
	public Response getUpdatedMedicalRecord()throws Exception{
		DatabaseConnection database =null;
		String result=null;
		try {
		database = new DatabaseConnection();
		ResultSet rs= database.getStatement().executeQuery("SELECT P.id,P.firstname,P.lastname,"
				+ "MR.dangerousness,MR.last_updated "
				+ "FROM MEDICAL_RECORD AS MR,PATIENT AS P "
				+ "WHERE P.id=MR.patient and MR.last_updated >=("
				+ "SELECT MAX(APP.date) "
				+ "FROM APPOINTMENT AS APP "
				+ "WHERE APP.`status`='SHOW_UP' AND MR.patient=APP.patient);");
		result = JSON.parseJSON(rs);
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
		return Response.ok().entity((String)result).build();
	}
}
