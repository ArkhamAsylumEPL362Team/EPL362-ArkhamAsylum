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

<script>
function addPersonelInfo(){
        var personelType;
        if($('#personel_type-0').is(':checked'))
            personelType="MEDICAL_RECORD_STAFF";
        else if($('#personel_type-1').is(':checked'))
            personelType="RECEPTIONIST";
        else
            personelType="CLINICAL_STAFF";
        var data = {"personelID":$('#add_personelID_input').val(),
                    "firstname":$('#add_personel_firstname_input').val(),
                    "lastname":$('#add_personel_lastname_input').val(),
                    "email":$('#add_personel_email_input').val(),
                    "phonenumber":$('#add_personel_phonenumber_input').val(),
                    "username":$('#add_personel_username_input').val(),
                    "password":$('#add_personel_password_input').val(),
                    "type":personelType
                   };
        data=JSON.stringify(data);
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/ArkhamAsylumSystem/rest/medical_record_service/insert_personel/",
            async:"true",
            cache: "true",
            data: data,
            success: function(personelInfo) {
                personelInfo = JSON.parse(personelInfo);
                console.log(personelInfo);
                $('#example9 tbody').append('<tr><td>'+personelInfo.personelID
                                            +'</td><td>'+personelInfo.firstname
                                            +'</td><td>'+personelInfo.lastname
                                            +'</td><td>'+personelInfo.email
                                            +'</td><td>'+personelInfo.phonenumber
                                            +'</td><td>'+personelInfo.type
                                            +'</td></tr>');
            }
        });
    }
    
    $('#add-personel-form').submit(function(e){
        addPersonelInfo();
        e.preventDefault();
        $('#my-modal').modal('toggle');  
    });
</script>