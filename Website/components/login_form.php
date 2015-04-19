<form id="login-form" name='login-form' action="" method="post" enctype="multipart/form-data" class="form-horizontal">
    <fieldset>
        <div class="modal-body">
            <div class="form-group">
              <label class="col-md-4 control-label" for="user_id_input">User's ID</label>  
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