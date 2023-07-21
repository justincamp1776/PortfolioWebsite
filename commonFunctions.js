function ajaxRequest(type, url, data, dataType, callback){
    $.ajax({
        type: type,
        url: url,
        data: JSON.stringify(data),
        contentType: "application/json, charset=utf-8",
        dataType: dataType,
        success: callback,
        failure: function (response){
            alert("Unable to retrieve view count at this time. Please try again later.");
        },
        error: function (response){
            alert(response.responseText);
        },
    });
};

