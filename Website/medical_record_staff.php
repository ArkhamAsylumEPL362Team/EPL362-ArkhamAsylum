<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Arkham Asylum Medical Record Staff Page</title>
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
                    <div class="col-lg-1"></div>
                    <div class="col-lg-3">
                        <img class="img-circle" src="_/img/medical_record_staff.png" alt="Generic placeholder image" width="140" height="140">
                        <h2>Manage Personel</h2>
                        <p>Via this option you can add/edit and generaly manage personel record based on their field of work.</p>
                        <p><a class="btn btn-default" href="#personel" role="button">Manage personel &raquo;</a></p>
                    </div>
                    <div class="col-lg-1"></div>
                    <div class="col-lg-3">
                        <img class="img-circle" src="_/img/request.png" alt="Generic placeholder image" width="140" height="140">
                        <h2>Handle change request</h2>
                        <p>Via this option you can check the pending patient's request for changes on their personal information. You can access their accound information and, based to their email, you can change that field.</p>
                        <p><a class="btn btn-default" href="#requests" role="button">Show requests &raquo;</a></p>
                    </div>
                    <div class="col-lg-1"></div>
                    <div class="col-lg-3">
                        <img class="img-circle" src="_/img/death.png" alt="Generic placeholder image" width="140" height="140">
                        <h2>Report a deceased patient</h2>
                        <p>You can press here if there has been an unfortunate death of a patient. His/Her record will be read-only from now on.</p>
                        <p><a class="btn btn-default" href="#death" role="button">Proceed here &raquo;</a></p>
                    </div>
                </div>
            </div>
            
            <div id="requests" class="requests container">
                <hr/>
                <h1>Request for changes</h1>
                <div class="row">
                    <div class="col-md-11">
                        <?php include 'components/datatables/datatable-requests.php' ?>
                    </div>
                    <div class="col-md-1">
                        <table class="diary-menu">
                            <tr><td><div><a id="view-rec-btn" href="#"><i class="fa fa-eye fa-4x"></i></a></div></td></tr>
                            <tr><td><div><a id="edit-rec-btn" href="#"><i class="fa fa-pencil fa-4x"></i></a></div></td></tr>
                            <tr><td><div><a id="delete-rec-btn" href="#"><i class="fa fa-times fa-4x"></i></a></div></td></tr>
                        </table> 
                    </div>
                </div>
            </div>
            
            <div id="death" class="death container">
                <hr/>
                <h1>Report a death</h1>
                <form id="report-death-form" name='report-death-form' action="" method="post" enctype="multipart/form-data" class="form-horizontal">
                    <fieldset>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="add_patient_lastname_input">Patient's ID</label>  
                          <div class="col-md-6">
                            <input id="death_id_input" name="death_id_input" placeholder="Patient's ID goes here..." class="form-control input-md" required="" type="text">
                          </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-4"></label>
                            <div class="col-md-6 pull-right">
                                <button type="reset" class="btn btn-default">Reset</button>
                                <button type="submit" class="btn btn-primary">Report</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
            
            <div id="personel" class="personel container">
                <hr/>
                <h1>Manage Personel</h1>
                <div class="row">
                        <div class="col-md-11">
                            <?php include 'components/datatables/datatable-personel.php' ?>
                        </div>
                        <div class="col-md-1">
                            <table class="diary-menu">
                                <tr><td><div><a id="add-per-btn" href="#"><i class="fa fa-plus fa-4x"></i></a></div></td></tr>
                                <tr><td><div><a id="view-per-btn" href="#"><i class="fa fa-eye fa-4x"></i></a></div></td></tr>
                                <tr><td><div><a id="edit-per-btn" href="#"><i class="fa fa-pencil fa-4x"></i></a></div></td></tr>
                                <tr><td><div><a id="delete-per-btn" href="#"><i class="fa fa-times fa-4x"></i></a></div></td></tr>
                            </table> 
                        </div>
                    </div>
                </div>
        </div>
        
        <script type="text/javascript" src="_/js/arkham.medical_record_staff.js"></script>
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