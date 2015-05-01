package receptionist;

public class Entities {

}
/**
 * Friendly class that represets a patient	
 * 
 * 
 * 
 * @author  Demetris Paschalides, Philippos Aziz and Theodoros Charalambous
 */
class Patient{
	public String id;  				//int//
	public String firstname;		//text//
	public String relative_email;	//text//
	public String lastname;			//text//
	public String address;			//text//
	public String phonenumber; 		//text//
	public String birthday; 	 //Date YYYY-MM-DD//
	public String gender;  		   //M or F//
}
/**
 * Friendly class that represets a appointment	
 * 
 * @author  Demetris Paschalides, Philippos Aziz and Theodoros Charalambous
 */
class Appointment{
	public String id; 				 //int//
	public String date;				//date//
	public String patient;			//int//
	public String clinician;		//int//
	public String clinic; 			//int//
	public String time;				//int//
	public String type;		 //PRE_ARRANGED or DROP_IN
	public String status; 	//SHOW_UP or NOT_SHOW_UP
	
}