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
// this is the id of the form
$("#download-form").submit(function (e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.
    var email = document.getElementById("download-email").value;
    if (!validateEmail(email)) {
        alert("Email validation failed, please correct address or email us support@metriculous.network");
        return;
    }
    var form = $(this);
    var url = form.attr('action');

    $.ajax({
        // type: "POST",
        type: "POST",
        dataType: "json",
        url: url,
        data: form.serialize(),
        success: function (data) {
            $("#downloadContainer").html('<div style="text-align: center"><a href="resources/metriculous.jar"><b><u>Link to JAR</u></b></a></div>');
        },
        error: function (data) {
            alert("Unable to validate email, please contact support@metriculous.network");
        }
    });
});
// this is the id of the form
$("#contact-form").submit(function (e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');

    $.ajax({
        type: "POST",
        dataType: "json",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function (data) {
            alert("Thanks for the message. One of our team will respond asap.");
            document.getElementById("contact-email").value = "";
            document.getElementById("contact-message").value = "";
        },
        error: function (data) {
            alert("Apologies, unable to communicate please use email");
        }
    });
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}