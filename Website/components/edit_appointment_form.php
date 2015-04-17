<form id="add-appointment-form" name='add-appointment-form' action="" method="post" enctype="multipart/form-data" class="form-horizontal">
    <fieldset>
        <div class="modal-body">
            <div class="form-group">
              <label class="col-md-4 control-label" for="edit_patientID_input">Patient ID</label>  
              <div class="col-md-6">
              <input id="edit_patientID_input" name="edit_patientID_input" placeholder="Patient ID goes here..." class="form-control input-md" required="" type="text">

              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="edit_clinicianID_input">Clinician</label>
              <div class="col-md-6">
                <select id="edit_clinicianID_input" name="edit_clinicianID_input" class="form-control">

                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="edit_date_input">Date</label>  
              <div class="col-md-6">
              <input id="edit_date_input" name="edit_date_input" placeholder="Appointment's date goes here..." class="form-control input-md" required="" type="text">
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="edit_clinic_input">Clinic</label>
              <div class="col-md-6">
                <select id="edit_clinic_input" name="edit_clinic_input" class="form-control">

                </select>
              </div>
            </div>             
            
            <div class="form-group">
              <label class="col-md-4 control-label" for="edit_time_input">Time</label>  
              <div class="col-md-6">
              <input id="edit_time_input" name="edit_time_input" placeholder="Appointment's time goes here..." class="form-control input-md" required="" type="text">

              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="appointment_type">Appointment Type</label>
              <div class="col-md-4">
              <div class="radio">
                <label for="appointment_type-0">
                  <input name="appointment_type" id="appointment_type-0" value="1" checked="checked" type="radio">
                  Pre-arranged
                </label>
                </div>
              <div class="radio">
                <label for="appointment_type-1">
                  <input name="appointment_type" id="appointment_type-1" value="2" type="radio">
                  Drop-in
                </label>
                </div>
              </div>
            </div>
            
            <div class="form-group">
              <label class="col-md-4 control-label" for="edit_appointment_status">Appointment Status</label>
              <div class="col-md-4">
              <div class="radio">
                <label for="edit_appointment_status-0">
                  <input name="edit_appointment_status" id="edit_appointment_status-0" value="1" checked="checked" type="radio">
                  Not show up
                </label>
                </div>
              <div class="radio">
                <label for="edit_appointment_status-1">
                  <input name="edit_appointment_status" id="edit_appointment_status-1" value="2" type="radio">
                  Show up
                </label>
                </div>
              </div>
            </div>
        </div>
        <div class="modal-footer">
            <div class="form-group">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="button" onclick="editExistAppointment()" class="btn btn-primary" data-dismiss="modal">Save</button>
            </div>
        </div>
    </fieldset>
</form>

<script>
	
	var ALL_CLINICS = "http://localhost:8080/ArkhamAsylumSystem/rest/receptionist/report/clinic/";	
	var ALL_CLINICAL_STAFF = "http://localhost:8080/ArkhamAsylumSystem/rest/receptionist/report/clinical_staff/";
	var EDIT_APPOINTMENT = "";
	
	$(document).ready(function(){
		
		$.get(ALL_CLINICS,function(data){
			data = JSON.parse(data);
			
			$.each(data.results_array, function(i,clinic){
				$("#edit_clinic_input").append( $('<option></option>').html(clinic.name));
			});
		});
		
		$.get(ALL_CLINICAL_STAFF,function(data){
			
			data = JSON.parse(data);
			if (data.size > 0)
			$.each(data.results_array, function(i,staff){
				$("#edit_clinicianID_input").append( $('<option></option>').attr("id",staff.id)
										   .html(staff.firstname+" "+staff.lastname));
			});
		})
	});
	
	
	function editExistAppointment(){
		
		var status = "";
		var type = "";
		
		if ($("#edit_appointment_status-0").is(':checked')){
				status = "NOT_SHOW_UP";	
		}else{
				status = "SHOW_UP";
		}
		
		if ($("#edit_appointment_type-0").is(':checked')){
				type = "PRE_ARRANGED";	
		}else{
				type = "DROP_IN";
		}
		var data = {	"id": $("#edit_patientID_input").val(),
					 	"date":$("#edit_date_input").val(),
						"patient":$("#edit_patientID_input").val(),
						"clinician":$("#edit_clinicianID_input :selected").attr("id"),		
						"clinic":$('#edit_clinic_input :selected').text(),	
						"time":$("#edit_time_input").val(),			
						"type":type,	 
						"status": status
				  };

		data = JSON.stringify(data);
		
		console.log(data);
		
//		$.post( ADD_APPOINTMENT,data,function(data){
//	
//			console.log(data);
//			data= JSON.parse(data);
//
//			$.each(data.results_array,function(i,data2){
//				var t = $('#example').DataTable();
//					t.row.add( [
//            			    data2.appID+"",
//							data2.firstname +" " +data2.lastname +"",
//							data2.clinicName +"",
//							data2.date +"",
//							data2.time +"",
//							data2.type +"",
//							data2.clinicianN +" " + data2.clinicianL,
//							data2.status +""
//					] ).draw();
//			});
//		});
	}
</script>
	
	
	
	