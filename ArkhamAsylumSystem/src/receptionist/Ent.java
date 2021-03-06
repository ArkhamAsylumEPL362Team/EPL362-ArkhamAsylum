package receptionist;

class Ent {

}

class Medicine{
	public String description;
	public String name;
}



class SideEffect {
	public String medicine;  //text//
	public String effect;    //text//
}


class ClinicalStaff {
	public String id;      		//int//
	public String profession;	//DOCTOR or NURSE or OTHER //
}


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


