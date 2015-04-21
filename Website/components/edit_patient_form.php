<form id="add-appointment-form" name='add-appointment-form' action="" method="post" enctype="multipart/form-data" class="form-horizontal"  >
    <fieldset>
        <div class="modal-body">
            <div class="form-group">
              <label class="col-md-4 control-label" for="edit_patientID_input">Patient ID</label>  
              <div class="col-md-6">
              <input id="edit_patientID_input" name="edit_patientID_input" placeholder="Patient ID goes here..." class="form-control input-md" required="" type="text">

              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="edit_patient_firstname_input">Firstname</label>  
              <div class="col-md-6">
              <input id="edit_patient_firstname_input" name="edit_patient_firstname_input" placeholder="Patient's firstname goes here..." class="form-control input-md" required="" type="text">

              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="edit_patient_lastname_input">Lastname</label>  
              <div class="col-md-6">
              <input id="edit_patient_lastname_input" name="edit_patient_lastname_input" placeholder="Patient's lastname goes here..." class="form-control input-md" required="" type="text">

              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="edit_email_input">Relative's email</label>  
              <div class="col-md-6">
              <input id="edit_email_input" name="edit_email_input" placeholder="Relative's email goes here..." class="form-control input-md" required="" type="text">

              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="edit_patient_address_input">Address</label>  
              <div class="col-md-6">
              <input id="edit_patient_address_input" name="edit_patient_address_input" placeholder="Patient's address goes here..." class="form-control input-md" required="" type="text">

              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="edit_patient_phonenumber_input">Phonenumber</label>  
              <div class="col-md-6">
              <input id="edit_patient_phonenumber_input" name="edit_patient_phonenumber_input" placeholder="Patient's phonenumber goes here..." class="form-control input-md" required="" type="text">

              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="edit_patient_birthdate_input">Birthdate</label>  
              <div class="col-md-6">
              <input id="edit_patient_birthdate_input" name="edit_patient_birthdate_input" placeholder="Patient's birthdate goes here..." class="form-control input-md" required="" type="text">

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
                <button type="button"  onclick ="editExistPatient()" class="btn btn-primary" data-dismiss="modal"  >Save</button>
            </div>
        </div>
    </fieldset>
</form>

<script>
	
	var EDIT_PATIENT ="http://localhost:8080/ArkhamAsylumSystem/rest/receptionist/update/patient/";	

	
	function editExistPatient(){
		var gend ="M";
		if ($("#patient_gender-0").is(':checked')){
			gend = "M";
		}else if ($("#patient_gender-1").is(':checked')){ 
			gend = "F";	
		}
		var data = {  "id": $("#edit_patientID_input").val() ,
					  "firstname":$("#edit_patient_firstname_input").val(),
					  "relative_email":$("#edit_email_input").val(),
					  "lastname":$("#edit_patient_lastname_input").val(),		
					  "address":$("#edit_patient_address_input").val(),	
					  "phonenumber":$("#edit_patient_phonenumber_input").val(),	
					  "birthday":$("#edit_patient_birthdate_input").val(),
					  "gender": gend
					};	
		data = JSON.stringify(data); 
		
		$.post(EDIT_PATIENT,data,function(data){
				data = JSON.parse(data);
				console.log(data);

                if(!data.id){
                    swal("This record is read-only!");
                    return false;
                }
            $('#example1 tr.selected td').eq(0).text(data.id);
            $('#example1 tr.selected td').eq(1).text(data.firstname);
            $('#example1 tr.selected td').eq(2).text(data.lastname);
            $('#example1 tr.selected td').eq(3).text(data.relative_email);
            $('#example1 tr.selected td').eq(4).text(data.address);
            $('#example1 tr.selected td').eq(5).text(data.phonenumber);
            $('#example1 tr.selected td').eq(6).text(data.birthday);
            $('#example1 tr.selected td').eq(7).text(data.gender);
            
            $('#example8 tr.selected td').eq(1).text(data.firstname);
            $('#example8 tr.selected td').eq(2).text(data.lastname);
            $('#example8 tr.selected td').eq(3).text(data.id);
			
		});	
	}
</script>	


	


