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
        type: "POST",
        dataType: "json",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function (data) {
            alert("success download"); // show response from the php script.
        },
        error: function (data) {
            alert(data)
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
            alert("success contact"); // show response from the php script.
        },
        error: function (data) {
            alert(data)
        }
    });
});
