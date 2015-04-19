var DELETE_PATIENT = "http://localhost:8080/ArkhamAsylumSystem/rest/receptionist/delete/patient/";
var DELETE_APPOINTMENT = "http://localhost:8080/ArkhamAsylumSystem/rest/receptionist/delete/appointment/";
$.extend( $.fn.dataTable.defaults, {
    "searching": true,
    "ordering": true,
    "searching": false,
    "bPaginate": true,
    "bInfo" : false,
    bFilter: false,
    "scrollX": false
} );

var table = $('#example').DataTable();

$('#example tbody').on('click','tr',function(){
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    }
    else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
});

$('#addbtn').on('click',function(e){
    $('#modal-title').text('Add appointment');
    loadForm('add_appointment');
    e.preventDefault();
});

$('#deletebtn').on('click',function(e){
    deleteAppointment();
    e.preventDefault();
});

$('#editbtn').on('click',function(e){
    if($('#example tbody tr').hasClass('selected')){                    
        $('#modal-title').text('Edit appointment');
        $('.form-holder').load("components/edit_appointment_form.php",function(){
            var id=$('#example tr.selected td').eq(0).text();
            var patient=$('#example tr.selected td').eq(1).text().split(" ");
			
            var clinic=$('#example tr.selected td').eq(2).text();
            var date=$('#example tr.selected td').eq(3).text();
            var time=$('#example tr.selected td').eq(4).text();
            var type=$('#example tr.selected td').eq(5).text();
            var clinician=$('#example tr.selected td').eq(6).text();
            var status=$('#example tr.selected td').eq(7).text();

            $('#edit_patientID_input').val(id);
            $('#edit_date_input').val(date);
            $('#edit_time_input').val(time);

            $.each($('#edit_clinicianID_input option'),function(key,value){
                if(clinician==$(this).html()){
                    $('#edit_clinicianID_input').val($(this).val());
                    return false;
                }
            })
            
            $.each($('#edit_clinic_input option'),function(key,value){
                if(clinic==$(this).html()){
                    $('#edit_clinic_input').val($(this).val());
                    return false;
                }
            })

            if(type=="PRE_ARRANGED"){
                $('#appointment_type-0').attr('checked',true);
            }else{
                $('#appointment_type-1').attr('checked',true);
            }

            if(status=="SHOW_UP"){
                $('#edit_appointment_status-1').attr('checked',true);
            }else{
                $('#edit_appointment_status-0').attr('checked',true);
            }
        });
        $('#my-modal').modal('toggle');  
    }else{
        swal("You have to select an appointment to edit.");
    }
    e.preventDefault();
});

$('#generatebtn').on('click',function(e){
    $('#modal-title').text('Generate prescription');
    alert('Pressed generate prescription.');
    //loadForm('generate_prescription');
    e.preventDefault();
});

$('#searchbtn').on('click',function(e){
    $('#modal-title').text('Search records');
    loadForm('search_record');          
    e.preventDefault();
});

function generatePrescription(){
    alert('Generate prescription');
}

function deleteAppointment(){
    if($('#example tbody tr').hasClass('selected')){  
        swal({
            title: "Are you sure?",
            text: "You are trying to delete an appointment record.",
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
					
			var id=$('#example tr.selected td').eq(0).text();
            var patient=$('#example tr.selected td').eq(1).text().split(" ")[0];
            var clinic=$('#example tr.selected td').eq(2).text();
            var date=$('#example tr.selected td').eq(3).text();
            var time=$('#example tr.selected td').eq(4).text();
            var type=$('#example tr.selected td').eq(5).text();
            var clinician=$('#example tr.selected td').eq(6).text();
            var status=$('#example tr.selected td').eq(7).text();
				
				var data = { 
							"id": id,
							"date":date,
							"patient":patient,
							"clinician":clinician ,		
							"clinic":clinic ,	
							"time":time,	
							"type":type,
							"status": status
					};	
				data = JSON.stringify(data);
				$.post(DELETE_APPOINTMENT,data,function(data){
					console.log(data);
				});
				
                table.row('.selected').remove().draw(false);
            }
        });
    }else{
         swal("You have to select an appointment to delete.");
    }
}

var table1 = $('#example1').DataTable({
    "searching": true});

$('#example1 tbody').on('click','tr',function(){
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    }
    else {
            table1.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
});

$('#add-ptn-btn').on('click',function(e){
    $('#modal-title').text('Add Patient');
    loadForm('add_patient');
    e.preventDefault();
});

$('#delete-ptn-btn').on('click',function(e){
    deletePatient();
    e.preventDefault();
});

$('#edit-ptn-btn').on('click',function(e){
    if($('#example1 tbody tr').hasClass('selected')){                    
        $('#modal-title').text('Edit Patient');
        $('.form-holder').load("components/edit_patient_form.php",function(){
            var id=$('tr.selected td').eq(0).text();
            var firstname=$('#example1 tr.selected td').eq(1).text();
            var lastname=$('#example1 tr.selected td').eq(2).text();
            var email=$('#example1 tr.selected td').eq(3).text();
            var address=$('#example1 tr.selected td').eq(4).text();
            var phonenumber=$('#example1 tr.selected td').eq(5).text();
            var birthdate=$('#example1 tr.selected td').eq(6).text();
            var gender=$('#example1 tr.selected td').eq(7).text();
            
            $('#edit_patientID_input').val(id);
            $('#edit_patient_firstname_input').val(firstname);
            $('#edit_patient_lastname_input').val(lastname);
            $('#edit_email_input').val(email);
            $('#edit_patient_address_input').val(address);
            $('#edit_patient_phonenumber_input').val(phonenumber);
            $('#edit_patient_birthdate_input').val(birthdate);
            if(gender=="M")
                $('#patient_gender-0').attr('checked',true);
            else
                $('#patient_gender-1').attr('checked',true);
        });
        $('#my-modal').modal('toggle');  
    }else{
        swal("You have to select a patient to edit.");
    }
    e.preventDefault();
});

function deletePatient(){
    if($('#example1 tbody tr').hasClass('selected')){  
        swal({
            title: "Are you sure?",
            text: "You are trying to delete a patient's record.",
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
			 var id=$('#example1 tr.selected td').eq(0).text();
		     var firstname=$('#example1 tr.selected td').eq(1).text();
             var lastname=$('#example1 tr.selected td').eq(2).text();
             var email=$('#example1 tr.selected td').eq(3).text();
             var address=$('#example1 tr.selected td').eq(4).text();
             var phonenumber=$('#example1 tr.selected td').eq(5).text();
             var birthdate=$('#example1 tr.selected td').eq(6).text();
             var gender=$('#example1 tr.selected td').eq(7).text();
				
			var data = {  "id": id,
					  "firstname":firstname,
					  "relative_email":email,
					  "lastname":lastname ,		
					  "address":address ,	
					  "phonenumber":phonenumber,	
					  "birthday":birthdate,
					  "gender": gender
					};	
				data = JSON.stringify(data);
				$.post(DELETE_PATIENT,data,function(data){
					console.log(data);
                    data=JSON.parse(data);
                    if(!data.id){
                        swal("This record is read-only!");
                        return false;
                    }
                    table1.row('.selected').remove().draw(false);
				});
				
                
				
				
            }
        });
    }else{
         swal("You have to select a patient to delete.");
    }
}



function loadForm(operation){
    $('.form-holder').load("components/"+operation+"_form.php");
    $('#my-modal').modal('toggle');  
}
