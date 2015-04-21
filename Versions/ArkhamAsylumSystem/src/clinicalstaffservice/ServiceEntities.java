package clinicalstaffservice;

public class ServiceEntities {
	
}
class Incident {
	public String id;     	   //int//
	public String patient;	   //int//
	public String details;     //string//
	public String type;		//INCIDENT or THREAT//
}

class Comment{
	public String id;		 //int//
	public String content;	 //text//
	public String patient; 	//int//
	public String clinician; //int//
	public String date; //DATE YYYY-MM-DD //
}

class Treatment{
	public String id;		 
	public String prev_id;	 
	public String patient; 	
}
 class TreatmentMedicine{
	public String treatment_id;		 
	public String medicine;	 
	public String quantity; 	
	public String condition;  
 }
 class MedicalRecord{
		public String patient;		 
		public String last_updated;	 
		public String dangerousness; 	
	}
