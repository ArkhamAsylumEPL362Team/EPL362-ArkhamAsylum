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
    ordering:true
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
        if(!$('#med_records tbody tr.selected').hasClass('deceased')) {
            if($('#med_records tbody tr.selected').hasClass("not_updated")) {
                $('#diagnose_patient_id_input').val($('#med_records tbody tr.selected td:first-child').html());
                $.smoothScroll({
                    scrollTarget: "#diagnose"
                });

            }else{
                 $('#modal-title').text('Edit Patient\'s Treatment');
                $.ajax({
                    type: "GET",
                    url: "http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/get/Treatmentmeds/",
                    async: "false",
                    cache: "true",
                    success: function (result) {
                        requests = JSON.parse(result);
                        var table_ptr = $('#poss_treat_edit_table').DataTable({
                            "searching": true,
                            "pageLength": 5,
                            "scrollY":200,
                            "destroy": true
                        });
                        $('#poss_treat_edit_table tbody').on('click','tr',function(){
                            if ($(this).hasClass('selected')) {
                                $(this).removeClass('selected');
                            }
                            else {
                                table_ptr.$('tr.selected').removeClass('selected');
                                $(this).addClass('selected');
                            }
                        });
                        $.each(requests.results_array, function (key, value) {
                            table_ptr.row.add([
                                value.condition,
                                value.medicine,
                                '<input type="text" class="quantity" value="' + value.quantity + '">'
                            ]).draw();
                        });
                        $.ajax({
                            type: "GET",
                            url: "http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/get/Possible_treatmentmeds/"+$('#med_records tbody tr.selected td:first-child').html(),
                            async:"false",
                            cache: "true",
                            success: function(result) {
                                var tablectrapi;

                                var tablectr= $('#cur_treat_edit_table').DataTable({
                                    "searching": true,
                                    "bPaginate": false,
                                    "scrollY":200,
                                    "destroy": true,
                                    "initComplete": function () {
                                        tablectrapi=this.api();
                                    }
                                });
                                $('#cur_treat_edit_table tbody').on('click','tr',function(){
                                    if ($(this).hasClass('selected')) {
                                        $(this).removeClass('selected');
                                    }
                                    else {
                                        tablectr.$('tr.selected').removeClass('selected');
                                        $(this).addClass('selected');
                                    }
                                });
                                $('#select-tr-edit-btn').on('click',function(e){
                                    if($('#poss_treat_edit_table tbody tr').hasClass('selected')){
                                        tablectr.row.add([
                                            $('#poss_treat_edit_table tr.selected td').eq(0).text(),
                                            $('#poss_treat_edit_table tr.selected td').eq(1).text(),
                                            '<input type="text" class="quantity" value="'+$('#poss_treat_edit_table tr.selected td:last-child input').val()+'">'
                                        ]).draw();
                                        $('#cur_treat_edit_table tbody tr:last-child').addClass('just_updated');
                                    }else{
                                        swal("You have to select a treatment to use.");
                                    }
                                    e.preventDefault();
                                });
                                loadTreatModalForMedRec(table_ptr,tablectr);
                                $('#delete-ctr-edit-btn').on('click',function(e){
                                    if($('#cur_treat_edit_table tbody tr').hasClass('selected')){
                                        tablectr.row('.selected').remove().draw(false);
                                    }else{
                                        swal("You have to select a treatment to delete.");
                                    }
                                    e.preventDefault();
                                });
                                $("#submit_edited_btn").click(function(e){
                                    e.preventDefault();
                                    $.ajax({
                                        type: "GET",
                                        url: "http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/get/Treatment/" + $('#med_records tbody tr.selected td:first-child').html(),
                                        async: "false",
                                        cache: "true",
                                        success: function (result) {
                                            requests = JSON.parse(result);
                                            if (requests.results_array.length != 0) {
                                                var treat_id = requests.results_array[0].treatment_id;
                                            }
                                            var prev_id=treat_id;
                                            var patient_id=$('#med_records tbody tr.selected td:first-child').html();
                                            var jsontreatment=JSON.stringify({ "id": "1",  "prev_id": prev_id, "patient":patient_id});
                                            if($('#cur_treat_edit_table tbody tr.just_updated').html()!=undefined) {
                                                $.post("http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/insert/Treatment/", jsontreatment, function (data) {
                                                    var medname;
                                                    var quantity;
                                                    var condition;
                                                    $.ajax({
                                                        type: "GET",
                                                        url: "http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/get/Treatment/"+patient_id,
                                                        async: "false",
                                                        cache: "true",
                                                        success: function (result) {
                                                            requests = JSON.parse(result);
                                                            if(requests.results_array.length!=0){
                                                                treat_id=requests.results_array[0].treatment_id;
                                                            }
                                                            if($('#cur_treat_edit_table tbody tr.just_updated').html()!=undefined) {
                                                                $.each($('#cur_treat_edit_table tbody tr'), function (key, value) {
                                                                    $.each($(this).children('td'), function (key, value) {
                                                                        if (key == 0)
                                                                            condition = $(this).html();
                                                                        else if (key == 1) {
                                                                            medname = $(this).html();
                                                                        } else {
                                                                            quantity = $(this).children('.quantity').val();
                                                                        }
                                                                    });
                                                                    var jsontreatmed = JSON.stringify({
                                                                        "treatment_id": treat_id,
                                                                        "medicine": medname,
                                                                        "quantity": quantity,
                                                                        "condition": condition
                                                                    });
                                                                    $.post("http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/insert/TreatmentMedicine/", jsontreatmed, function (data) {
                                                                    });

                                                                });
                                                            }
                                                        }
                                                    });

                                                });
                                            }
                                            $("#my-modal").modal('hide');
                                        }
                                    });
                                });

                                requests = JSON.parse(result);
                                if(requests.results_array.length!=0){
                                    TREATMENT_ID=requests.results_array[0].treatment_id;
                                }
                                $.each(requests.results_array,function(key,value){
                                    tablectr.row.add( [
                                        value.condition,
                                        value.medicine,
                                        '<input type="text" class="quantity" value="'+value.quantity+'">'
                                    ] ).draw();
                                });
                            },
                            error:function(){
                                tablectr.clear().draw();
                            }
                        });
                    }
                });

                 $('.form-holder').load("components/edit_record_form.php", function () {
                 });
                 $('#my-modal').modal('toggle');
            }
        }else{
            swal("You can't edit this patient's medical record.");
        }
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
        var data={"requestNumber":"0","firstname":"0","lastname":"0","patientID":"1","date":"0"};
        data=JSON.stringify(data);

        $.ajax({
            url:"http://localhost:8080/ArkhamAsylumSystem/rest/medical_record_service/set_file/",
            type:"post",
            data:data,
            success:function(response){
                window.location = "http://localhost:8080/ArkhamAsylumSystem/rest/medical_record_service/download/";
            }
        });
        
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
                    url: "http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/get/AllergicMedicines/"+$('#diagnose_patient_id_input').val(),
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
    var foundnup=0;
    $.each($('#med_records tbody tr.not_updated'),function(key,value){
        if($(this).children('td:first-child').html()==$('#diagnose_patient_id_input').val()){
            foundnup=1;
            return false;
        }
    });
    $.each($('#med_records tbody tr.deceased'),function(key,value){
        if($(this).children('td:first-child').html()==$('#diagnose_patient_id_input').val()){
            foundnup=2;
            return false;
        }
    });
    $.each($('#med_records tbody tr.updated'),function(key,value){
        if(!$('#med_records tbody tr.updated').hasClass('deceased')&&$(this).children('td:first-child').html()==$('#diagnose_patient_id_input').val()){
            swal({
                    title: "Are you sure?",
                    text: "The record is already updated.Do you want to start a new session?",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Yes",
                    cancelButtonText: "No",
                    closeOnConfirm: true,
                    closeOnCancel: true
                },
                function(isConfirm) {
                    if (isConfirm) {
                        foundnup==1;
                    } else {
                        foundnup==3;
                    }
                });
            return false;
        }
    });
    if(foundnup==1 || foundnup==0) {
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/get/Possible_treatmentmeds/" + $('#diagnose_patient_id_input').val(),
            async: "false",
            cache: "true",
            success: function (result) {
                table5.clear().draw();
                requests = JSON.parse(result);
                if (requests.results_array.length != 0) {
                    TREATMENT_ID = requests.results_array[0].treatment_id;
                }
                $.each(requests.results_array, function (key, value) {
                    table5.row.add([
                        value.condition,
                        value.medicine,
                        '<input type="text" class="quantity" value="' + value.quantity + '">'
                    ]).draw();
                });
            },
            error: function () {
                table5.clear().draw();
            }
        });
    }else if(foundnup==2){
        swal('You can\'t update this patient\'s medical record because is read-only');
    }
});
getTreatmentmeds();
getMedicine();
var deceasedjson;

