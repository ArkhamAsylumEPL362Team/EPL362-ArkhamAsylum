<table id="example9" class="personel table table-striped table-bordered" cellspacing="0" width="100%">
    <thead>
        <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Phonenumber</th>
            <th>Type</th>
        </tr>
    </thead>
</table>
<script>
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/ArkhamAsylumSystem/rest/medical_record_service/view_personel_info/",
        async:"true",
        cache: "true",
        success: function(result) {
            var personel = result;
            personel = JSON.parse(personel);
            console.log(personel);
            var table8= $('#example9').dataTable({
                "aaData": personel.results_array,
                "aoColumns": [
                    { "mDataProp": "id" },
                    { "mDataProp": "firstname" },
                    { "mDataProp": "lastname" },
                    { "mDataProp": "email" },
                    { "mDataProp": "phonenumber" },
                    { "mDataProp": "type" }
                ],
                "destroy":true
            });
        }
    });
});
</script>