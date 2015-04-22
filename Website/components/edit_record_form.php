<form id="add-appointment-form" name='add-appointment-form' action="" method="post" enctype="multipart/form-data" class="form-horizontal">
    <fieldset>
        <div class="modal-body">
            <h3>Possible Treatments</h3>
            <div class="row">
                <div class="col-md-11">
                    <table id="poss_treat_edit_table" class="treatments table table-striped table-bordered" cellspacing="0" width="100%">
                        <thead>
                        <tr>
                            <th>Condition</th>
                            <th>Medicine</th>
                            <th>Quantity</th>
                        </tr>
                        </thead>

                    </table>
                </div>
                <div class="col-md-1">
                    <table class="diary-menu">
                        <tr><td><div><a id="add-tr-edit-btn" href="#"><i class="fa fa-plus fa-4x"></i></a></div></td></tr>
                        <tr><td><div><a id="select-tr-edit-btn" href="#"><i class="fa fa-check fa-4x"></i></a></div></td></tr>
                    </table>
                </div>
            </div>
            <h3>Current Treatment</h3>
            <div class="row">
                <div class="col-md-11">
                    <table id="cur_treat_edit_table" class="current_treatment table table-striped table-bordered" cellspacing="0" width="100%">
                        <thead>
                        <tr>
                            <th>Condition</th>
                            <th>Medicine</th>
                            <th>Quantity</th>
                        </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
                <div class="col-md-1">
                    <table class="diary-menu">
                        <tr><td><div><a id="delete-ctr-edit-btn" href="#"><i class="fa fa-times fa-4x"></i></a></div></td></tr>
                    </table>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <div class="form-group">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                <button id="submit_edited_btn" name="submit_edited_btn" type="submit" class="btn btn-primary" >Update</button>
            </div>
        </div>
    </fieldset>
</form>