$.ajax({
    type: "GET",
    url: "http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/get/Deceased/",
    async:"false",
    cache: "true",
    success: function(result) {
        result=JSON.parse(result);
        deceasedjson=result.results_array;
    }
});
getMedicalRecords();

$(".diagnose-form #submit_btn").click(function(e){
    e.preventDefault();
    var flag=0;
    var foundnup=0;
    $.each($('#med_records tbody tr.not_updated'),function(key,value){
        if($(this).children('td:first-child').html()==$('#diagnose_patient_id_input').val()){
            foundnup=1;
            return false;
        }
    });
    $.each($('#med_records tbody tr.not_updated'),function(key,value){
        if($(this).children('td:first-child').html()==$('#diagnose_patient_id_input').val()){
            foundnup=2;
            return false;
        }
    });
    if(foundnup==0 || foundup==1) {
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/get/Treatment/" + $('#diagnose_patient_id_input').val(),
            async: "false",
            cache: "true",
            success: function (result) {
                requests = JSON.parse(result);
                if (requests.results_array.length != 0) {
                    TREATMENT_ID = requests.results_array[0].treatment_id;
                }
            
                insertTreatment();
                
                    insertIncident();
                    insertComments();
                    updateMedicalRecord();
                
            }
        });
    }else{
        swal("Can\'t Edit", "This patient\'s medical record because is read-only", "error");
    }

});

