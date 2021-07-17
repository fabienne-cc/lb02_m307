const gender = document.getElementById('gender')
const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const birthday = document.getElementById('birthday')
const phonenumber = document.getElementById('phonenumber')
const password = document.getElementById('password')
const email = document.getElementById('email')
const form = document.getElementById('form');

function sendForm(){
    // make request to backend with all properties of form
    const SERVER = "http://localhost:3000";
    fetch(SERVER+'/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'no-cors',
        body: JSON.stringify(
            {
                gender: gender.value,
                firstname: firstname.value,
                lastname: lastname.value,
                birthday: birthday.value,
                phonenumber: phonenumber.value,
                password: password.value,
                email: email.value
            })
        }).then(test => console.log(test));
    }

// listen to submit event of form
form.addEventListener('submit', function (e) {
    e.preventDefault();
    sendForm()
});
