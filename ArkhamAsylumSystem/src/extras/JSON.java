package extras;

/**
 * Class that used to parse result-set 
 * into string JSON format 
 * 
 * 
 * @author Theodoros Charalambous
 * 
 */

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;

public class JSON {
	
	/**
	 * Private constructor that hides
	 * the public constructor.
	 * 
	 */
	private JSON(){
		
	}
	/**
	 * Method that that takes a result set and creates a json
	 * with all data of the result set.
	 * 
	 * Useful to sent data back to clients after a request in json format.
	 * Clients must parse the string into json object.
	 * 
	 * The JSON string contains the size of the result set 
	 * (in rows px size =2, 2 rows of the result set). and 
	 * an array that every cell represent a row of the result set
	 * 
	 * 
	 * 
	 * @param ResultSet
	 * @return json format in string
	 * @throws Exception
	 */
	
	public static String  parseJSON(ResultSet rs) throws Exception{
		
		String ArrayJSON="";
		String culName;
		String content;
		int j=0;
		ResultSetMetaData culnames =rs.getMetaData();
		 ArrayJSON = "[  "; 
		while (rs.next()){
			int numOfColumns = culnames.getColumnCount();
			ArrayJSON = ArrayJSON + "{";
			for(int i=1; i<= numOfColumns ; i++){
				culName = culnames.getColumnName(i);
				content = rs.getString(i);
				if (i !=numOfColumns){
					ArrayJSON= ArrayJSON  + " \""+ culName + "\""  + ": " + "\""+  content +"\"" + ", " ;
				}else{
					ArrayJSON = ArrayJSON  + "\""+culName+ "\"" + ": " +"\"" + content + "\""  + " ";
				}
			}
			ArrayJSON = ArrayJSON + "}";
			j++;
			if (!rs.isLast()){
				ArrayJSON = ArrayJSON+",";
			}
		}	
		ArrayJSON = ArrayJSON + "]";
		
		String finalJSON = "{ \"size\" : \""+j+"\",  \"results_array\": " +ArrayJSON + "}" ;		
		return finalJSON;
	}
	
	
}


