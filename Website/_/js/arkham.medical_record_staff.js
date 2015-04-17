$.extend( $.fn.dataTable.defaults, {
    "searching": true,
    "ordering": true,
    "searching": false,
    "bPaginate": true,
    "bInfo" : false,
    bFilter: false,
    "scrollX": false
} );

var table8; 
$.ajax({
    type: "GET",
    url: "http://localhost:8080/ArkhamAsylumSystem/rest/medical_record_service/view_patient_requests/",
    async:"false",
    cache: "true",
    success: function(result) {
        requests = result;
        console.log(requests);
        table8= $('#example8').dataTable({
            "aaData": JSON.parse(jsonappointment),
            "aoColumns": [
                { "mDataProp": "id" },
                { "mDataProp": "firstname" },
                { "mDataProp": "lastname" },
                { "mDataProp": "id" },
                { "mDataProp": "date" }
            ],
            "destroy":true
        });
    }
});

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
        $('#my-modal').modal('toggle');  
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
                table8.row('.selected').remove().draw(false);
            }
        });
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
                table9.row('.selected').remove().draw(false);
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
            alert("RIP <patient's name.>");
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