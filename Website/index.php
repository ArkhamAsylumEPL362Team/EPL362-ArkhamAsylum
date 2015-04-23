<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Arkham Asylum Home Page</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>       
        <script src="_/libs/bootstrap/js/bootstrap.min.js"></script>
        <script src="_/libs/bootstrap/sweetalert/lib/sweet-alert.min.js"></script>
        <script src="_/libs/bootstrap/datepicker/js/bootstrap-datepicker.js"></script>
        <script type="text/javascript" charset="utf8" src="_/libs/smooth-scroll/src/jquery.smooth-scroll.js"></script>
        <script src="_/js/jquery.slimscroll.min.js"></script>
        <script type="text/javascript" charset="utf8" src="_/libs/datatables/media/js/jquery.dataTables.min.js"></script>
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
             <div id="index-page" class="receptionist-menu container">
                <div class="receptionist-review row">
                    <div class="col-lg-3">
                        <img class="img-circle" src="_/img/receptionist.png" alt="Generic placeholder image" width="140" height="140">
                        <h2>Receptionist</h2>
                        <p>Enter the receptionist mode for Arkham Asylum System. Manage the appointment and patient entries in the system.</p>
                        <p><a class="btn btn-default" href="receptionist.php" role="button">Enter this mode &raquo;</a></p>
                    </div>
                    <div class="col-lg-3">
                        <img class="img-circle" src="_/img/doctor.png" alt="Generic placeholder image" width="140" height="140">
                        <h2>Clinical Staff</h2>
                        <p>Are you a doctor or a nurse? Enter here to have access to all the necessary functionalities.</p>
                        <p><a class="btn btn-default" href="clinical_staff.php" role="button">Enter this mode &raquo;</a></p>
                    </div>
                    <div class="col-lg-3">
                        <img class="img-circle" src="_/img/medical_record_staff.png" alt="Generic placeholder image" width="140" height="140">
                        <h2>Medical Record Staff</h2>
                        <p>Enter here if you are a medical record staff. You can handle all the patient's requests for information change with ease.</p>
                        <p><a class="btn btn-default" id="medical_record_mode" href="#" role="button">Enter this mode &raquo;</a></p>
                    </div>
                    <div class="col-lg-3">
                        <img class="img-circle" src="_/img/patient.png" alt="Generic placeholder image" width="140" height="140">
                        <h2>Patient</h2>
                        <p>Are you a patient? Is there something wrong with your information in the system? Request a change by entering here.</p>
                        <p><a id="2requestSection" class="btn btn-default" href="#request_form_section">Proceed for a request &raquo;</a></p>
                    </div>
                </div>
            </div>
            <div id="request_form_section" class="change_request container">
                <hr/>
                <h1>Request for a change</h1>
                <form id="request4change" method="post" action="" class="form_section form-horizontal">
                    <fieldset>
                        <div class="form-group">
                            <label class="col-md-4 control-label" for="request_patient_id_input">Patient ID</label>  
                            <div class="col-md-4">
                                <input id="request_patient_id_input" name="request_patient_id_input" placeholder="Your ID goes here..." class="form-control input-md" required="" type="text">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-4 control-label" for="request_content_input">Request</label>
                            <div class="col-md-4">                     
                                <textarea class="form-control" id="request_content_input" name="request_content_input"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-4 control-label" for="request_reset_btn"></label>
                            <div class="col-md-8">
                                <button type="reset" id="request_reset_btn" name="request_reset_btn" class="btn btn-default">Reset</button>
                                <button type="submit" id="request_submit_btn" name="request_submit_btn" class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
        <script type="text/javascript">
            $(document).ready(function(){
                $('.form-holder').load("components/login_form.php");
                $('#modal-title').text('Log in');
            });
            
            $('a[role="button"]').on('click',function(e){
                $('a[role="button"].mode_selected').removeClass("mode_selected");
                $(this).addClass("mode_selected");
                $('#my-modal').modal('toggle');
                e.preventDefault();
            });
            
            $('#2requestSection').click(function(event) {
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
            
            /*
                Here goes the code for REST call to request a change on the 
                patient's information.
            */
            $('#request4change').submit(function(e){
                alert('fd');
            });
        </script>
    </body>
</html>