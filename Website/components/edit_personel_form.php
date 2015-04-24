<form id="edit-personel-form" name='edit-personel-form' action="" method="post" enctype="multipart/form-data" class="form-horizontal">
    <fieldset>
        <div class="modal-body">
            <div class="form-group">
              <label class="col-md-4 control-label" for="edit_personelID_input">Personel ID</label>  
              <div class="col-md-6">
              <input id="edit_personelID_input" name="edit_personelID_input" placeholder="Personel ID goes here..." class="form-control input-md" required="" type="text">

              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="edit_personel_firstname_input">Firstname</label>  
              <div class="col-md-6">
              <input id="edit_personel_firstname_input" name="edit_personel_firstname_input" placeholder="Personel's firstname goes here..." class="form-control input-md" required="" type="text">

              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="edit_personel_lastname_input">Lastname</label>  
              <div class="col-md-6">
              <input id="edit_personel_lastname_input" name="edit_personel_lastname_input" placeholder="Personel's lastname goes here..." class="form-control input-md" required="" type="text">

              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="edit_personel_email_input">Email</label>  
              <div class="col-md-6">
              <input id="edit_personel_email_input" name="edit_personel_email_input" placeholder="Email goes here..." class="form-control input-md" required="" type="text">

              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="edit_personel_phonenumber_input">Phonenumber</label>  
              <div class="col-md-6">
              <input id="edit_personel_phonenumber_input" name="edit_personel_phonenumber_input" placeholder="Phonenumber goes here..." class="form-control input-md" required="" type="text">

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
                <button type="submit" class="btn btn-primary" >Save Changes</button>
            </div>
        </div>
    </fieldset>
</form>
<script>
    function editPersonelInfo(){
        var personelType;
        if($('#personel_type-0').is(':checked'))
            personelType="MEDICAL_RECORD_STAFF";
        else if($('#personel_type-1').is(':checked'))
            personelType="RECEPTIONIST";
        else
            personelType="CLINICAL_STAFF";
        var data = {"personelID":$('#edit_personelID_input').val(),
                    "firstname":$('#edit_personel_firstname_input').val(),
                    "lastname":$('#edit_personel_lastname_input').val(),
                    "email":$('#edit_personel_email_input').val(),
                    "phonenumber":$('#edit_personel_phonenumber_input').val(),
                    "username":"0",
                    "password":"0",
                    "type":personelType
                   };
        data=JSON.stringify(data);
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/ArkhamAsylumSystem/rest/medical_record_service/update_personel/",
            async:"true",
            cache: "true",
            data: data,
            success: function(personelInfo) {
                 _logTransaction("http://localhost:8080/ArkhamAsylumSystem/rest/medical_record_service/update_personel/",data,personelInfo);
                personelInfo = JSON.parse(personelInfo);
                console.log(personelInfo);
                $('#example9 tbody tr.selected td').eq(0).text(personelInfo.personelID);
                $('#example9 tbody tr.selected td').eq(1).text(personelInfo.firstname);
                $('#example9 tbody tr.selected td').eq(2).text(personelInfo.lastname);
                $('#example9 tbody tr.selected td').eq(3).text(personelInfo.email);
                $('#example9 tbody tr.selected td').eq(4).text(personelInfo.phonenumber);
                $('#example9 tbody tr.selected td').eq(5).text(personelInfo.type);  
            }
        });
    }
    
    $('#edit-personel-form').submit(function(e){
        editPersonelInfo();
        e.preventDefault();
        $('#my-modal').modal('toggle');  
    });
</script>