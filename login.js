const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});
function checkInputs() {
	// trim to remove the whitespaces
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
    }
    if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
    }
}
    function setErrorFor(input, message) {
        const secondValue = input.parentElement;
        const small = secondValue.querySelector('small');
        secondValue.className = 'second error';
                    small.innerText = message;
    }
    function setSuccessFor(input) {
        const secondValue = input.parentElement;
        secondValue.className = 'second success';
    }
