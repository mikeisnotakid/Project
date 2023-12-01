const messageForm = document.getElementById("message-form");

messageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const successMessageBox = document.getElementById("success-message");

    const fullNameInputTag = document.getElementById("fname");
    const emailInputTag = document.getElementById("email");
    const messageTextareaTag = document.getElementById("textarea");


    fullNameInputTag.style.backgroundColor = 'white';
    emailInputTag.style.backgroundColor = 'white';
    messageTextareaTag.style.backgroundColor = 'white';


    let fullName = fullNameInputTag.value;
    let email = emailInputTag.value;
    let message = messageTextareaTag.value;

    if (fullName && email && message) {
        // Send to thef following values to the server to save 
        // messageForm.submit()
        // fullName
        // email
        // message 

        // When the server responds true, alert the user of success
        successMessageBox.innerHTML = ` Hello ${fullName}, your response has been recorded `
        successMessageBox.style.display = 'block';

        fullNameInputTag.value = '';
        emailInputTag.value = '';
        messageTextareaTag.value = '';

    } else {
        if (fullName == '') {
            fullNameInputTag.style.backgroundColor = 'rgb(255 0 0 / 15%)';
        } else if (email == '') {
            emailInputTag.style.backgroundColor = 'rgb(255 0 0 / 15%)';

        } else if (message == '') {
            messageTextareaTag.style.backgroundColor = 'rgb(255 0 0 / 15%)';
        } else {
            pass;
        }
    }

})