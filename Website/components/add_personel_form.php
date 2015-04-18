<form id="add-personel-form" name='add-personel-form' action="" method="post" enctype="multipart/form-data" class="form-horizontal">
    <fieldset>
        <div class="modal-body">
            <div class="form-group">
              <label class="col-md-4 control-label" for="add_personelID_input">Personel ID</label>  
              <div class="col-md-6">
              <input id="add_personelID_input" name="add_personelID_input" placeholder="Personel ID goes here..." class="form-control input-md" required="" type="text">

              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="add_personel_firstname_input">Firstname</label>  
              <div class="col-md-6">
              <input id="add_personel_firstname_input" name="add_personel_firstname_input" placeholder="Personel's firstname goes here..." class="form-control input-md" required="" type="text">

              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="add_personel_lastname_input">Lastname</label>  
              <div class="col-md-6">
              <input id="add_personel_lastname_input" name="add_personel_lastname_input" placeholder="Personel's lastname goes here..." class="form-control input-md" required="" type="text">

              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="add_personel_email_input">Email</label>  
              <div class="col-md-6">
              <input id="add_personel_email_input" name="add_personel_email_input" placeholder="Email goes here..." class="form-control input-md" required="" type="text">

              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="add_personel_phonenumber_input">Phonenumber</label>  
              <div class="col-md-6">
              <input id="add_personel_phonenumber_input" name="add_personel_phonenumber_input" placeholder="Phonenumber goes here..." class="form-control input-md" required="" type="text">

              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="add_personel_username_input">Username</label>  
              <div class="col-md-6">
              <input id="add_personel_username_input" name="add_personel_username_input" placeholder="Username goes here..." class="form-control input-md" required="" type="text">

              </div>
            </div>
            
            <div class="form-group">
              <label class="col-md-4 control-label" for="add_personel_password_input">Password</label>  
              <div class="col-md-6">
              <input id="add_personel_password_input" name="add_personel_password_input" type="password" placeholder="Password goes here..." class="form-control input-md" required="" type="text">

              </div>
            </div>
            
            <div class="form-group">
              <label class="col-md-4 control-label" for="personel_type">Type</label>
              <div class="col-md-4">
              <div class="radio">
                <label for="personel_type-0">
                  <input name="personel_type" id="personel_type-0" value="1" checked="checked" type="radio">
                  MEDICAL_RECORD_STAFF
                </label>
                </div>
              <div class="radio">
                <label for="personel_type-1">
                  <input name="personel_type" id="personel_type-1" value="2" type="radio">
                  RECEPTIONIST
                </label>
                </div>
                  
                   <div class="radio">
                <label for="personel_type-2">
                  <input name="personel_type" id="personel_type-2" value="3" type="radio">
                  CLINICAL_STAFF
                </label>
                </div>
              </div>
            </div>
        </div>
        <div class="modal-footer">
            <div class="form-group">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-primary" >Add</button>
            </div>
        </div>
    </fieldset>
</form>