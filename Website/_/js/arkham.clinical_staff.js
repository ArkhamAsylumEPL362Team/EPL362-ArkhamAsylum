$.extend( $.fn.dataTable.defaults, {
    "ordering": true,
    "searching": false,
    "bPaginate": true,
    "bInfo" : false,
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
        $('#modal-title').text('View record');
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

var table4 = $('#example4').DataTable({
    "searching": true,
    "pageLength": 5
});

$('#example4 tbody').on('click','tr',function(){
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    }
    else {
            table4.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
});

$('#add-tr-btn').on('click',function(e){              
    $('#modal-title').text('Add treatment');
    $('.form-holder').load("components/add_treatment_form.php",function(){
        var table6= $('#example6').DataTable({
            "searching": true,
            "bPaginate": true
        });

        $('#example6 tbody').on('click','tr',function(){
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected');
            }
            else {
                    table6.$('tr.selected').removeClass('selected');
                    $(this).addClass('selected');
                }
        });

        var table7= $('#example7').DataTable({
            "searching": false,
            "bPaginate": false
        });

        $('#example7 tbody').on('click','tr',function(){
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected');
            }
            else {
                    table7.$('tr.selected').removeClass('selected');
                    $(this).addClass('selected');
                }
        });
        
        $('#add-meds-btn').on('click',function(e){
            if($('#example6 tbody tr').hasClass('selected')){
                table7.row.add([
                    $('tr.selected td').eq(0).text(),
                    $('tr.selected td').eq(1).text(),
                    $('tr.selected td').eq(2).text(),
                    '<input  value="0" type="text">'
                    
                ]).draw();
            }else{
                swal("You have to select a medicine to use.");
            }
            e.preventDefault();
        });

        $('#delete-meds-btn').on('click',function(e){
            if($('#example7 tbody tr').hasClass('selected')){
               table7.row('.selected').remove().draw(false);
            }else{
                swal("You have to select a medicine to delete.");
            }
            e.preventDefault();
        });

        $('#add-treatment-form').submit(function(e){
            if(!$('#example7 tbody tr.odd td').hasClass('dataTables_empty')){
                $.each($('#example7 tbody tr'),function(key,value){
                    table4.row.add([
                        'New number',
                        $('#psbl_tr_input').val(),
                        $('td',value).eq(0).text(),
                        $('td input',value).val()
                    ]).draw();

                    table5.row.add([
                        'New number',
                        $('#psbl_tr_input').val(),
                        $('td',value).eq(0).text(),
                        $('td input',value).val()
                    ]).draw();   
                });
                $('#my-modal').modal('toggle'); 
            }else{
                swal("You have to select medicines for treatment.");
            }
            e.preventDefault(); 
        });
    });
    $('#my-modal .modal-dialog').addClass('modal-lg');
    $('#my-modal').modal('toggle');  
    e.preventDefault();
});

var table5= $('#example5').DataTable({
    "searching": false,
    "bPaginate": false
});

$('#example5 tbody').on('click','tr',function(){
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    }
    else {
            table5.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
});

$('#select-tr-btn').on('click',function(e){              
    if($('#example4 tbody tr').hasClass('selected')){
        table5.row.add([
            $('tr.selected td').eq(0).text(),
            $('tr.selected td').eq(1).text(),
            $('tr.selected td').eq(2).text(),
            $('tr.selected td').eq(3).text()
        ]).draw();
    }else{
        swal("You have to select a treatment to use.");
    }
    e.preventDefault();
});

$('#delete-ctr-btn').on('click',function(e){
    if($('#example5 tbody tr').hasClass('selected')){
       table5.row('.selected').remove().draw(false);
    }else{
        swal("You have to select a treatment to delete.");
    }
    e.preventDefault();
});
