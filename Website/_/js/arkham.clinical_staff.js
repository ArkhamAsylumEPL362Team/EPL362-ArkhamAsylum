$.extend( $.fn.dataTable.defaults, {
    "ordering": true,
    "searching": false,
    "bPaginate": false,
    "bInfo" : false,
    "scrollY":"50vh",
    bFilter: false,
    "scrollX": false
} );

var table3 = $('#example3').DataTable({
    "searching": true
});

$('#example3 tbody').on('click','tr',function(){
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    }
    else {
            table3.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
});

$('#edit-rcrd-btn').on('click',function(e){
    if($('#example3 tbody tr').hasClass('selected')){                    
        $('#modal-title').text('Edit record');
        $('.form-holder').load("components/edit_record_form.php",function(){});
        $('#my-modal').modal('toggle');  
    }else{
        swal("You have to select a record to edit.");
    }
    e.preventDefault();
});

$('#view-rcrd-btn').on('click',function(e){
    if($('#example3 tbody tr').hasClass('selected')){                    
        $('#modal-title').text('Edit record');
        $('.form-holder').load("components/view_record_form.php",function(){});
        $('#my-modal').modal('toggle');  
    }else{
        swal("You have to select a record to view.");
    }
    e.preventDefault();
});

$('#download-rcrd-btn').on('click',function(e){
    if($('#example3 tbody tr').hasClass('selected')){                    
        alert('Downloading...');
    }else{
        swal("You have to select a record to download.");
    }
    e.preventDefault();
});

var table2 = $('#example2').DataTable({
    "searching": true
});

$('#example2 tbody').on('click','tr',function(){
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    }
    else {
            table2.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
});

function loadForm(operation){
    $('.form-holder').load("components/"+operation+"_form.php");
    $('#my-modal').modal('toggle');  
}
