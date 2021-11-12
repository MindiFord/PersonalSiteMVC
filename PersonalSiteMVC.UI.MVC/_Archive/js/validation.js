function validateForm(event) {
let controls = document.getElementsByClassName('form-control');
console.log(controls);

let validationMessages = document.getElementsByClassName('text-danger');
console.log(validationMessages)

let rxpEmail = new RegExp(/^[\w-\.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
let nxpName = new RegExp(/^[A-Z ]+$/);

//Checking for empty areas
if (controls['name'].value.length == 0 || controls['email'].value.length == 0 || controls['subject'].value.length == 0 || controls['message'].value.length == 0 || !rxpEmail.test(controls['email'].value) || !rxpName.text(controls['name'].value)) {

    //stop form from submitting
    event.preventDefault();

    //individual error messages
    //**NAME

    if (controls['name'].value.length == 0) {
        validationMessages['rfvName'].textContent = "* Name is required.";
    }
    else {
        validationMessages['rfvName'].textContent = "";
    }

    //**Name - regex/pattern
    if (!rxpName.test(controls['name'].value) && controls['name'].value.length > 0) {
        validationMessages['rfvName'].textContent = "* Name must only include alphabetical characters";
    }
    //removes error message after they fix it & re-submit
    if (rxpName.test(controls['name'].value) && controls['name'].value.length > 0) {
        validationMessages['rfvName'].textContent = "";
    }

    //**EMAIL
    
    if (controls['email'].value.length == 0) {
        validationMessages['rfvEmail'].textContent = "* Email is required.";
    }
    else {
        validationMessages['rfvEmail'].textContent = "";
    }

    //**Email - regex/pattern
    if (!rxpEmail.test(controls['email'].value) && controls['email'].value.length > 0) {
        validationMessages['rfvEmail'].textContent = "* Please enter a valid email address";
    }
   
    if (rxpEmail.test(controls['email'].value) && controls['email'].value.length > 0) {
        validationMessages['rfvEmail'].textContent = "";
    }

    //**TEXTBOX
    
    if (controls['message'].value.length == 0) {
        validationMessages['rfvMessage'].textContent = "* Message is required.";
    }
    else {
        validationMessages['rfvMessage'].textContent = "";
    }

}
}

