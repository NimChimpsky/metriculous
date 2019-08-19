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

    var form = $(this);
    var url = form.attr('action');

    $.ajax({
        // type: "POST",
        type: "POSTMAN",
        dataType: "json",
        url: url,
        data: form.serialize(),
        success: function (data) {
            alert("success download");
        },
        error: function (data) {
            $("#downloadContainer").html('<div style="text-align: center"><a href="resources/metriculous.jar"><b><u>Link to JAR</u></b></a></div>');
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
        },
        error: function (data) {
            alert("Apologies, unable to communicate please use email/twitter instead");
        }
    });
});
