<table id="example1" class="patients table table-striped table-bordered" cellspacing="0" width="100%">
    <thead>
        <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Relative's email</th>
            <th>Address</th>
            <th>Phonenumber</th>
            <th>Brithdate</th>
            <th>Gender</th>
        </tr>
    </thead>

    <tbody>
      
    </tbody>
</table>

<script>
$(document).ready(function() {
				
			var ALL_PATIENTS ="http://localhost:8080/ArkhamAsylumSystem/rest/receptionist/report/all_patients/";	
				
			$.get(ALL_PATIENTS,function (data){	
					
				data = JSON.parse(data);
			
				$.each(data.results_array,function (i,patient){
					var t = $('#example1').DataTable();
					t.row.add( [
            			    patient.id+"",
							patient.firstname +"",
							patient.lastname +"",
							patient.relative_email +"",
							patient.address +"",
							patient.phonenumber +"",
							patient.birthday +"",
							patient.gender +""
							] ).draw();
				
				});
				
							
			});
});
</script>	
