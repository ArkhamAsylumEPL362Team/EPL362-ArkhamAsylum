package ArkhamAsylumSystem;

class Entities {

}


/**
 * Object that shows Medicine
 *
 */
class Medicine{
	public String description;
	public String name;
}
/**
 * Object that shows Patient
 * 
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
 * Object that shows SideEffect
 *
 */
class SideEffect {
	public String medicine;  //text//
	public String effect;    //text//
}
/**
 * 
 * Object that shows clinical staff
 * 
 */
class ClinicalStaff {
	public String id;      		//int//
	public String profession;	//DOCTOR or NURSE or OTHER //
}

/**
 * Object that shows users
 */
class User{
	public String id;			//int//
	public String firstname;	//text//
	public String lastname;		//text//
	public String email;		//text//
	public String phonenumber;	//text//
	public String username;		//text//
	public String password;		//text//
	public String type;			//CLINICAL_STAFF or RECEPTIONIST or MEDICAL_RE //
}


class Incident {
	
	public String id;     	   //int//
	public String patient;	   //int//
	public String details;     //string//
	public String type;		//INCIDENT or THREAT//
}

class MedicalRecord {
	public String patient;				//int//
	public String alergies;			   //text//
	public String last_update;    //Date YYYY-MM-DD//
	public String current_treatment;   //text//
	public String status;   //DANGEROUS or NOT_DANGEROUS //
}

class IncidentByPrescription {
	public String id;   //int//
	public String patient; //id//
	public String details; //text//
}
class Comment{
	public String id;		 //int//
	public String content;	 //text//
	public String patient; 	//int//
	public String clinician; //int//
	public String date; //DATE YYYY-MM-DD //
}
class Consultant {
	public String clinician;  //int//
	public String patient;   //int//
}
class WarningOverruled{
	public String clinician; //int//
	public String warning; //text//
	public String date; // DATE: YYYY-MM-DD //
	
	
}
class Appointment{
	public String id;  //int//
	public String date;//date//
	public String patient;//int//
	public String clinician;//int//
	public String clinic; //int//
	public String time;//int//
	public String type; //PRE_ARRANGED or DROP_IN
	public String status; //SHOW_UP or NOT_SHOW_UP
	
}