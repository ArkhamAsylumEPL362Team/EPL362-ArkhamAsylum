package extras;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;

public class JSON {
	
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
			for(int i=1; i< numOfColumns ; i++){
				culName = culnames.getColumnName(i);
				content = rs.getString(i);
				if (i !=numOfColumns -1){
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


