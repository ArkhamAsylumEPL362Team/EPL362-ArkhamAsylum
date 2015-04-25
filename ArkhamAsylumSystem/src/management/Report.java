package management;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import extras.DatabaseConnection;
import extras.JSON;

@Path("/management/")
public class Report {
	
	@GET
	@Path("/report_clinics/")
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
}
