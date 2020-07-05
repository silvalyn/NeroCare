const LoginOverlay = document.querySelector('#loginOverlayhome');
const Loginvalue = document.querySelector('#Hospital');
const Loginvalue2 = document.querySelector('#Clinc');

// // alert(Loginvalue.value);
var email = document.getElementById('Loginemail');
var password = document.getElementById('Loginpassword');
var name1 = document.getElementById('LoginName');



LoginOverlay.addEventListener('submit', (e) => {
    e.preventDefault();

    if (email.value.length < 1) {

        alert('Please enter an email address.');
        return;
    } else if (password.value.length < 4) {
        alert('Please enter a password.');
        return;
    } else {

        firebase.auth().signInWithEmailAndPassword(email.value, password.value).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            window.alert("Error : " + errorMessage);

            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }

        });

        // alert(Loginvalue.value)
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                if (document.getElementById('Hospital').checked) {
                    // alert(Loginvalue.value)
                    location.replace('home.html')
                }
                if (document.getElementById('Clinc').checked) {
                    // alert(Loginvalue.value)

                    location.replace('clinic.html')

                }
                if (document.getElementById('Pharmacy').checked) {
                    // alert(Loginvalue.value)

                    location.replace('pharmacy.html')

                }
                if (document.getElementById('Patient').checked) {
                    // alert(Loginvalue.value)

                    location.replace('patient.html')

                }
                if (document.getElementById('Doctor').checked) {
                    // alert(Loginvalue.value)

                    location.replace('doctor.html')

                }
                if (document.getElementById('Nurse').checked) {
                    // alert(Loginvalue.value)

                    location.replace('home.html')

                }
                if (document.getElementById('LAB').checked) {
                    // alert(Loginvalue.value)

                    location.replace('lab.html')

                }

            }
        })




    }
    // [END authwithemail]



})