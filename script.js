const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", e => {
    e.preventDefault();

    var tfirstName = firstName.value.trim();
    var tlastName = lastName.value.trim();
    var temail = email.value.trim();
    var tpassword = password.value.trim();
    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (tfirstName === '') {
        errorFunc(firstName, 'First Name cannot empty');
    } else {
        sucessFunc(firstName);
    }

    if (tlastName === '') {
        errorFunc(lastName, 'Last Name cannot empty');
    } else {
        sucessFunc(lastName);
    }

    if (temail === '') {
        errorFunc(email, 'Email cannot empty');
    } else if (!temail.match(pattern)) {
        errorFunc(email, 'Not a valid email adress')

    } else {
        sucessFunc(email);
    }

    if (tpassword === '') {
        errorFunc(password, 'Password cannot empty');
    } else {
        sucessFunc(password);
    }
})

function errorFunc(req, message) {
    const formControl = req.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    req.className += "error";
    small.className += "error-text";

    if (req !== email) {
        req.value = ' ';
    } else {
        req.style.color = "hsl(0, 100%, 74%)";
    }
}

function successFunc(req) {
    req.className += "sucess";
}