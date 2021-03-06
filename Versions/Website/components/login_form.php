<form id="login-form" name='login-form' action="" method="post" enctype="multipart/form-data" class="form-horizontal">
    <fieldset>
        <div class="modal-body">
            <div class="form-group">
              <label class="col-md-4 control-label" for="user_id_input">Username</label>  
              <div class="col-md-6">
              <input id="user_id_input" name="user_id_input" placeholder="User's ID" class="form-control input-md" required="" type="text">
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="user_password_input">Password</label>  
              <div class="col-md-6">
              <input id="user_password_input" name="user_password_input"  class="form-control input-md" required="" type="password">
              </div>
            </div>

        </div>
        <div class="modal-footer">
            <div class="form-group">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-primary" >Log in</button>
            </div>
        </div>
    </fieldset>
</form>
<script>
$('#login-form').submit(function(e){
    var LOG_IN="http://localhost:8080/ArkhamAsylumSystem/rest/medical_record_service/log_in/";
    var data={
        "personelID":"0",
        "firstname":"0",
        "lastname":"0",
        "email":"0",
        "phonenumber":"0",
        "username":$('#user_id_input').val(),
        "password":$('#user_password_input').val(),
        "type":"0"
    };
    data=JSON.stringify(data);
    $.post(LOG_IN,data,function(data){
            data = JSON.parse(data);
            if(data.status=="ok"){
                window.location.href = "medical_record_staff.php";
            }else{
                swal("Error in username or password!","Please try again.");
            }
    });	
    e.preventDefault();
});
</script>