<form id="add-patient-form" name='add-appointment-form' action="" method="post" enctype="multipart/form-data" class="form-horizontal"  onsubmit="insertNewPatient()">
    <fieldset>
        <div class="modal-body">
            <div class="form-group">
              <label class="col-md-4 control-label" for="add_patientID_input">Patient ID</label>  
              <div class="col-md-6">
              <input id="add_patientID_input" name="add_patientID_input" placeholder="Patient ID goes here..." class="form-control input-md" required="" type="text">

              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="add_patient_firstname_input">Firstname</label>  
              <div class="col-md-6">
              <input id="add_patient_firstname_input" name="add_patient_firstname_input" placeholder="Patient's firstname goes here..." class="form-control input-md" required="" type="text">

              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="add_patient_lastname_input">Lastname</label>  
              <div class="col-md-6">
              <input id="add_patient_lastname_input" name="add_patient_lastname_input" placeholder="Patient's lastname goes here..." class="form-control input-md" required="" type="text">

              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="add_email_input">Relative's email</label>  
              <div class="col-md-6">
              <input id="add_email_input" name="add_email_input" placeholder="Relative's email goes here..." class="form-control input-md" required="" type="text">

              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="add_patient_address_input">Address</label>  
              <div class="col-md-6">
              <input id="add_patient_address_input" name="add_patient_address_input" placeholder="Patient's address goes here..." class="form-control input-md" required="" type="text">

              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="add_patient_phonenumber_input">Phonenumber</label>  
              <div class="col-md-6">
              <input id="add_patient_phonenumber_input" name="add_patient_phonenumber_input" placeholder="Patient's phonenumber goes here..." class="form-control input-md" required="" type="text">

              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="add_patient_birthdate_input">Birthdate</label>  
              <div class="col-md-6">
              <input id="add_patient_birthdate_input" name="add_patient_birthdate_input" placeholder="Patient's birthdate goes here..." class="form-control input-md" required="" type="text">

              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="patient_gender">Gender</label>
              <div class="col-md-4">
              <div class="radio">
                <label for="patient_gender-0">
                  <input name="patient_gender" id="patient_gender-0" value="1" checked="checked" type="radio">
                  Male
                </label>
                </div>
              <div class="radio">
                <label for="patient_gender-1">
                  <input name="patient_gender" id="patient_gender-1" value="2" type="radio">
                  Female
                </label>
                </div>
              </div>
            </div>
        </div>
        <div class="modal-footer">
            <div class="form-group">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="button" onclick="insertNewPatient()" class="btn btn-primary" data-dismiss="modal"  >Save</button>
            </div>
        </div>
    </fieldset>
</form>

<script>
	
	var ADD_PATIENT ="http://localhost:8080/ArkhamAsylumSystem/rest/receptionist/insert/patient/";	

	function insertNewPatient(){
		
		var gend ="M";
		if ($("#patient_gender-0").is(':checked')){
			gend = "M";
		}else if ($("#patient_gender-0").is(':checked')){ 
			gend = "F";	
		}
		var data = {  "id": $("#add_patientID_input").val() ,
					  "firstname":$("#add_patient_firstname_input").val(),
					  "relative_email":$("#add_email_input").val(),
					  "lastname":$("#add_patient_lastname_input").val(),		
					  "address":$("#add_patient_address_input").val(),	
					  "phonenumber":$("#add_patient_phonenumber_input").val(),	
					  "birthday":$("#add_patient_birthdate_input").val(),
					  "gender": gend
					};	
		data = JSON.stringify(data); 
		$.post(ADD_PATIENT,data,function(data1){
            _logTransaction(ADD_PATIENT,data,data1);
				data1 = JSON.parse(data1);
				console.log(data1);
					var t = $('#example1').DataTable();
					t.row.add( [
            			    data1.id+"",
							data1.firstname +"",
							data1.lastname +"",
							data1.relative_email +"",
							data1.address +"",
							data1.phonenumber +"",
							data1.birthday +"",
							data1.gender +""
					] ).draw();
		});	
	}
	
</script>	

