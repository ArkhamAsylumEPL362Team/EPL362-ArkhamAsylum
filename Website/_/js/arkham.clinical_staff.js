var TREATMENT_ID=-1;

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
    "pageLength": 5,
    "scrollY":200
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
                $.each(requests.results_array,function(key,value){
                    table6.row.add( [
                        value.name,
                        value.description,
                        '<span>'+value.side_effect+'</span>',
                    ] ).draw();
                });
                $.ajax({
                    type: "GET",
                    url: "http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/get/NonAllergicMedicines/"+$('#diagnose_patient_id_input').val(),
                    async:"false",
                    cache: "true",
                    success: function(result) {
                        requests = JSON.parse(result);
                        $.each(requests.results_array,function(key,value1){
                            $.each($('#treat_meds tbody tr'),function(key,value2){
                                if(value1.name==$(this).children("td:first-child").html()) {
                                    $(this).addClass("allergic");
                                    $(this).children("td:last-child").append('<i style="color:#F26C68;margin-left:15px"' +
                                    'class="fa fa-exclamation fa-lg" data-container="body" data-toggle="popover" ' +
                                    'data-placement="top" data-content="The patient is allergic to this medicine!"></i>');
                                }
                            });
                        });
                        $('#treat_meds i.fa-exclamation').mouseover(function(){
                            $(this).css('cursor','pointer');
                            $(this).popover('show');
                        });

                        $('#treat_meds i.fa-exclamation').mouseout(function(){
                            $(this).css('cursor','pointer');
                            $(this).popover('hide');
                        });
                    }
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
                if($('tr.selected').hasClass('allergic')) {
                    swal({
                        title: "Are you sure?",
                        text: "You are trying to insert a medicine that the patient is allergic to.",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonClass: "btn-warning",
                        confirmButtonText: "Yes",
                        cancelButtonText: "No",
                        closeOnConfirm: true,
                        closeOnCancel: true
                    },
                    function(isConfirm) {
                        if (isConfirm) {
                            table7.row.add([
                                $('tr.selected td').eq(0).text(),
                                $('tr.selected td').eq(1).text(),
                                $('tr.selected td').eq(2).text(),
                                '<input  value="0" type="text">'

                            ]).draw();
                            var jsonwarning = {"clinician":"1","warning":"Patient is allergic to "+$('tr.selected td:first-child').html(),"date":"CURDATE()"};
                            jsonwarning=JSON.stringify(jsonwarning);
                            $.ajax({
                                type: "POST",
                                url: "http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/insert/OverruledWarning/",
                                async:"true",
                                data:jsonwarning,
                                success:function(data){
                                    console.log(data);
                                }
                            });
                        }
                    });
                }else{
                    table7.row.add([
                        $('tr.selected td').eq(0).text(),
                        $('tr.selected td').eq(1).text(),
                        $('tr.selected td').eq(2).text(),
                        '<input  value="0" type="text">'

                    ]).draw();
                }

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

        $('#add-treatment-form #add_btn').on('click',function(e){
            if(!$('#example7 tbody tr.odd td').hasClass('dataTables_empty')){
                if($("#psbl_tr_input").val()=="") {
                    swal("You have to write a condition for the added medicines");
                }else {
                    $.each($('#example7 tbody tr'), function (key, value) {
                        table4.row.add([
                            $('#psbl_tr_input').val(),
                            $('td', value).eq(0).text(),
                            '<input type="text" class="quantity" value="' + $('td input', value).val() + '">'
                        ]).draw();

                        table5.row.add([
                            $('#psbl_tr_input').val(),
                            $('td', value).eq(0).text(),
                            '<input type="text" class="quantity" value="' + $('td input', value).val() + '">'
                        ]).draw();

                        $('#cur_treat_table tbody tr:last-child').addClass('just_updated');

                    });
                    $('#my-modal').modal('toggle');
                }
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
    "searching": true,
    "bPaginate": false,
    "scrollY":200,
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
            $('#poss_treat_table tr.selected td').eq(0).text(),
            $('#poss_treat_table tr.selected td').eq(1).text(),
            '<input type="text" class="quantity" value="'+$('#poss_treat_table tr.selected td:last-child input').val()+'">'
        ]).draw();
        $('#cur_treat_table tbody tr:last-child').addClass('just_updated');
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
            if(requests.results_array.length!=0){
                TREATMENT_ID=requests.results_array[0].treatment_id;
            }
            $.each(requests.results_array,function(key,value){
                table5.row.add( [
                    value.condition,
                    value.medicine,
                    '<input type="text" class="quantity" value="'+value.quantity+'">'
                ] ).draw();
            });
        }
    });
});
getTreatmentmeds();
getMedicine();
getMedicalRecords();

