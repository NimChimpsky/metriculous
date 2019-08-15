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
    // var decoded_return_url = btoa("https://metriculous.network/metricloaddown.html");
    var decoded_return_url = atob("aHR0cHM6Ly9tZXRyaWN1bG91cy5uZXR3b3JrL21ldHJpY2xvYWRkb3duLmh0bWw=");
    document.getElementById('_next').value = decoded_return_url;

    var decoded_email_download = atob("aHR0cHM6Ly9mb3Jtc3ByZWUuaW8vc3VwcG9ydCtkb3dubG9hZEBtZXRyaWN1bG91cy5uZXR3b3Jr");
    document.getElementById('download-form').action = decoded_email_download;

    //
    // var decoded = atob("aHR0cHM6Ly9mb3Jtc3ByZWUuaW8vc2JhdHR5K21ldHJpY3Vsb3VzQGdtYWlsLmNvbQ==");



}
