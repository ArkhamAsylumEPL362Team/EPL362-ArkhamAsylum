function _logTransaction(service,requestData,response){
    var data = {"service":service,"data":JSON.stringify(requestData),"response":JSON.stringify(response)};
    data=JSON.stringify(data);
    
    $.ajax({
        type: "POST",
        url: "http://localhost:8080/ArkhamAsylumSystem/rest/management/log_transaction/",
        async:"true",
        cache: "true",
        data: data,
        success: function(patientRecord) {
            console.log("Transaction logged.");
        }
    });
}