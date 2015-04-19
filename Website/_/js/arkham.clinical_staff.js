$.extend( $.fn.dataTable.defaults, {
    "ordering": true,
    "searching": false,
    "bPaginate": true,
    "bInfo" : false,
    bFilter: false,
    "scrollX": false
} );

var table3 = $('#med_records').DataTable({
    searching: true,
    ordering:false
});

$('#med_records tbody').on('click','tr',function(){
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    }
    else {
            $('#med_records tbody tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
});

$('#edit-rcrd-btn').on('click',function(e){
    if($('#med_records tbody tr').hasClass('selected')){
        $('#modal-title').text('Edit record');
        $('.form-holder').load("components/edit_record_form.php",function(){});
        $('#my-modal').modal('toggle');  
    }else{
        swal("You have to select a record to edit.");
    }
    e.preventDefault();
});

$('#view-rcrd-btn').on('click',function(e){
    if($('#med_records tbody tr').hasClass('selected')){
        $('#modal-title').text('View record');
        $('.form-holder').load("components/view_record_form.php",function(){});
        $('#my-modal').modal('toggle');  
    }else{
        swal("You have to select a record to view.");
    }
    e.preventDefault();
});

$('#download-rcrd-btn').on('click',function(e){
    if($('#med_records tbody tr').hasClass('selected')){
        alert('Downloading...');
    }else{
        swal("You have to select a record to download.");
    }
    e.preventDefault();
});

var table2 = $('#meds').DataTable({
    "searching": true
});

$('#meds tbody').on('click','tr',function(){
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

var table4 = $('#poss_treat_table').DataTable({
    "searching": true,
    "pageLength": 5
});

$('#poss_treat_table tbody').on('click','tr',function(){
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
        var table6= $('#treat_meds').DataTable({
            "searching": true,
            "bPaginate": true
        });

        $.ajax({
            type: "GET",
            url: "http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/get/Medicine",
            async:"false",
            cache: "true",
            success: function(result) {
                requests = JSON.parse(result);
                table6= $('#treat_meds').dataTable({
                    "aaData": requests.results_array,
                    "aoColumns": [
                        { "mDataProp": "name" },
                        { "mDataProp": "description" },
                        { "mDataProp": "side_effect" }
                    ],
                    "destroy":true
                });
            }
        });

        $('#treat_meds tbody').on('click','tr',function(){
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
            if($('#treat_meds tbody tr').hasClass('selected')){
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

var table5api;
   
var table5= $('#cur_treat_table').DataTable({
    "searching": false,
    "bPaginate": false, 
    "initComplete": function () {
        table5api=this.api();
    }
});

$('#cur_treat_table tbody').on('click','tr',function(){
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    }
    else {
            table5.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
});

$('#select-tr-btn').on('click',function(e){              
    if($('#poss_treat_table tbody tr').hasClass('selected')){
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
    if($('#cur_treat_table tbody tr').hasClass('selected')){
       table5.row('.selected').remove().draw(false);
    }else{
        swal("You have to select a treatment to delete.");
    }
    e.preventDefault();
});

$('#diagnose_patient_id_input').on('focusout',function(e){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/get/Possible_treatmentmeds/"+$('#diagnose_patient_id_input').val(),
        async:"false",
        cache: "true",
        success: function(result) {
            requests = JSON.parse(result);
            table4= $('#poss_treat_table').dataTable({
                "searching": true,
                "aaData": requests.results_array,
                "aoColumns": [
                    { "mDataProp": "condition" },
                    { "mDataProp": "medicine" },
                    { "mDataProp": "quantity" }
                ],
                "destroy":true
            });
        }
    });
});

$.ajax({
    type: "GET",
    url: "http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/get/Medicine",
    async:"false",
    cache: "true",
    success: function(result) {
        requests = JSON.parse(result);
        table2= $('#meds').dataTable({
            "aaData": requests.results_array,
            "aoColumns": [
                { "mDataProp": "name" },
                { "mDataProp": "description" },
                { "mDataProp": "side_effect" }
            ],
            "destroy":true
        });
    }
});

$.ajax({
    type: "GET",
    url: "http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/get/NonUpdatedMedicalRecord",
    async:"false",
    cache: "true",
    success: function(result) {
        requests = JSON.parse(result);
        $.each(requests.results_array,function(key,value){
            table3.row.add( [
                value.id,
                value.firstname,
                value.lastname,
                value.dangerousness,
                value.last_updated
            ] ).draw();
        });
        $.each($('#med_records tbody tr'),function(key,value){
            $(this).addClass("not_updated");
            $(this).children("td:last-child").addClass("not_updated");
        });
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/get/UpdatedMedicalRecord",
            async:"false",
            cache: "true",
            success: function(result) {
                requests = JSON.parse(result);
                $.each(requests.results_array,function(key,value){
                    table3.row.add( [
                        value.id,
                        value.firstname,
                        value.lastname,
                        value.dangerousness,
                        value.last_updated
                    ] ).draw();
                });
            }
        });
    }
});
table3.columns('.ID').order('desc');


