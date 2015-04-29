package management;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import extras.DatabaseConnection;
import extras.JSON;

/**
* This is the Report class that handles the report 
* service for the management section. It creates 
* each requested report and stores it on the server.
*
* @author  Demetris Paschalides, Philippos Aziz and Theodoros Charalambous
* @version 3.1
*/
@Path("/management/")
public class Report {
	
  /**
   * This method is used to generate the report for the number
   * of patient visited each clinic every day in the passed week.
   * It executes a query of such and then report the results in the
   * generated report for that week.
   * @return MediaType.TEXT_PLAIN The stored data in JSON format.
   */
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
			
			SimpleDateFormat dateFormat =new SimpleDateFormat("MMyyyy");
			File clinic_report;
			File dir = new File("C:\\Users\\dpasch01\\Desktop\\REPORTS");
						
			if(!dir.exists())
				dir.mkdir();
			
			clinic_report =new File("C:\\Users\\dpasch01\\Desktop\\REPORTS\\clinic_report_"+dateFormat.format(Calendar.getInstance().getTime())+".txt");
			if(!clinic_report.exists())
				clinic_report.createNewFile();
							
			FileWriter fileWritter = new FileWriter(clinic_report.getAbsoluteFile(),true);
	        BufferedWriter bufferWritter = new BufferedWriter(fileWritter);
	        
	        rs.beforeFirst();
	        while(rs.next()){
	        	bufferWritter.write(rs.getString(1)+" : "+rs.getInt(2)+" : "+rs.getDate(3)+"\n");
	        }
	        bufferWritter.close();
	        
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
 
	/**
   * This method is used to generate the report for the total number
   * of patients visited every clinic in the passed week.
   * It executes a query of such and then report the results in the
   * generated report for that week.
   * @return MediaType.TEXT_PLAIN The stored data in JSON format.
   */
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
			
			SimpleDateFormat dateFormat =new SimpleDateFormat("MMyyyy");
			File patient_report;
			File dir = new File("C:\\Users\\dpasch01\\Desktop\\REPORTS");
						
			if(!dir.exists())
				dir.mkdir();
			
			patient_report =new File("C:\\Users\\dpasch01\\Desktop\\REPORTS\\patient_report_"+dateFormat.format(Calendar.getInstance().getTime())+".txt");
			if(!patient_report.exists())
				patient_report.createNewFile();
							
			FileWriter fileWritter = new FileWriter(patient_report.getAbsoluteFile(),true);
	        BufferedWriter bufferWritter = new BufferedWriter(fileWritter);
	        
	        rs.beforeFirst();
	        while(rs.next()){
	        	bufferWritter.write(rs.getInt(1)+"\n");
	        }
	        bufferWritter.close();
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

  /**
   * This method is used to generate the report for the number
   * of patient that suffer from each reported condition.
   * It executes a query of such and then report the results in the
   * generated report for that week.
   * @return MediaType.TEXT_PLAIN The stored data in JSON format.
   */
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
			
			SimpleDateFormat dateFormat =new SimpleDateFormat("MMyyyy");
			File condition_report;
			File dir = new File("C:\\Users\\dpasch01\\Desktop\\REPORTS");
						
			if(!dir.exists())
				dir.mkdir();
			
			condition_report =new File("C:\\Users\\dpasch01\\Desktop\\REPORTS\\condition_report_"+dateFormat.format(Calendar.getInstance().getTime())+".txt");
			if(!condition_report.exists())
				condition_report.createNewFile();
							
			FileWriter fileWritter = new FileWriter(condition_report.getAbsoluteFile(),true);
	        BufferedWriter bufferWritter = new BufferedWriter(fileWritter);
	        
	        rs.beforeFirst();
	        while(rs.next()){
	        	bufferWritter.write(rs.getString(1)+" : "+rs.getInt(2)+"\n");
	        }
	        bufferWritter.close();
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
	
  /**
   * This method is used to generate the report for the amount
   * of medicine is being prescibed to the patients of every clinic
   * in the health management system.
   * It executes a query of such and then report the results in the
   * generated report for that week.
   * @return MediaType.TEXT_PLAIN The stored data in JSON format.
   */
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
			
			SimpleDateFormat dateFormat =new SimpleDateFormat("MMyyyy");
			File medicine_report;
			File dir = new File("C:\\Users\\dpasch01\\Desktop\\REPORTS");
						
			if(!dir.exists())
				dir.mkdir();
			
			medicine_report =new File("C:\\Users\\dpasch01\\Desktop\\REPORTS\\medicine_report_"+dateFormat.format(Calendar.getInstance().getTime())+".txt");
			if(!medicine_report.exists())
				medicine_report.createNewFile();
							
			FileWriter fileWritter = new FileWriter(medicine_report.getAbsoluteFile(),true);
	        BufferedWriter bufferWritter = new BufferedWriter(fileWritter);
	        
	        rs.beforeFirst();
	        while(rs.next()){
	        	bufferWritter.write(rs.getString(1)+" : "+rs.getInt(2)+"\n");
	        }
	        bufferWritter.close();
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
