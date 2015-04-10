$.extend( $.fn.dataTable.defaults, {
    "searching": true,
    "ordering": true,
    "searching": false,
    "bPaginate": true,
    "bInfo" : false,
    bFilter: false,
    "scrollX": false
} );

var table8 = $('#example8').DataTable();

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