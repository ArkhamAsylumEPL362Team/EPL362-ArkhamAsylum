package management;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
* This is the Log class that handles the transaction 
* log service. It creates a log file for each day and 
* stores each of that day's transaction such as login
* and appointment insertion. 
*
* @author  Demetris Paschalides, Philippos Aziz and Theodoros Charalambous
* @version 3.1
*/
@Path("/management/")
public class Log {
	
  /**
   * This method is used to log the transaction passed as parameter
   * and it called on the path 'log_transaction' after each transaction
   * to store it in the generated log file of that day.
   * @param data The previous transaction's data
   * @return MediaType.TEXT_PLAIN The stored data in JSON format.
   */
	@POST
	@Path("/log_transaction/")
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED, MediaType.APPLICATION_JSON}) 
	@Produces(MediaType.TEXT_PLAIN)
	public String logTransaction (String data){
			ObjectMapper mapper = new ObjectMapper();
			try {
				Transaction transaction = mapper.readValue(data, Transaction.class);
				File logFile;
				SimpleDateFormat dateFormat =new SimpleDateFormat("dd_MM_yyyy");
				Date date = new Date();
								
				File dir = new File("C:\\Users\\dpasch01\\Desktop\\LOGS");
				if(!dir.exists())
					dir.mkdir();
				
				logFile =new File("C:\\Users\\dpasch01\\Desktop\\LOGS\\"+dateFormat.format(Calendar.getInstance().getTime())+".log");
				if(!logFile.exists())
					logFile.createNewFile();
								
				FileWriter fileWritter = new FileWriter(logFile.getAbsoluteFile(),true);
    	        BufferedWriter bufferWritter = new BufferedWriter(fileWritter);
    	        bufferWritter.write(transaction.service+" : "+transaction.data+" : "+transaction.response+" : "+date.toString()+"\n");
    	        bufferWritter.close();
    	        
			} catch (JsonParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (JsonMappingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			return data;
	}

}
