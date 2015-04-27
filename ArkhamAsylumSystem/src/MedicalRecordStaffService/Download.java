package MedicalRecordStaffService;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.sql.ResultSet;
import java.util.Calendar;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;

import com.fasterxml.jackson.databind.ObjectMapper;

import extras.DatabaseConnection;
import extras.JSON;

@Path("/medical_record_service/")
public class Download {

	@POST
	@Path("/download")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED, MediaType.APPLICATION_JSON}) 
	public Response getFile(String data) throws Exception {
		ObjectMapper mapper = new ObjectMapper();
		RequestInfo requestInfo = mapper.readValue(data, RequestInfo.class);
		
		DatabaseConnection database = new DatabaseConnection();
		//if (database.getStatement() == null){
		//	return "No such patient has been found";
		//}
		
		ResultSet rs= database.getStatement().executeQuery("SELECT * FROM PATIENT WHERE id='"+requestInfo.patientID+"';");
		String result = JSON.parseJSON(rs);
		
		File dir = new File("C:\\Users\\dpasch01\\Desktop\\MEDICAL_RECORDS");
		if(!dir.exists())
			dir.mkdir();
		
		File report = new File("C:\\Users\\dpasch01\\Desktop\\MEDICAL_RECORDS\\medical_record"+requestInfo.patientID+".txt");
		if(!report.exists())
			report.createNewFile();
						
		FileWriter fileWritter = new FileWriter(report.getAbsoluteFile(),true);
        BufferedWriter bufferWritter = new BufferedWriter(fileWritter);
        bufferWritter.write(data);
        bufferWritter.close();
		
		ResponseBuilder response = Response.ok((Object) report);
	    response.header("Content-Disposition",
	        "attachment; filename=medical_record"+requestInfo.patientID+"zip");
	    return response.build();

	}
	
}
