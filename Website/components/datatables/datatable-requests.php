<table id="example8" class="requests table table-striped table-bordered" cellspacing="0" width="100%">
    <thead>
        <tr>
            <th>Number</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>ID</th>
            <th>Date</th>
        </tr>
    </thead>
</table>

<script>
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/ArkhamAsylumSystem/rest/medical_record_service/view_patient_requests/",
        async:"false",
        cache: "true",
        success: function(result) {
            var requests = result;
            requests = JSON.parse(requests);
            console.log(requests);
            var table8= $('#example8').dataTable({
                "aaData": requests.results_array,
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
});
</script>