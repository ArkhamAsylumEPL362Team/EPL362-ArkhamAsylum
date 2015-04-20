<form id="add-treatment-form" name='add-treatment-form' action="" method="post" enctype="multipart/form-data" class="form-horizontal">
    <fieldset>
        <div class="modal-body">
            <div class="form-group">
                <label class="col-md-2 control-label" for="psbl_tr_input">Condition</label>
                <div class="col-md-10">                     
                    <textarea width class="form-control" id="psbl_tr_input" name="psbl_tr_input"></textarea>
                </div>
            </div>
            <h3>Choose medicines</h3>
            <div class="row">
                <div class="col-md-10">
                    <table id="treat_meds" class="choose_medicine table table-striped table-bordered" cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Side-Effects</th>
                            </tr>
                        </thead>
                    </table>
                </div>  
                <div class="col-md-2">
                    <table class="diary-menu">
                        <tr><td><div><a id="add-meds-btn" href="#"><i class="fa fa-check fa-4x"></i></a></div></td></tr>
                    </table> 
                </div>
            </div>
            
            <h3>You chose:</h3>
            <div class="row">
                <div class="col-md-10">
                    <table id="example7" class="choices_medicine table table-striped table-bordered" cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Side-Effects</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>  
                <div class="col-md-2">
                    <table class="diary-menu">
                        <tr><td><div><a id="delete-meds-btn" href="#"><i class="fa fa-times fa-4x"></i></a></div></td></tr>
                    </table> 
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <div class="form-group">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="button" id="add_btn" class="btn btn-primary" >Add</button>
            </div>
        </div>
    </fieldset>
</form>