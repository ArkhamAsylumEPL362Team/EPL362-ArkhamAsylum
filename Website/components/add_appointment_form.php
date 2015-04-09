<form id="add-appointment-form" name='add-appointment-form' action="" method="post" enctype="multipart/form-data" class="form-horizontal">
    <fieldset>
        <div class="modal-body">
            <div class="form-group">
              <label class="col-md-4 control-label" for="add_patientID_input">Patient ID</label>  
              <div class="col-md-6">
              <input id="add_patientID_input" name="add_patientID_input" placeholder="Patient ID goes here..." class="form-control input-md" required="" type="text">
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="add_clinicianID_input">Clinician</label>
              <div class="col-md-6">
                <select id="add_clinicianID_input" name="add_clinicianID_input" class="form-control">
                  <option value="1">George Gianakopoulos</option>
                  <option value="2">Tasos Steliou</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="add_date_input">Date</label>  
              <div class="col-md-6">
              <input id="add_date_input" name="add_date_input" placeholder="Appointment's date goes here..." class="form-control input-md" required="" type="text">
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="add_clinic_input">Clinic</label>
              <div class="col-md-6">
                <select id="add_clinic_input" name="add_clinic_input" class="form-control">
                  <option value="1">Apollonio</option>
                  <option value="2">Areteion</option>
                </select>
              </div>
            </div>            
            
            <div class="form-group">
              <label class="col-md-4 control-label" for="add_time_input">Time</label>  
              <div class="col-md-6">
              <input id="add_time_input" name="add_time_input" placeholder="Appointment's time goes here..." class="form-control input-md" required="" type="text">
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
              <label class="col-md-4 control-label" for="appointment_status">Appointment Status</label>
              <div class="col-md-4">
              <div class="radio">
                <label for="appointment_status-0">
                  <input name="appointment_status" id="appointment_status-0" value="1" checked="checked" type="radio">
                  Not show up
                </label>
                </div>
              <div class="radio">
                <label for="appointment_status-1">
                  <input name="appointment_status" id="appointment_status-1" value="2" type="radio">
                  Show up
                </label>
                </div>
              </div>
            </div>
        </div>
        <div class="modal-footer">
            <div class="form-group">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-primary" >Save</button>
            </div>
        </div>
    </fieldset>
</form>