const form = document.getElementById('form')
const name = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('message')
let flag= "off"
let flagname = "off"
let flagemail = "off"
let flagmesagge = "off"

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	
	const nameValue = name.value.trim()
	const emailValue = email.value.trim()
	const messageValue = message.value.trim()
	try {
        if (flag === "off"){
            if(nameValue === '') {
                setErrorFor(name, 'This field is required');
            } else if (!isName(nameValue)) {
                setErrorFor(name, 'Not a valid name');
            } else {
                setSuccessFor(name);
                flagname = "on";
            }
            if(emailValue === '' ) {
                setErrorFor(email, 'This field is required');
            } else if (!isEmail(emailValue)) {
                setErrorFor(email, 'Not a valid email');
            } else {
                setSuccessFor(email);
                flagemail = "on";
            }
            if(messageValue === '') {
                setErrorFor(message, 'This field is required');
            } else {
                setSuccessFor(message);
                flagmesagge = "on"
            }
            }
    } catch {
        console.log("Error", error);
        console.log("Error name", error.name);
        console.log("Error Message", error.message);
    }
}

//  Controla error y ok, de los campos a ingresar

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'control success';
}

// Funciones para validar regexr

function isEmail(email) {
	return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}

function isName(name) {
	return /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
}

//  Funcion que captura y muestra por consola los datos ingresados

const getData = () => {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
	
    if (name === "") {
        const name = document.getElementById("name").focus();
    } else {
        if (email === "") {
            const name = document.getElementById("email").focus();
        } else {
			if (message === "") {
				const message = document.getElementById("mesagge").focus();
        } else {	
				if ( flagname === "on" & flagemail === "on" & flagmesagge === "on") {
					flag="ok";	
					console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
                    document.getElementById("name").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("message").value = "";
				}
			}      
		}
    }
}