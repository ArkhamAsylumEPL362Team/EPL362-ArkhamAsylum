package management;

import java.sql.ResultSet;
import java.sql.SQLException;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import extras.DatabaseConnection;
import extras.JSON;

@Path("/management/")
public class Report {
	
	@GET
	@Path("/report_clinics/")
	@Produces(MediaType.TEXT_PLAIN)
	public Response reportClinics()throws Exception{
		DatabaseConnection database =null;
		String result=null;
		try {
			database = new DatabaseConnection();
			ResultSet rs= database.getStatement().executeQuery("    SELECT clinic AS 'Clinic',COUNT(*) AS 'Patients',`date` AS 'Date'  FROM APPOINTMENT  WHERE `date` BETWEEN (CURDATE() - INTERVAL 1 WEEK) AND CURDATE()GROUP BY clinic , `date`;");
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
	@Path("/report_patients/")
	@Produces(MediaType.TEXT_PLAIN)
	public Response reportPatients()throws Exception{
		DatabaseConnection database =null;
		String result=null;
		try {
			database = new DatabaseConnection();
			ResultSet rs= database.getStatement().executeQuery("    SELECT COUNT(*) AS 'Patients' FROM APPOINTMENT WHERE `date` BETWEEN (CURDATE() - INTERVAL 1 WEEK) AND CURDATE();");
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
	@Path("/report_conditions/")
	@Produces(MediaType.TEXT_PLAIN)
	public Response reportConditions()throws Exception{
		DatabaseConnection database =null;
		String result=null;
		try {
			database = new DatabaseConnection();
			ResultSet rs= database.getStatement().executeQuery("SELECT `condition` AS 'Condition',COUNT(*) AS 'Patients' FROM TREATMENT_MEDICINE,TREATMENT WHERE TREATMENT_MEDICINE.treatment_id=TREATMENT.id GROUP BY `condition`;");
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
	@Path("/report_medicine/")
	@Produces(MediaType.TEXT_PLAIN)
	public Response reportMedicine()throws Exception{
		DatabaseConnection database =null;
		String result=null;
		try {
			database = new DatabaseConnection();
			ResultSet rs= database.getStatement().executeQuery("	SELECT medicine AS 'Medicine',SUM(quantity) AS 'Amount' FROM TREATMENT_MEDICINE GROUP BY medicine;");
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
