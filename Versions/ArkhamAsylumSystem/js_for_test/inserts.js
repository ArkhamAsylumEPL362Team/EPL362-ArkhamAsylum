<script>
	
var ADD_PATIENT ="http://localhost:8080/ArkhamAsylumSystem/rest/insert/patient/";	
var ADD_MEDICINE ="http://localhost:8080/ArkhamAsylumSystem/rest/insert/medicine/";	
var ADD_SIDE_EFFECT ="http://localhost:8080/ArkhamAsylumSystem/rest/insert/side_effect/";
var ADD_CLINICAL_STAFF ="http://localhost:8080/ArkhamAsylumSystem/rest/insert/clinical_staff/";	
var ADD_USER = "http://localhost:8080/ArkhamAsylumSystem/rest/insert/user/";	
var ADD_INCIDENT = "http://localhost:8080/ArkhamAsylumSystem/rest/insert/incident/";
var ADD_MEDICAL_RECORD=	"http://localhost:8080/ArkhamAsylumSystem/rest/insert/medical_record/";
var ADD_INCIDENT_BY_PRESCRIPTION="http://localhost:8080/ArkhamAsylumSystem/rest/insert/incident_by_prescription/";
var ADD_COMMENT ="http://localhost:8080/ArkhamAsylumSystem/rest/insert/comment/";
var ADD_CONSULTANT = "http://localhost:8080/ArkhamAsylumSystem/rest/insert/consultant/";
var ADD_WARNING_OVERRULED = "http://localhost:8080/ArkhamAsylumSystem/rest/insert/warning_overruled/";
var ADD_APPOINTMENT = "http://localhost:8080/ArkhamAsylumSystem/rest/insert/appointment/"; 	
	
function addPatient(e){
	var data = { 
				"id":"1", 
				"firstname":"Andria",
				"relative_email":"kous@hotmail.com",
				"lastname":"Koushi",
				"address":"Nicosia",
				"phonenumber":"99166820",
				"birthday":"1992-10-08",
				"gender":"M"
			   };	
	data = JSON.stringify(data);
	$.post(ADD_PATIENT,data,function(data){
		data=JSON.parse(data);
		console.log(data);
	});
 }	
	
	
	
function addMedicine(e){
	var data = { 
				"name":"Farmako2", 
				"description":"Vixas2"
			   };	
	data = JSON.stringify(data);
	$.post(ADD_MEDICINE,data,function(data){
		data=JSON.parse(data);
		console.log(data);
	});
 }
	
function addSideEffect(e){
	var data = { 
				"medicine":"Farmako2", 
				"effect":"Diaria"
			   };	
	data = JSON.stringify(data);
	$.post(ADD_SIDE_EFFECT,data,function(data){
		data=JSON.parse(data);
		console.log(data);
	});
 }	
	
	

 function addClinicalStaff(e){
	var data = { 
				"id":"1", 
				"profession":"DOCTOR"
			   };	
	data = JSON.stringify(data);
	$.post(ADD_CLINICAL_STAFF,data,function(data){
		data=JSON.parse(data);
		console.log(data);
	});
 }		
	
	
function addUser(e){
	var data = { 
				"id":"1", 
				"firstname":"Andria",
				"lastname":"Koushi",
				"email":"kous@hotmail.com",
				"phonenumber":"99166820",
				"username":"akoushi05",
				"password":"1234",
				"type":"CLINICAL_STAFF"
			   };	
	
	data = JSON.stringify(data);
	$.post(ADD_USER,data,function(data){
		data=JSON.parse(data);
		console.log(data);
	});
 }	
	
function addIncident(e){
	var data = { 
				"id":"1", 
				"patient":"2",
				"details":"Trwei Elies ",
				"type":"THREAT"     
			   };	
	
	data = JSON.stringify(data);
	$.post(ADD_INCIDENT,data,function(data){
		data=JSON.parse(data);
		console.log(data);
	});
 }	
	
function addMedicalRecord(e){
	var data = { 
				"patient":"2", 
				"alergies":"bacon",
				"last_update":"2002/10/08",
				"current_treatment":"Xapia",
				"status":"NOT_DANGEROUS"
			   };	
	
	data = JSON.stringify(data);
	$.post(ADD_MEDICAL_RECORD,data,function(data){
		data=JSON.parse(data);
		console.log(data);
	});
 }	
	
function addIncidentByPrescription(e){
	var data = { 
				"id":"1", 
				"patient":"2",
				"details":"Xaloumia"
			   };	
	
	data = JSON.stringify(data);
	$.post(ADD_INCIDENT_BY_PRESCRIPTION,data,function(data){
		data=JSON.parse(data);
		console.log(data);
	});
 }			

function addComment(e){
	var data = { 
				"id":"1",
				"content":"bacon",
				"patient":"2",
				"clinician":"1",
				"date":"2002/10/08"
			   };	
	
	data = JSON.stringify(data);
	$.post(ADD_COMMENT,data,function(data){
		data=JSON.parse(data);
		console.log(data);
	});
 }
	
function addConsultant(e){
	var data = { 
				"patient":"2",
				"clinician":"1"
			   };	
	
	data = JSON.stringify(data);
	$.post(ADD_CONSULTANT,data,function(data){
		data=JSON.parse(data);
		console.log(data);
	});
 }	

function addWarningOverruled(e){
	var data = { 
				"clinician":"1",
				"warning":"Tuna",
				"date":"2000/11/08"
			   };	
	
	data = JSON.stringify(data);
	$.post(ADD_WARNING_OVERRULED,data,function(data){
		data=JSON.parse(data);
		console.log(data);
	});
 }	
	
function addAppointment(e){
	var data = { 
				"id":"1", 
				"date":"2000/10/02",
				"patient":"2",
				"clinician":"1",
				"clinic":"1",
				"time":"22:20:20",
				"type":"DROP_IN",
				"status":"SHOW_UP"
			   };	
	data = JSON.stringify(data);
	$.post(ADD_APPOINTMENT,data,function(data){
		data=JSON.parse(data);
		console.log(data);
	});
 }		
</script>