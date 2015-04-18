$.extend( $.fn.dataTable.defaults, {
    "searching": true,
    "ordering": true,
    "searching": false,
    "bPaginate": true,
    "bInfo" : false,
    bFilter: false,
    "scrollX": false
} );

var table8=$('#example8').dataTable();

$('#example8 tbody').on('click','tr',function(){
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    }
    else {
            table8.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
});

$('#edit-rec-btn').on('click',function(e){
    if($('#example8 tbody tr').hasClass('selected')){                    
        $('#modal-title').text('Edit Patient');
        $('.form-holder').load("components/edit_patient_form.php",function(){});
        editPatientRecord($('#example8 tbody tr.selected td').eq(3).text());
        if(isDeceased($('#example8 tbody tr.selected td').eq(3).text())){
            swal("This record is read-only");
        }else{
            $('#my-modal').modal('toggle');  
        }
    }else{
        swal("You have to select a patient to edit.");
    }
    e.preventDefault();
});

function deleteRequest(){
    if($('#example8 tbody tr').hasClass('selected')){  
        swal({
            title: "Are you sure?",
            text: "You are trying to delete a patient's request.",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-warning",
            confirmButtonText: "Delete",
            cancelButtonText: "Cancel",
            closeOnConfirm: true,
            closeOnCancel: true
        },
        function(isConfirm) {
            if (isConfirm) {
                var data =   {"requestNumber":$('#example8 tr.selected td').eq(0).text(),"firstname":"0","lastname":"0","patientID":"0","date":"0"};
                var DELETE_REQUEST="http://localhost:8080/ArkhamAsylumSystem/rest/medical_record_service/delete_request/"
                data = JSON.stringify(data); 
		
                $.post(DELETE_REQUEST,data,function(data){
                    $('#example8 tbody tr.selected').remove();
                });
            }
            }
        );
    }else{
         swal("You have to select a patient's request to delete.");
    }
}

function deletePersonel(){
    if($('#example9 tbody tr').hasClass('selected')){  
        swal({
            title: "Are you sure?",
            text: "You are trying to delete a personel's file.",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-warning",
            confirmButtonText: "Delete",
            cancelButtonText: "Cancel",
            closeOnConfirm: true,
            closeOnCancel: true
        },
        function(isConfirm) {
            if (isConfirm) {
                                var data =   {"personelID":$('#example9 tr.selected td').eq(0).text(),
                    "firstname":"0",
                    "lastname":"0",
                    "email":"0",
                    "phonenumber":"0",
                    "username":"0",
                    "password":"0",
                    "type":"0"
                   };
                var DELETE_PERSONEL="http://localhost:8080/ArkhamAsylumSystem/rest/medical_record_service/delete_personel/"
                data = JSON.stringify(data); 
		
                $.post(DELETE_PERSONEL,data,function(data){
                    $('#example9 tbody tr.selected').remove();
                });
            }
        });
    }else{
         swal("You have to select a personel's file to delete.");
    }
}

$('#delete-rec-btn').on('click',function(e){
    deleteRequest();
    e.preventDefault();
});

$('#view-rec-btn').on('click',function(e){
    if($('#example8 tbody tr').hasClass('selected')){                    
        $('#modal-title').text('View patient\'s record');
        $('.form-holder').load("components/view_patient_form.php",function(){});
        viewPatientRecord($('#example8 tbody tr.selected td').eq(3).text());
        $('#my-modal').modal('toggle');  
    }else{
        swal("You have to select a request to view.");
    }
    e.preventDefault();
});

$('#view-per-btn').on('click',function(e){
    if($('#example9 tbody tr').hasClass('selected')){                    
        $('#modal-title').text('View personel information');
        $('.form-holder').load("components/view_personel_form.php",function(){
            $('#view_personelID_input').val($('tr.selected td').eq(0).text());
            $('#view_personel_firstname_input').val($('tr.selected td').eq(1).text());
            $('#view_personel_lastname_input').val($('tr.selected td').eq(2).text());
            $('#view_personel_email_input').val($('tr.selected td').eq(3).text());
            $('#view_personel_phonenumber_input').val($('tr.selected td').eq(4).text());

            var type=$('tr.selected td').eq(5).text();

            if(type=="MEDICAL_RECORD_STAFF"){
                $('#personel_type-0').attr('checked',true);
            }else if(type=="RECEPTIONIST"){
                $('#personel_type-1').attr('checked',true);
            }else{
                $('#personel_type-2').attr('checked',true);
            }
        });
                
        $('#my-modal').modal('toggle');  
    }else{
        swal("You have to select a personel's file to view.");
    }
    e.preventDefault();
});

