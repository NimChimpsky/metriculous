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

}