function loadTreatModalForMedRec(table_ptr,tablectr){
    $('#add-tr-edit-btn').on('click', function (e) {
        $('#modal-edit-title').text('Add treatment');
        $('.form-edit-holder').load("components/add_treatment_form.php", function () {
            var table6 = $('#treat_meds').DataTable({
                "searching": true,
                "bPaginate": true
            });
            console.log("asdasd");
            $.ajax({
                type: "GET",
                url: "http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/get/Medicine",
                async: "false",
                cache: "true",
                success: function (result) {
                    requests = JSON.parse(result);
                    $.each(requests.results_array, function (key, value) {
                        table6.row.add([
                            value.name,
                            value.description,
                            '<span>' + value.side_effect + '</span>',
                        ]).draw();
                    });
                    $.ajax({
                        type: "GET",
                        url: "http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/get/AllergicMedicines/" + $('#med_records tbody tr.selected td:first-child').html(),
                        async: "false",
                        cache: "true",
                        success: function (result) {
                            requests = JSON.parse(result);
                            $.each(requests.results_array, function (key, value1) {
                                $.each($('#treat_meds tbody tr'), function (key, value2) {
                                    if (value1.name == $(this).children("td:first-child").html()) {
                                        $(this).addClass("allergic");
                                        $(this).children("td:last-child").append('<i style="color:#F26C68;margin-left:15px"' +
                                        'class="fa fa-exclamation fa-lg" data-container="body" data-toggle="popover" ' +
                                        'data-placement="top" data-content="The patient is allergic to this medicine!"></i>');
                                    }
                                });
                            });
                            $('#treat_meds i.fa-exclamation').mouseover(function () {
                                $(this).css('cursor', 'pointer');
                                $(this).popover('show');
                            });

                            $('#treat_meds i.fa-exclamation').mouseout(function () {
                                $(this).css('cursor', 'pointer');
                                $(this).popover('hide');
                            });
                        }
                    });

                }
            });

            $('#treat_meds tbody').on('click', 'tr', function () {
                if ($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                }
                else {
                    table6.$('tr.selected').removeClass('selected');
                    $(this).addClass('selected');
                }
            });


            var table7 = $('#example7').DataTable({
                "searching": false,
                "bPaginate": false
            });

            $('#example7 tbody').on('click', 'tr', function () {
                if ($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                }
                else {
                    table7.$('tr.selected').removeClass('selected');
                    $(this).addClass('selected');
                }
            });

            $('#add-meds-btn').on('click', function (e) {
                if ($('#treat_meds tbody tr').hasClass('selected')) {
                    if ($('tr.selected').hasClass('allergic')) {
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
                            function (isConfirm) {
                                if (isConfirm) {
                                    table7.row.add([
                                        $('#treat_meds tr.selected td').eq(0).text(),
                                        $('#treat_meds tr.selected td').eq(1).text(),
                                        $('#treat_meds tr.selected td').eq(2).text(),
                                        '<input  value="0" type="text">'

                                    ]).draw();
                                    var jsonwarning = {
                                        "clinician": "1",
                                        "warning": "Patient is allergic to " + $('#treat_meds tr.selected td:first-child').html(),
                                        "date": "CURDATE()"
                                    };
                                    jsonwarning = JSON.stringify(jsonwarning);
                                    $.ajax({
                                        type: "POST",
                                        url: "http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/insert/OverruledWarning/",
                                        async: "true",
                                        data: jsonwarning,
                                        success: function (data) {
                                            console.log(data);
                                        }
                                    });
                                }
                            });
                    } else {
                        table7.row.add([
                            $('#treat_meds tr.selected td').eq(0).text(),
                            $('#treat_meds tr.selected td').eq(1).text(),
                            $('#treat_meds tr.selected td').eq(2).text(),
                            '<input  value="0" type="text">'

                        ]).draw();
                    }

                } else {
                    swal("You have to select a medicine to use.");
                }
                e.preventDefault();
            });

            $('#delete-meds-btn').on('click', function (e) {
                if ($('#example7 tbody tr').hasClass('selected')) {
                    table7.row('.selected').remove().draw(false);
                } else {
                    swal("You have to select a medicine to delete.");
                }
                e.preventDefault();
            });

            $('#add-treatment-form #add_btn').on('click', function (e) {
                if (!$('#example7 tbody tr.odd td').hasClass('dataTables_empty')) {
                    if ($("#psbl_tr_input").val() == "") {
                        swal("You have to write a condition for the added medicines");
                    } else {
                        $.each($('#example7 tbody tr'), function (key, value) {
                            table_ptr.row.add([
                                $('#psbl_tr_input').val(),
                                $('td', value).eq(0).text(),
                                '<input type="text" class="quantity" value="' + $('td input', value).val() + '">'
                            ]).draw();

                            tablectr.row.add([
                                $('#psbl_tr_input').val(),
                                $('td', value).eq(0).text(),
                                '<input type="text" class="quantity" value="' + $('td input', value).val() + '">'
                            ]).draw();

                            $('#cur_treat_edit_table tbody tr:last-child').addClass('just_updated');

                        });
                        $('#my-modal').unbind('hidden.bs.modal');
                        $('#my-edit-modal').modal('hide');
                        $('#my-edit-modal').on('hidden.bs.modal', function(e) {
                            $('#my-modal').modal('show'); //DOM destroyer
                        });
                    }
                } else {
                    swal("You have to select medicines for treatment.");
                }
                e.preventDefault();
            });
        });
        $('#my-modal').modal('hide');
        $('#my-modal').on('hidden.bs.modal', function(e) {
            $('#my-edit-modal').modal('show'); //DOM destroyer
        });
        $('#my-edit-modal .modal-dialog').addClass('modal-lg');
        e.preventDefault();
    });

}

