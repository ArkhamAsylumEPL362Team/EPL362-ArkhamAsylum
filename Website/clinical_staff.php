<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Arkham Asylum Clinical Staff Page</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>       
        <script src="_/libs/bootstrap/js/bootstrap.min.js"></script>
        <script src="_/libs/bootstrap/sweetalert/lib/sweet-alert.min.js"></script>
        <script src="_/libs/bootstrap/datepicker/js/bootstrap-datepicker.js"></script>
        <script src="_/js/jquery.slimscroll.min.js"></script>
        <script type="text/javascript" charset="utf8" src="_/libs/datatables/media/js/jquery.dataTables.min.js"></script>
        <script type="text/javascript" charset="utf8" src="_/libs/smooth-scroll/src/jquery.smooth-scroll.js"></script>
        <link rel="icon" type="image/ico" href="_/img/favicon.ico">
        <link href="_/libs/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link href="_/libs/bootstrap/sweetalert/lib/sweet-alert.css" rel="stylesheet">
        <link href="_/libs/bootstrap/datepicker/css/datepicker3.css" rel="stylesheet">
        <link href="_/libs/font-awesome/css/font-awesome.min.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.6/css/jquery.dataTables.css">
        <link href="_/css/reset.css" rel="stylesheet">
    </head>

    <body>  
        <?php include'components/modal.php' ?>
        
        <a id="scroller-btn" href="#wrapper"><span><i class="fa fa-arrow-circle-up fa-4x"></i></span></a>
        
        <div id="wrapper">
            <?php include 'components/navbar.php'?>
            
            <div id="home-page" class="medical-staff-menu container">
                <div class="medical-staff-review row">
                    <div class="col-lg-3">
                        <img class="img-circle" src="_/img/diagnose.png" alt="Generic placeholder image" width="140" height="140">
                        <h2>Diagnose</h2>
                        <p>Via diagnose you can start a consultation on a patient, record your diagnosis and prescribe a treatment if needed.</p>
                        <p><a class="btn btn-default" href="#diagnose" role="button">Start diagnosis &raquo;</a></p>
                    </div>
                    <div class="col-lg-3">
                        <img class="img-circle" src="_/img/update.png" alt="Generic placeholder image" width="140" height="140">
                        <h2>Update records</h2>
                        <p>With this option you can update a patient's record if necessary. This can be used during a consultation or afterwards.</p>
                        <p><a class="btn btn-default" href="#view_update" role="button">Update a record &raquo;</a></p>
                    </div>
                    <div class="col-lg-3">
                        <img class="img-circle" src="_/img/view.png" alt="Generic placeholder image" width="140" height="140">
                        <h2>View records</h2>
                        <p>You can press here if you want to view the patient's medical record for information. Let it be noted, you cannot alter the medical record from here.</p>
                        <p><a class="btn btn-default" href="#view_update" role="button">View record &raquo;</a></p>
                    </div>
                    <div class="col-lg-3">
                        <img class="img-circle" src="_/img/meds.png" alt="Generic placeholder image" width="140" height="140">
                        <h2>Check medicines</h2>
                        <p>You can view information regarding a medicine and also some of its side-effects.</p>
                        <p><a class="btn btn-default" href="#medicine" role="button">Check medicine &raquo;</a></p>
                    </div>
                </div>
            </div>
            
            <div id="diagnose" class="diagnose container">
                <hr/>
                <h1>Diagnose</h1>
                <div class="diagnose-form">
                    <form class="form-horizontal">
                        <fieldset>
                            <div class="row">
                                <div class="leftside col-md-6">
                                    <div class="form-group">
                                        <label class="col-md-4 control-label" for="diagnose_patient_id_input">Patient ID</label>  
                                        <div class="col-md-6">
                                            <input id="diagnose_patient_id_input" name="diagnose_patient_id_input" placeholder="Patient's ID goes here..." class="form-control input-md" required="" type="text">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-4 control-label" for="diagnose_incedent_status">Incedent's status</label>
                                        <div class="col-md-4">
                                            <div class="radio">
                                                <label for="diagnose_incedent_status-0">
                                                    <input name="diagnose_incedent_status" id="diagnose_incedent_status-0" value="ACCIDENTAL" checked="checked" type="radio">
                                                    Accidental
                                                </label>
                                            </div>
                                            <div class="radio">
                                                <label for="diagnose_incedent_status-1">
                                                    <input name="diagnose_incedent_status" id="diagnose_incedent_status-1" value="DELIBERATED" type="radio">
                                                    Deliberated
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-4 control-label" for="diagnose_incedent_input">Incedent Details</label>
                                        <div class="col-md-6">                     
                                            <textarea placeholder="Incident's details go here..." class="form-control" id="diagnose_incedent_input" name="diagnose_incedent_input"></textarea>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-pull-2 col-md-6 control-label" for="diagnose_patient_dangerousness_input">Patient's Dangerousness Level:</label>
                                        <div class="col-md-pull-2 col-md-6">
                                            <select class="form-control" id="diagnose_patient_dangerousness_input">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-4 control-label" for="diagnose_patient_comment_input">Comments</label>
                                        <div class="col-md-6">                     
                                            <textarea placeholder="Comments go here..." class="form-control" id="diagnose_patient_comment_input" name="diagnose_patient_comment_input"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <h3>Possible Treatments</h3> 
                                    <div class="row">
                                        <div class="col-md-11"> 
                                            <?php include 'components/datatables/datatables-treatments.php'; ?>
                                        </div>
                                        <div class="col-md-1">
                                            <table class="diary-menu">
                                                <tr><td><div><a id="add-tr-btn" href="#"><i class="fa fa-plus fa-4x"></i></a></div></td></tr>
                                                <tr><td><div><a id="select-tr-btn" href="#"><i class="fa fa-check fa-4x"></i></a></div></td></tr>
                                            </table> 
                                        </div>
                                    </div>
                                    <h3>Current Treatment</h3>
                                    <div class="row">
                                        <div class="col-md-11">
                                            <table id="cur_treat_table" class="current_treatment table table-striped table-bordered" cellspacing="0" width="100%">
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
                                                <tr><td><div><a id="delete-ctr-btn" href="#"><i class="fa fa-times fa-4x"></i></a></div></td></tr>
                                            </table> 
                                        </div>
                                    </div>
                                    <div class="submit-treatment form-group">
                                        <label class="col-md-8 control-label" for="reset_btn"></label>
                                        <div class="col-md-4">
                                            <button id="reset_btn" type="reset" name="reset_btn" class="btn btn-default">Reset</button>
                                            <button id="submit_btn" name="submit_btn" class="btn btn-primary">Complete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
            <div id="view_update" class="view_update container">
                <hr/>
                <h1>View/Update records</h1>
                <div class="row">
                    <div class="col-md-11">
                       <?php include 'components/datatables/datatables-medical-records.php' ?>
                    </div>
                    <div class="col-md-1">
                        <table class="diary-menu">
                            <tr><td><div><a id="edit-rcrd-btn" href="#"><i class="fa fa-pencil fa-4x"></i></a></div></td></tr>
                            <tr><td><div><a id="view-rcrd-btn" href="#"><i class="fa fa-eye fa-4x"></i></a></div></td></tr>
                            <tr><td><div><a id="download-rcrd-btn" href="#"><i class="fa fa-cloud-download fa-4x"></i></a></div></td></tr>
                        </table> 
                    </div>
                </div>
            </div>
            <div id="medicine" class="medicine container">
                <hr/>
                <h1>Check medicines</h1>
                <?php include 'components/datatables/datatable-medicines.php' ?>
            </div>
            
        </div>
        
        <script type="application/javascript" src="_/js/arkham.clinical_staff.js"></script>
        <script>
            $('.medical-staff-menu a').click(function(event) {
                event.preventDefault();
                var link = this;
                $.smoothScroll({
                    scrollTarget: link.hash
                });
            });
            
            $('#scroller-btn').click(function(event) {
                event.preventDefault();
                var link = this;
                $.smoothScroll({
                    scrollTarget: link.hash
                });
            });
        </script>
    </body>
</html>