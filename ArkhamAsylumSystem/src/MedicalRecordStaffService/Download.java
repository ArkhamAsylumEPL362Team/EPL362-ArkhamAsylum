package MedicalRecordStaffService;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.sql.ResultSet;
import java.util.Calendar;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
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
	private static RequestInfo download_request;
	
	@GET
	@Path("/download")
	@Produces("text/txt")
	public static Response getFile() throws Exception {
		RequestInfo requestInfo = download_request;
		
		DatabaseConnection database = new DatabaseConnection();
		//if (database.getStatement() == null){
		//	return "No such patient has been found";
		//}
		
		ResultSet rs= database.getStatement().executeQuery("SELECT * FROM PATIENT WHERE id='"+requestInfo.patientID+"';");
		String result = JSON.parseJSON(rs);
		
		File report = new File("medical_record"+requestInfo.patientID+".txt");
						
		FileOutputStream fout = new FileOutputStream(report.getAbsoluteFile());
		Writer out = new OutputStreamWriter(fout,"UTF8");
		
		out.write(result);
		
		out.close();
		ResponseBuilder response = Response.ok((Object) report);
	    response.header("Content-Disposition",
	        "attachment; filename=medical_record"+requestInfo.patientID+".txt");
	    return response.build();

	}
	
	@POST
	@Path("/set_file")
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED, MediaType.APPLICATION_JSON}) 
	public static void setFile(String data) throws Exception {
		ObjectMapper mapper = new ObjectMapper();
		download_request = mapper.readValue(data, RequestInfo.class);
	}
}