function insertIncident(){
    var incident_details="No incident details entered";
    var patient_id=$('#diagnose_patient_id_input').val();
    var incident_type=$('input[name="diagnose_incedent_status"]:checked').val();
    if($('#diagnose_incedent_input').val()!=""){
        incident_details=$('#diagnose_incedent_input').val();
    }
    var incidentjson={"patient":patient_id,"details":incident_details,"type":incident_type};
    var jsonSTRING=JSON.stringify(incidentjson);
    $.ajax({
        type: "POST",
        url: "http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/insert/Incident/",
        async:"false",
        data:jsonSTRING,
        success:function(data){
            console.log(data);
        }
    });
}

function insertComments(){
    var patient_id=$('#diagnose_patient_id_input').val();
    var comments="No comments entered";
    if($('diagnose_patient_comment_input').val()!=""){
        comments=$('diagnose_patient_comment_input').val();
    }
    var commentjson=JSON.stringify({"content":comments,"patient":patient_id,"clinician":"1","date":"CURDATE()"});
    $.post("http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/insert/ConsultationComment/",
        commentjson,
        function(data){
            console.log("incident post success");
        });
}
function insertTreatment(){
   if(TREATMENT_ID==-1||TREATMENT_ID=="null") {
       if(!$('#cur_treat_table tbody tr:first-child td:first-child').hasClass('dataTables_empty')){
           flag=1;
           var prev_id=0;
           var patient_id=$('#diagnose_patient_id_input').val();
           var jsontreatment=JSON.stringify({ "id": "1",  "prev_id": prev_id, "patient":patient_id});
           $.post("http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/insert/Treatment/",jsontreatment,function(data){
                   var medname;
                   var quantity;
                   var condition;
                   $.ajax({
                       type: "GET",
                       url: "http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/get/Treatment/"+$('#diagnose_patient_id_input').val(),
                       async: "false",
                       cache: "true",
                       success: function (result) {
                           requests = JSON.parse(result);
                           if(requests.results_array.length!=0){
                               TREATMENT_ID=requests.results_array[0].treatment_id;
                           }
                               $.each($('#cur_treat_table tbody tr'), function (key, value) {
                                   $.each($(this).children('td'), function (key, value) {
                                       if (key == 0)
                                           condition = $(this).html();
                                       else if (key == 1) {
                                           medname = $(this).html();
                                       } else {
                                           quantity = $(this).children('.quantity').val();
                                       }
                                   });
                                   var jsontreatmed = JSON.stringify({
                                       "treatment_id": TREATMENT_ID,
                                       "medicine": medname,
                                       "quantity": quantity,
                                       "condition": condition
                                   });
                                   $.post("http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/insert/TreatmentMedicine/", jsontreatmed, function (data) {
                                   });
                               });
                       }
                   });
               }
           );
       }else{
           swal("You haven't put any treatment for this new patient!");
       }
   }else{
       flag=1;
       var prev_id=TREATMENT_ID;
       
           
       var patient_id=$('#diagnose_patient_id_input').val();
       var jsontreatment=JSON.stringify({ "id": "1",  "prev_id": prev_id, "patient":patient_id});
       if($('#cur_treat_table tbody tr.just_updated').html()!=undefined) {
           console.log("hdfh");
           $.post("http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/insert/Treatment/", jsontreatment, function (data) {
               var medname;
               var quantity;
               var condition;
               $.ajax({
                   type: "GET",
                   url: "http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/get/Treatment/"+$('#diagnose_patient_id_input').val(),
                   async: "false",
                   cache: "true",
                   success: function (result) {
                       requests = JSON.parse(result);
                       if(requests.results_array.length!=0){
                           TREATMENT_ID=requests.results_array[0].treatment_id;
                       }
                       if($('#cur_treat_table tbody tr.just_updated').html()!=undefined) {
                           $.each($('#cur_treat_table tbody tr'), function (key, value) {
                               $.each($(this).children('td'), function (key, value) {
                                   if (key == 0)
                                       condition = $(this).html();
                                   else if (key == 1) {
                                       medname = $(this).html();
                                   } else {
                                       quantity = $(this).children('.quantity').val();
                                   }
                               });
                               var jsontreatmed = JSON.stringify({
                                   "treatment_id": TREATMENT_ID,
                                   "medicine": medname,
                                   "quantity": quantity,
                                   "condition": condition
                               });
                               $.post("http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/insert/TreatmentMedicine/", jsontreatmed, function (data) {
                               });

                           });
                       }
                   }
               });

           });
       }
   }
   flag=0;
}