/*$(".diagnose-form #submit_btn").click(function(){
 insertIncident();
 insertComments();
})*/

table3.columns('.ID').order('desc');

function insertIncident(){
    var incident_details="No incident details entered";
    var patient_id=$('#diagnose_patient_id_input').val();
    var incident_type=$('#diagnose_incedent_status:checked').val();
    if($('#diagnose_incedent_input').val()!=""){
        incident_details=$('#diagnose_incedent_input').val();
    }
    var incidentjson=JSON.stringify({"patient":"\""+patient_id+"\"","details":"\""+incident_details+"\"","type":"\""+incident_type+"\""});
    $.post("http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/insert/Incident/",
        incidentjson,
        function(data){
            console.log("incident post success");
        });
}

function insertComments(){
    var patient_id=$('#diagnose_patient_id_input').val();
    var comments="No comments entered";
    if($('diagnose_patient_comment_input').val()!=""){
        comments=$('diagnose_patient_comment_input').val();
    }
    var commentjson=JSON.stringify({"content":"\""+comments+"\"","patient":"\""+patient_id+"\"","clinician":"1","date":"CURDATE()"});
    $.post("http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/insert/ConsultationComment/",
        commentjson,
        function(data){
            console.log("incident post success");
        });
}
function insertTreatment(){
   if(TREATMENT_ID==-1) {
       if(!$('#cur_treat_table tbody tr:first-child td:first-child').hasClass('dataTables_empty')){
           var prev_id=0;
           var patient_id=$('#diagnose_patient_id_input').val();
           var jsontreatment=JSON.stringify({ "id": "1",  "prev_id": "\""+prev_id+"\"", "patient":"\""+patient_id+"\""});
           $.post("http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/insert/Treatment/",jsontreatment,function(data){
                   var medname;
                   var quantity;
                   var condition;
                   $.each($('#cur_treat_table tbody tr'),function(key,value){
                       $.each($(this).children('td'),function(key,value){
                           if(key==0)
                               medname=$(this).html();
                           else if (key==1){
                               condition=$(this).html();
                           }else{
                               quantity=$(this).children('.quantity').val();
                           }
                       });
                       var jsontreatmed=JSON.stringify({ "treatment_id":"\""+TREATMENT_ID+"\"", "medicine": "\""+medname+"\"", "quantity":"\""+quantity+"\"","condition":"\""+condition+"\""});
                           $.post("http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/insert/TreatmentMedicine/",jsontreatmed,function(data){});
                   });
               }
           );
       }
   }else{

   }
}
/*
function updateMedicalRecord(){

}*/
function getTreatment(){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/get/Treatment/",
        async: "false",
        cache: "true",
        success: function (result) {
            requests = JSON.parse(result);
            if(requests.results_array.length!=0){
                TREATMENT_ID=requests.results_array[0].treatment_id;
            }
        }
    });
}
function getTreatmentmeds() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/get/Treatmentmeds/",
        async: "false",
        cache: "true",
        success: function (result) {
            requests = JSON.parse(result);
            $.each(requests.results_array, function (key, value) {
                table4.row.add([
                    value.condition,
                    value.medicine,
                    '<input type="text" class="quantity" value="' + value.quantity + '">'
                ]).draw();
            });
        }
    });
}
function getMedicine() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/get/Medicine",
        async: "false",
        cache: "true",
        success: function (result) {
            requests = JSON.parse(result);
            table2 = $('#meds').dataTable({
                "aaData": requests.results_array,
                "aoColumns": [
                    {"mDataProp": "name"},
                    {"mDataProp": "description"},
                    {"mDataProp": "side_effect"}
                ],
                "destroy": true
            });
        }
    });
}
function getMedicalRecords() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/get/NonUpdatedMedicalRecord",
        async: "false",
        cache: "true",
        success: function (result) {
            requests = JSON.parse(result);
            $.each(requests.results_array, function (key, value) {
                table3.row.add([
                    value.id,
                    value.firstname,
                    value.lastname,
                    value.dangerousness,
                    value.last_updated
                ]).draw();
            });
            $.each($('#med_records tbody tr'), function (key, value) {
                $(this).addClass("not_updated");
                $(this).children("td:last-child").addClass("not_updated");
            });
            $.ajax({
                type: "GET",
                url: "http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/get/UpdatedMedicalRecord",
                async: "false",
                cache: "true",
                success: function (result) {
                    requests = JSON.parse(result);
                    $.each(requests.results_array, function (key, value) {
                        table3.row.add([
                            value.id,
                            value.firstname,
                            value.lastname,
                            value.dangerousness,
                            value.last_updated
                        ]).draw();
                    });
                }
            });
        }
    });
}



