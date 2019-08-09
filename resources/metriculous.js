function sendContactForm() {
    //if you are here this is just to hopefully reduce webscrapinga
    var decoded = atob("aHR0cHM6Ly9mb3Jtc3ByZWUuaW8vc2JhdHR5K21ldHJpY3Vsb3VzQGdtYWlsLmNvbQ==");
    document.getElementById('contact-form').action = decoded;

}

function toogleDownloadForm() {
    document.getElementById("rootBody").classList.toggle('fade');
    document.getElementById("downloadFormAndEula").classList.toggle('fade');
}

function submitEmailAndDownload() {

}
