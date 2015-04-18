<table id="example" class="diary table table-striped table-bordered" cellspacing="0" width="100%">
    <thead>
        <tr>
            <th>ID</th>
            <th>Patient</th>
            <th>Clinic</th>
            <th>Date</th>
            <th>Time</th>
            <th>Type</th>
            <th>Clinician</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>

    </tbody>
</table>
<script>
$(document).ready(function() {
				
		var ALL_APPOINTMENTS ="http://localhost:8080/ArkhamAsylumSystem/rest/receptionist/report/appointments/";	
			$.get(ALL_APPOINTMENTS,function (data){	
					
				data = JSON.parse(data);
				if (data.size != 0)
				$.each(data.results_array,function(i,data2){
				var t = $('#example').DataTable();
					t.row.add( [
            			    data2.appID+"",
							data2.patientID+" "+ data2.firstname +" "+data2.lastname,
							data2.clinicName +"",
							data2.date +"",
							data2.time +"",
							data2.type +"",
							data2.clinicianN +" " + data2.clinicianL,
							data2.status +""
					] ).draw();
				});			
			});
});
	
</script>	