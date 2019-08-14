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
    //and get customer emails!
    // https://metriculous.network/download.html
    // var decoded_return_url = atob("");
    var decoded_return_url = btoa("https://metriculous.network/metricloaddown.html");
    console.log("return " + decoded_return_url);
    var decoded_email_download = btoa("https://formspree.io/support+download@metriculous.network");
    console.log("email " + decoded_email_download);
    // document.getElementById('_next').value = decoded_return_url;
    //
    // var decoded = atob("aHR0cHM6Ly9mb3Jtc3ByZWUuaW8vc2JhdHR5K21ldHJpY3Vsb3VzQGdtYWlsLmNvbQ==");
    // document.getElementById('download-form').action = decoded;


}