$('#edit-per-btn').on('click',function(e){
    if($('#example9 tbody tr').hasClass('selected')){                    
        $('#modal-title').text('View personel information');
        $('.form-holder').load("components/edit_personel_form.php",function(){
            $('#edit_personelID_input').val($('tr.selected td').eq(0).text());
            $('#edit_personel_firstname_input').val($('tr.selected td').eq(1).text());
            $('#edit_personel_lastname_input').val($('tr.selected td').eq(2).text());
            $('#edit_personel_email_input').val($('tr.selected td').eq(3).text());
            $('#edit_personel_phonenumber_input').val($('tr.selected td').eq(4).text());

            var type=$('tr.selected td').eq(5).text();

            if(type=="MEDICAL_RECORD_STAFF"){
                $('#personel_type-0').attr('checked',true);
            }else if(type=="RECEPTIONIST"){
                $('#personel_type-1').attr('checked',true);
            }else{
                $('#personel_type-2').attr('checked',true);
            }
        });
                
        $('#my-modal').modal('toggle');  
    }else{
        swal("You have to select a personel's file to edit.");
    }
    e.preventDefault();
});

$('#add-per-btn').on('click',function(e){                 
    $('#modal-title').text('Add personel');
    $('.form-holder').load("components/add_personel_form.php",function(){});
    $('#my-modal').modal('toggle');  
    e.preventDefault();
});

$('#report-death-form').submit(function(e){
    swal({
        title: "My condolences?",
        text: "You are trying to report a patient's death.",
        type: "info",
        showCancelButton: true,
        confirmButtonClass: "btn-info",
        confirmButtonText: "Report",
        cancelButtonText: "Cancel",
        closeOnConfirm: true,
        closeOnCancel: true
    },
    function(isConfirm) {
        if (isConfirm) {
            var DECEASED_PATIENT="http://localhost:8080/ArkhamAsylumSystem/rest/medical_record_service/report_deceased/";
            $.post(DECEASED_PATIENT,"{\"patientID\":\""+$('#death_id_input').val()+"\"}",function(data){
                console.log(data);
            });
            e.preventDefault();
        }
    });
    e.preventDefault();
});

var table9 = $('#example9').DataTable();

$('#example9 tbody').on('click','tr',function(){
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    }
    else {
            table9.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
});

$('#delete-per-btn').on('click',function(e){
    deletePersonel();
    e.preventDefault();
});

function viewPatientRecord(id){
    var data = {"requestNumber":"0","firstname":"0","lastname":"0","patientID":id,"date":"0"};
    data=JSON.stringify(data);
    
    $.ajax({
        type: "POST",
        url: "http://localhost:8080/ArkhamAsylumSystem/rest/medical_record_service/view_patient_record/",
        async:"true",
        cache: "true",
        data: data,
        success: function(patientRecord) {
            patientRecord=JSON.parse(patientRecord);
            patientRecord=patientRecord.results_array[0];
            
            $("#view_patientID_input").val(patientRecord.id);
            $("#view_patient_firstname_input").val(patientRecord.firstname);
            $("#view_email_input").val(patientRecord.relative_email);
            $("#view_patient_lastname_input").val(patientRecord.lastname);		
            $("#view_patient_address_input").val(patientRecord.address);	
            $("#view_patient_phonenumber_input").val(patientRecord.phonenumber);	
            $("#view_patient_birthdate_input").val(patientRecord.birthday);
            if(patientRecord.gender=="F")
                $("#patient_gender-1").attr("checked","true");
            else
                $("#patient_gender-0").attr("checked","true");
        }
    });
}

function isDeceased(patientID){
    var IS_DECEASED="http://localhost:8080/ArkhamAsylumSystem/rest/medical_record_service/is_deceased/";
    var result;
    $.ajax({
        type: "POST",
        url: IS_DECEASED,
        async:"false",
        cache: "false",
        data: "{\"patientID\":\""+patientID+"\"}",
        success: function(data) {
            result=$.parseJSON(data);
        }
    });
    
    console.log(result);
    return false;
}

function editPatientRecord(id){
    var data = {"requestNumber":"0","firstname":"0","lastname":"0","patientID":id,"date":"0"};
    data=JSON.stringify(data);

    $.ajax({
        type: "POST",
        url: "http://localhost:8080/ArkhamAsylumSystem/rest/medical_record_service/view_patient_record/",
        async:"true",
        cache: "true",
        data: data,
        success: function(patientRecord) {
            patientRecord=JSON.parse(patientRecord);
            patientRecord=patientRecord.results_array[0];

            $("#edit_patientID_input").val(patientRecord.id);
            $("#edit_patient_firstname_input").val(patientRecord.firstname);
            $("#edit_email_input").val(patientRecord.relative_email);
            $("#edit_patient_lastname_input").val(patientRecord.lastname);		
            $("#edit_patient_address_input").val(patientRecord.address);	
            $("#edit_patient_phonenumber_input").val(patientRecord.phonenumber);	
            $("#edit_patient_birthdate_input").val(patientRecord.birthday);
            if(patientRecord.gender=="F")
                $("#patient_gender-1").attr("checked","true");
            else
                $("#patient_gender-0").attr("checked","true");
        }
    });
}


