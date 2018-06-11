/**
 * Created by stephenbatty on 11/06/2018.
 */
function toggleForm() {

    if (document.getElementById('contact-form').style.display == 'block') {
        document.getElementById('contact-form').style.display = 'none';
        document.getElementById('desc').style.display = 'block';
    } else {
        document.getElementById('contact-form').style.display = 'block';
        document.getElementById('desc').style.display = 'none';
    }
}