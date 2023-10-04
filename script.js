function validateFile(inputId, errorId) {
    const input = document.getElementById(inputId);
    const errorSpan = document.getElementById(errorId);
    const allowedFormats = {
        'passportUpload': ['.jpg', '.png'],
        'diplomaUpload': ['.pdf'],
    };

    const fileName = input.value;
    const fileExtension = fileName.substring(fileName.lastIndexOf('.'));

    if (!allowedFormats[inputId].includes(fileExtension.toLowerCase())) {
        errorSpan.innerText = "invalidFileFormat";
        input.value = ''; // Clear the file input
        errorSpan.style.color = 'red';
    } else {
        errorSpan.innerText = "fileUploaded";
        errorSpan.style.color = 'green';
    }
}

function validateSignUpForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;

    // Clear previous error messages
    document.getElementById('email-error').innerText = '';
    document.getElementById('password-error').innerText = '';

    if (!emailRegex.test(email)) {
        document.getElementById('email-error').innerText = "invalidEmail";
        return false;
    }

    if (password.length < 8) {
        document.getElementById('password-error').innerText = "passwordLength";
        return false;
    }

    return true;
}

/**
 * Function to validate the submission form.
 */
function validateSubmissionForm() {
    const passportUpload = document.getElementById('passportUpload').value;
    const diplomaUpload = document.getElementById('diplomaUpload').value;
    
    // Clear previous error messages
    document.getElementById('passport-error').innerText = '';
    document.getElementById('diploma-error').innerText = '';


    const passportFileName = passportUpload.substring(passportUpload.lastIndexOf('\\') + 1);
    const diplomaFileName = diplomaUpload.substring(diplomaUpload.lastIndexOf('\\') + 1);

    const allowedPassportFormats = ['.jpg', '.png'];
    const allowedDiplomaFormats = ['.pdf'];

    const passportFileExtension = passportFileName.substring(passportFileName.lastIndexOf('.')).toLowerCase();
    const diplomaFileExtension = diplomaFileName.substring(diplomaFileName.lastIndexOf('.')).toLowerCase();

    if (!allowedPassportFormats.includes(passportFileExtension)) {
        document.getElementById('passport-error').innerText = "invalidFileFormat";
        return false;
    }

    if (!allowedDiplomaFormats.includes(diplomaFileExtension)) {
        document.getElementById('diploma-error').innerText = "invalidFileFormat";
        return false;
    }

    return true;
}

