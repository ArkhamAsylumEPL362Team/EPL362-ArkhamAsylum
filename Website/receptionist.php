<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Arkham Asylum Receptionist Page</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>       
        <script src="_/libs/bootstrap/js/bootstrap.min.js"></script>
        <script src="_/libs/bootstrap/sweetalert/lib/sweet-alert.min.js"></script>
        <script src="_/libs/bootstrap/datepicker/js/bootstrap-datepicker.js"></script>
        <script type="text/javascript" charset="utf8" src="_/libs/smooth-scroll/src/jquery.smooth-scroll.js"></script>
        <script src="_/js/jquery.slimscroll.min.js"></script>
        <script src="_/js/logger.js"></script>
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
            <?php include 'components/navbar.php'?>
            
            <div id="home-page" class="receptionist-menu container">
                <div class="receptionist-review row">
                    <div class="col-lg-3"></div>
                    <div class="col-lg-3">
                        <img class="img-circle" src="_/img/diary.png" alt="Generic placeholder image" width="140" height="140">
                        <h2>Appointment Diary</h2>
                        <p>With this option you can add,delete or update a current appointment. You can also generate a prescription that has not changed.</p>
                        <p><a class="btn btn-default" href="#diary" role="button">Go to diary &raquo;</a></p>
                    </div>
                    <div class="col-lg-3">
                        <img class="img-circle" src="_/img/patient.png" alt="Generic placeholder image" width="140" height="140">
                        <h2>Patient Records</h2>
                        <p>You can press here if you want to view the patient's record for information. Let it be noted, you cannot view or alter the medical record from here, but only view.</p>
                        <p><a class="btn btn-default" href="#patient" role="button">Go to patients &raquo;</a></p>
                    </div>
                    <div class="col-lg-3"></div>
                </div>
            </div>
            
            <div id="diary" class="diary container">
                <hr/>
                <h1>Appointment Diary</h1>
                <div class="row">
                    <div class="col-md-11">
                        <?php include 'components/datatables/datatable-appointments.php' ?>
                    </div>
                    <div class="col-md-1">
                        <table class="diary-menu">
                            <tr><td><div><a id="addbtn" href="#"><i class="fa fa-plus fa-4x"></i></a></div></td></tr>
                            <tr><td><div><a id="editbtn" href="#"><i class="fa fa-pencil fa-4x"></i></a></div></td></tr>
                            <tr><td><div><a id="deletebtn" href="#"><i class="fa fa-times fa-4x"></i></a></div></td></tr>
                            <tr><td><div><a id="generatebtn" href="#"><i class="fa fa-wrench fa-4x"></i></a></div></td></tr>
                            <tr><td><div><a id="searchbtn" href="#"><i class="fa fa-search fa-4x"></i></a></div></td></tr>
                        </table> 
                    </div>
                </div>
            </div>
            
            <div id="patient" class="patient container">
                <hr/>
                <h1>Patients</h1>
                <div class="row">
                    <div class="col-md-11">
                        <?php include 'components/datatables/datatable-patients.php' ?>
                    </div>
                    <div class="col-md-1">
                        <table class="diary-menu">
                            <tr><td><div><a id="add-ptn-btn" href="#"><i class="fa fa-plus fa-4x"></i></a></div></td></tr>
                            <tr><td><div><a id="edit-ptn-btn" href="#"><i class="fa fa-pencil fa-4x"></i></a></div></td></tr>
                            <tr><td><div><a id="delete-ptn-btn" href="#"><i class="fa fa-times fa-4x"></i></a></div></td></tr>
                        </table> 
                    </div>
                </div>
            </div>
            
        </div>
        
        <script type="text/javascript" src="_/js/arkham.receptionist.js"></script>
        <script type="text/javascript">
			
            $('.receptionist-menu a').click(function(event) {
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