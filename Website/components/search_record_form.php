<form id="add-appointment-form" name='add-appointment-form' action="" method="post" enctype="multipart/form-data" class="form-horizontal">
    <fieldset>
        <div class="modal-body">
            <div class="form-group">
              <label class="col-md-4 control-label" for="search_patientID_input">Patient ID</label>  
              <div class="col-md-6">
                <input id="search_patientID_input" name="search_patientID_input" placeholder="Patient ID goes here..." class="form-control input-md" required="" type="text">
              </div>
            </div>
        </div>
        <div class="modal-footer">
            <div class="form-group">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-primary" >Search</button>
            </div>
        </div>
    </fieldset>
</form>