function updateMedicalRecord(){
    var jsonmedical = JSON.stringify({ "patient": $('#diagnose_patient_id_input').val(),  "last_updated": "CURDATE()", "dangerousness": $( "#diagnose_patient_dangerousness_input option:selected" ).text()});
    $.post("http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/insert/MedicalRecord/",
        jsonmedical,
        function(data){
            console.log('medical record updated');
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
    console.log("das");
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/get/NonUpdatedMedicalRecord",
        async: "false",
        cache: "true",
        success: function (result) {
            requests = JSON.parse(result);
            console.log(deceasedjson);
            $.each(requests.results_array, function (key1, value1) {
                    table3.row.add([
                        value1.id,
                        value1.firstname,
                        value1.lastname,
                        value1.dangerousness,
                        value1.last_updated
                    ]).draw();
            });
            $.each($('#med_records tbody tr'), function (key, value) {
                $(this).addClass("not_updated");
                $(this).children("td:last-child").addClass("not_updated");
                $(this).children("td.not_updated").append('<i style="color:#F26C68;margin-left:15px"' +
                'class="fa fa-exclamation fa-lg" data-container="body" data-toggle="popover" ' +
                'data-placement="top" data-content="This patient\'s medical record is out of date."></i>');
                /*F26C68*/
            });
            $.ajax({
                type: "GET",
                url: "http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/get/UpdatedMedicalRecord",
                async: "false",
                cache: "true",
                success: function (result) {
                    requests = JSON.parse(result);
                    $.each(requests.results_array, function (key1, value1) {
                            table3.row.add([
                                value1.id,
                                value1.firstname,
                                value1.lastname,
                                value1.dangerousness,
                                value1.last_updated
                            ]).draw();
                    });
                    $.each($('#med_records tbody tr'),function(key1,value1){
                        var colval=$(this).children("td:first-child").html();
                        $.each(deceasedjson,function(key3,value3){
                            if(value3.id==colval){
                                var pos=key1+1;
                                if(!$('#med_records tbody tr:nth-child('+pos+')').hasClass("deceased")) {
                                    $('#med_records tbody tr:nth-child(' + pos + ')').addClass("deceased");
                                    $('#med_records tbody tr:nth-child(' + pos + ') td:last-child').append('<i style="color:#000000;margin-left:15px"' +
                                    'class="fa fa-exclamation fa-lg" data-container="body" data-toggle="popover" ' +
                                    'data-placement="top" data-content="This patient\'s medical record is read only."></i>');

                                    $('#med_records i.fa-exclamation').mouseover(function(){
                                        $(this).css('cursor','pointer');
                                        $(this).popover('show');
                                    });

                                    $('#med_records i.fa-exclamation').mouseout(function(){
                                        $(this).css('cursor','pointer');
                                        $(this).popover('hide');
                                    });
                                }
                                return false;
                            }
                        });
                    });
                    $.each($('#med_records tbody tr'),function(key3,value3){
                        if(!$(this).hasClass('deceased')&&!$(this).hasClass('not_updated')){
                            $(this).addClass('updated');
                        }
                    });

                }
            });
        }
    });
}



