<form id="add-appointment-form" name='add-appointment-form' action="" method="post" enctype="multipart/form-data" class="form-horizontal">
    <fieldset>
        <div class="modal-body">
            <div class="form-group">
                <label class="col-md-4 control-label" for="diagnose_patient_id_input">Patient ID</label>  
                <div class="col-md-6">
                    <input disabled id="diagnose_patient_id_input" name="diagnose_patient_id_input" placeholder="Patient's ID goes here..." class="form-control input-md" required="" type="text">
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-4 control-label" for="diagnose_incedent_type">Incedent's type</label>
                <div class="col-md-4">
                    <div class="radio">
                        <label for="diagnose_incedent_type-0">
                            <input disabled name="diagnose_incedent_type" id="diagnose_incedent_type-0" value="1" checked="checked" type="radio">
                            Threat
                        </label>
                    </div>
                    <div class="radio">
                        <label for="diagnose_incedent_type-1">
                            <input disabled name="diagnose_incedent_type" id="diagnose_incedent_type-1" value="2" type="radio">
                            Other
                        </label>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-4 control-label" for="diagnose_incedent_status">Incedent's status</label>
                <div class="col-md-4">
                    <div class="radio">
                        <label for="diagnose_incedent_status-0">
                            <input disabled name="diagnose_incedent_status" id="diagnose_incedent_status-0" value="1" checked="checked" type="radio">
                            Accidental
                        </label>
                    </div>
                    <div class="radio">
                        <label for="diagnose_incedent_status-1">
                            <input disabled name="diagnose_incedent_status" id="diagnose_incedent_status-1" value="2" type="radio">
                            Deliberated
                        </label>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-4 control-label" for="diagnose_incedent_input">Incedent Details</label>
                <div class="col-md-6">                     
                    <textarea disabled placeholder="Incident's details go here..." class="form-control" id="diagnose_incedent_input" name="diagnose_incedent_input"></textarea>
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-4 control-label" for="diagnose_patient_status_inputs">Patient's Status</label>
                <div class="col-md-8">
                    <div class="radio">
                        <label for="diagnose_patient_status_inputs-0">
                            <input disabled name="diagnose_patient_status_inputs" id="diagnose_patient_status_inputs-0" value="1" checked="checked" type="radio">
                            Dangerous
                        </label>
                    </div>
                    <div class="radio">
                        <label for="diagnose_patient_status_inputs-1">
                            <input disabled name="diagnose_patient_status_inputs" id="diagnose_patient_status_inputs-1" value="2" type="radio">
                            Not dangerous
                        </label>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-4 control-label" for="diagnose_patient_comment_input">Comments</label>
                <div class="col-md-6">                     
                    <textarea disabled placeholder="Comments go here..." class="form-control" id="diagnose_patient_comment_input" name="diagnose_patient_comment_input"></textarea>
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-4 control-label" for="diagnose_patient_treatment_input">Treatment</label>
                <div class="col-md-6">                     
                    <textarea disabled placeholder="Treatment's prescribtion goes here..." class="form-control" id="diagnose_patient_treatment_input" name="diagnose_patient_treatment_input"></textarea>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <div class="form-group">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
            </div>
        </div>
    </fieldset>
</form>