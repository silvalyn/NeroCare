let file = {};
function chooseFile(e) {
    file = e.target.files[0];

}
let img = document.getElementById('profileImage');
let emailbtn = document.getElementById('divpatient2');
let passwordbtn = document.getElementById('divpatient3');
let choosebtn = document.getElementById('divpatient1');
let signup = document.getElementById('signup');
function signupbtn() {
    var patientEmail = document.getElementById('PatientemailAddress').value;
    var patientpassword = document.getElementById('patientpassword').value;

    if (patientEmail.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (patientpassword.length < 4) {
        alert('Please enter a password.');
        return;
    }
    firebase.auth().createUserWithEmailAndPassword(patientEmail, patientpassword).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
    }).then(auth => {
        firebase.storage().ref('patients/' + auth.user.uid + '/profilePic.jpg').put(file).then(function () {
            console.log('successfull')
        }).catch(error => {
            alert(errorMessage);
        })
    })

}
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        firebase.storage().ref('patients/' + user.uid + '/profilePic.jpg').getDownloadURL().then(imgUrl => {
            img.src = imgUrl;
            signup.style.visibility = 'hidden';
            emailbtn.style.visibility = 'hidden';
            passwordbtn.style.visibility = 'hidden';
            choosebtn.style.visibility = 'hidden';
        })
    } else {
        signup.style.visibility = 'visible';
        emailbtn.style.visibility = 'visible';
        passwordbtn.style.visibility = 'visible';
        choosebtn.style.visibility = 'visible';
    }
})
const creatPatient = document.querySelector('#createPatient');
var patientpic = document.getElementById("PatientNumber");

creatPatient.addEventListener('submit', (e) => {
    e.preventDefault();


    db.collection('Patients').doc(patientpic.value).collection('PatientData').doc('DemographicData').set({
        name: creatPatient.patientName.value,
        Address: creatPatient.Address.value,
        Citizenship: creatPatient.Citizenship.value,
        DailyJob: creatPatient.DailyJob.value,
        EmailAddress: creatPatient.PatientemailAddress.value,
        FamilyDetails: creatPatient.FamilyDetails.value,
        Gender: creatPatient.gender.value,
        Nationality: creatPatient.Nationality.value,
        NextOfKin: creatPatient.NextofKin.value,
        Religion: creatPatient.Religion.value,
        City: creatPatient.City.value,
        ContactDetails: creatPatient.ContactDetails.value,
        MaritalStatus: creatPatient.MaritalStatus.value,
        PlaceOfBirth: creatPatient.BirthPlace.value

    })
    db.collection('Patients').doc(patientpic.value).collection('PatientData').doc('Clinical Data').set({
        BloodType: creatPatient.BloodType.value,
        Hieght: creatPatient.Hieght.value,
        ChronicDisease: creatPatient.chronicDisease.value,
        HIVStatus: creatPatient.HIVStatus.value,
        Allergies: creatPatient.Allergies.value,
        PatientClass: creatPatient.PatientClass.value,
        SmokingStatus: creatPatient.smoking.value,
        Disability: creatPatient.Disabilities.value,
        AlcholeConsumption: creatPatient.Alcohole.value,
        BMI: creatPatient.BMI.value

    })


})



db.collection('Hospitals').doc('UBH').collection('Patients').get().then(snapshot => {
    setupList(snapshot.docs)
})
//createt patients




function toggleSignIn() {
    if (firebase.auth().currentUser) {
        // User is signed in.

        firebase.auth().signOut();
        // document.getElementById("Login").style.color = "Red"

        // var user = firebase.auth().currentUser;

        // if (user != null) {
        //     var email_id = user.email;
        //     document.getElementById("password").innerHTML = "welcome : " + email_id;

        // }

    } else {
        // No user is signed in.
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (email.length < 4) {
            alert('Please enter an email address.');
            return;
        }
        if (password.length < 4) {
            alert('Please enter a password.');
            return;
        }

        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
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

            console.log(error);
            document.getElementById('Login').disabled = false;
            // [END_EXCLUDE]
        });
        // [END authwithemail]
    }

    function sendPasswordReset() {
        var email = document.getElementById('email').value;
        // [START sendpasswordemail]
        firebase.auth().sendPasswordResetEmail(email).then(function () {
            // Password Reset Email Sent!
            // [START_EXCLUDE]
            alert('Password Reset Email Sent!');
            // [END_EXCLUDE]
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode == 'auth/invalid-email') {
                alert(errorMessage);
            } else if (errorCode == 'auth/user-not-found') {
                alert(errorMessage);
            }
            console.log(error);
            // [END_EXCLUDE]
        });
        // [END sendpasswordemail];
    }
    // document.getElementById('Login').disabled = true;
    //     }
    //     });

    //     firebase.auth().onAuthStateChanged(firebaseUser => {
    //         if (firebaseUser) {
    //             window.open('home.html')
    //         }
    //     })

    // }
    // });
    // function login2() {
    //     firebase.auth().signOut();
    // }
}
function sendPasswordReset() {
    var email = document.getElementById('email').value;
    // [START sendpasswordemail]
    firebase.auth().sendPasswordResetEmail(email).then(function () {
        // Password Reset Email Sent!
        // [START_EXCLUDE]
        alert('Password Reset Email Sent!');
        // [END_EXCLUDE]
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/invalid-email') {
            alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
            alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
    });
    // [END sendpasswordemail];
}
function initApp() {
    // Listening for auth state changes.
    // [START authstatelistener]
    firebase.auth().onAuthStateChanged(function (user) {
        // [START_EXCLUDE silent]
        // document.getElementById('quickstart-verify-email').disabled = true;
        // [END_EXCLUDE]
        if (user) {
            // User is signed in.
            // window.open('home.html')
            location.href = "home.html";
            // [END_EXCLUDE]

        } else {


        }
        // [START_EXCLUDE silent]
        document.getElementById('Login').disabled = false;

        // window.close()


        // [END_EXCLUDE]
    });
    // [END authstatelistener]

    document.getElementById('Login').addEventListener('click', toggleSignIn, false);


    document.getElementById('reset').addEventListener('click', sendPasswordReset, false);
}

// window.onload = function () {
//     initApp();

// };
const logout = document.querySelector('#signout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        alert('User Sign out');
        window.location.replace('index.html')
    })

})
// const login = document.querySelector('#Login');
// login.addEventListener('click', (e) => {
//     e.preventDefault();
//     login = function () {
//         initApp();
//     };
// })
