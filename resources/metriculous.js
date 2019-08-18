function sendContactForm() {
    //if you are here this is just to hopefully reduce webscrapinga
    var decoded = atob("aHR0cHM6Ly9mb3Jtc3ByZWUuaW8vc3VwcG9ydCtmb3Jtc3ByZWVAbWV0cmljdWxvdXMubmV0d29yaw==");
    document.getElementById('contact-form').action = decoded;
}

function toggleDownloadForm() {
    console.log("toggling");
    var dialog = document.getElementById("downloadFormAndEula");
    if (!dialog.open) {
        document.getElementById("downloadFormAndEula").showModal();
        document.getElementById("rootBody").classList.toggle('fade');
    } else {
        document.getElementById("downloadFormAndEula").close();
        document.getElementById("rootBody").classList.toggle('fade');
    }
}

function submitEmailAndDownload() {
    var form = document.getElementById('download-form');

    form.style.display = 'none';

    var processing = document.createElement('span');

    processing.appendChild(document.createTextNode('processing ...'));
    var result =form.submit();
    console.log("result " + result);
    form.parentNode.insertBefore(processing, form);
    //
    //and get customer emails!
    // https://metriculous.network/download.html
    // var decoded_return_url = atob("");
    // var decoded_return_url = btoa("https://metriculous.network/metricloaddown.html");
    // var decoded_return_url = atob("aHR0cHM6Ly9tZXRyaWN1bG91cy5uZXR3b3JrL21ldHJpY2xvYWRkb3duLmh0bWw=");
    // document.getElementById('_after').value = decoded_return_url;
    //
    // var decoded_email_download = atob("aHR0cHM6Ly9tYWlsdGhpcy50by9zdXBwb3J0K2Rvd25sb2FkQG1ldHJpY3Vsb3VzLm5ldHdvcms=");
    // document.getElementById('download-form').action = decoded_email_download;

    //
    // var decoded = atob("aHR0cHM6Ly9mb3Jtc3ByZWUuaW8vc2JhdHR5K21ldHJpY3Vsb3VzQGdtYWlsLmNvbQ==");
}

// this is the id of the form
$("#download-form").submit(function (e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');

    $.ajax({
        type: "POST",
        dataType: "json",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function (data) {
            alert("success"); // show response from the php script.
        },
        error: function (data) {
            alert(data)
        }
    });
});

