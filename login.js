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
            // img.src = imgUrl;
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

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        db.collection('Patients').doc(patientpic.value).set({
            userID: user.uid
        })

    }

})

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
        PlaceOfBirth: creatPatient.BirthPlace.value,
        DateofBirth: creatPatient.DateOfBirth.value,
        PatientNumber: creatPatient.PatientNumber.value


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
        BMI: creatPatient.BMI.value,
        // DateofBirth: creatPatient.DateOfBirth.value,
        PatientNumber: creatPatient.PatientNumber.value

    });



    // auth.signOut();

    // window.location.replace('home.html');



})
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        db.collection('Patients').doc(patientpic.value).set({
            userID: user.uid
        })

    }

})

function signupbtn() {

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            alert('You have successfully created a patient');
            window.location.replace('home.html')
        }

    })
}
// var Cash = document.querySelector('#cashoverlay');

// const submitcashh = document.querySelector('#cashoverlay');



// function submitcashvalue() {
//     var Amount = document.getElementById('CashAmount');
//     if (Amount.value.length < 1) {
//         alert('Please enter Amount.');
//     } else {
//         var ID = document.getElementById('patientsID');
//         var hospital = document.getElementById('Hospitalpatientlist');
//         var docRef = db.collection("Patients").doc(ID.value);
//         var today = new Date();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         var fullname = db.collection("Patients").doc(ID.value).collection("PatientData").doc("Clinical Data");
//         var fullnamevalue = db.collection("Patients").doc(ID.value).collection("PatientData").doc("DemographicData");


//         docRef.get().then(function (doc) {
//             if (doc.exists) {

//                 db.collection('Patients').doc(ID.value).collection('PatientData').doc('AdministrativeData').collection('CashPayments').add({
//                     amount: Amount.value



//                 });
//                 db.collection('Hospitals').doc(hospital.value).collection('Patients').doc(ID.value).collection('time').add({
//                     Time: time
//                 })
//                 alert('You have checked In')

//                 // document.getElementById("overlaycash").style.display = "none";

//             } else {
//                 // doc.data() will be undefined in this case
//                 alert("No such document!");
//             }
//         }).catch(function (error) {
//             console.log("Error getting document:", error);
//         });

//         fullname.get().then(function (doc) {
//             if (doc.exists) {

//                 // db.collection('Patients').doc(ID.value).collection('PatientData').doc('AdministrativeData').collection('CashPayments').add({
//                 //     amount: Amount.value



//                 // });
//                 db.collection('Hospitals').doc(hospital.value).collection('Patients').add({
//                     Time: time,
//                     data: doc.data()
//                 })
//                 alert('You have checked In')

//                 // document.getElementById("overlaycash").style.display = "none";

//             } else {
//                 // doc.data() will be undefined in this case
//                 alert("No such document!");
//             }
//         }).catch(function (error) {
//             console.log("Error getting document:", error);
//         });

//         return;

//     }
// }

// function submitmedical() {
//     var name = document.getElementById('MedicalName');
//     var lastname = document.getElementById('LastName');
//     var organisation = document.getElementById('Organisation');
//     var MemberNumber = document.getElementById('MemberNo');
//     var Notes = document.getElementById('Condition');


//     if (name.value.length < 1) {
//         // User is signed in.


//         alert('Please enter Full Name.');
//     } else if (lastname.value.length < 1) {
//         alert('Please enter Last Name.');
//     } else if (organisation.value.length < 1) {
//         alert('Please enter Organisation.');
//     } else if (MemberNumber.value.length < 1) {
//         alert('Please enter Member Number.');
//     } else if (Notes.value.length < 1) {
//         alert('Please Write Condition.');
//     } else {
//         var ID = document.getElementById('patientsID');
//         var hospital = document.getElementById('Hospitalpatientlist');

//         //         // No user is signed in.

//         //         // document.getElementById("overlaycash").style.display = "block";
//         //     }
//         var docRef = db.collection("Patients").doc(ID.value);
//         var today = new Date();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


//         docRef.get().then(function (doc) {
//             if (doc.exists) {
//                 db.collection('Patients').doc(ID.value).collection('PatientData').doc('AdministrativeData').collection('Medical Payments').add({
//                     Name: name.value,
//                     LastName: lastname.value,
//                     Organisation: organisation.value,
//                     MemberNumber: MemberNumber.value,
//                     Condition: Notes.value


//                 });
//                 db.collection('Hospitals').doc(hospital.value).collection('Patients').doc(ID.value).collection('time').add({
//                     Time: time
//                 })
//                 alert('You have checked In')
//             } else {
//                 // doc.data() will be undefined in this case
//                 alert("No such document!");
//             }
//         }).catch(function (error) {
//             console.log("Error getting document:", error);
//         });
//         // document.getElementById("overlayMedical").style.display = "none";

//         return;

//     }
// }
// const Submitpaypal1 = document.querySelector('#Paypalid');


// Submitpaypal1.addEventListener('submit', (e) => {

//     e.preventDefault();

//     const namepaypal = Submitpaypal['paypalname'].value;
//     const Address = Submitpaypal['Address'].value;
//     const ZipCode = Submitpaypal['ZipCode'].value;
//     const Country = Submitpaypal['country'].value;
//     const CardNumber = Submitpaypal['CardNumber'].value;
//     const CardHolder = Submitpaypal['CardHolder'].value;
//     const CCVV = Submitpaypal['CVV'].value;
//     const ExpDate = Submitpaypal['date'].value;

//     console.log(namepaypal)

// if (namepaypal.value.length < 1) {
//     // User is signed in.


//     alert('Please enter Full Name.');
// } else if (Address.length < 1) {
//     alert('Please enter Address.');
// } else if (ZipCode.length < 1) {
//     alert('Please enter ZipCode.');
// } else if (Country.length < 1) {
//     alert('Please select country.');
// } else if (CardNumber.length < 1) {
//     alert('Please enter Card Number.');
// } else if (CardHolder.length < 1) {
//     alert('Please enter Card Holder.');
// } else if (CCVV.length < 1) {
//     alert('Please enter CVV.');
// } else if (ExpDate.length < 1) {
//     alert('Please enter Expire Data.');
// }
// else {
//     var ID = document.getElementById('patientsID');
//     var hospital = document.getElementById('Hospitalpatientlist');

//     //         // No user is signed in.

//     //         // document.getElementById("overlaycash").style.display = "block";
//     //     }
//     var docRef = db.collection("Patients").doc(ID.value);
//     var today = new Date();
//     var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


//     docRef.get().then(function (doc) {
//         if (doc.exists) {
//             db.collection('Patients').doc(ID.value).collection('PatientData').doc('AdministrativeData').collection('Paypal Payments').add({
//                 Name: namepalypal.value,
//                 Address: Address.value,
//                 ZipCode: ZipCode.value,
//                 Country: Country.value,
//                 CardNumber: CardNumber.value,
//                 CardHolder: CardHolder.value,
//                 CVV: CCVV.value,



//             });
//             db.collection('Hospitals').doc(hospital.value).collection('Patients').doc(ID.value).collection('time').add({
//                 Time: time
//             })
//             alert('You have checked In')
//         } else {
//             // doc.data() will be undefined in this case
//             alert("No such document!");
//         }
//     }).catch(function (error) {
//         console.log("Error getting document:", error);
//     });
//     // document.getElementById("overlayPaypal").style.display = "none";

//     return;

// }



// })


// function submitvisa() {
//     var visaname = document.getElementById('visaname');
//     var visaAddress = document.getElementById('visaAddress');
//     var visaZipCode = document.getElementById('visaZipCode');
//     var visaCountry = document.getElementById('visaCountry');
//     var visaCardNumber = document.getElementById('visaCardNumber');
//     var visaCardHolder = document.getElementById('visaCardHolder');
//     var visaCCVV = document.getElementById('visaCVV');
//     var visaExpDate = document.getElementById('visadate');


//     if (visaname.value.length < 1) {
//         // User is signed in.


//         alert('Please enter Full Name.');
//     } else if (visaAddress.value.length < 1) {
//         alert('Please enter Address.');
//     } else if (visaZipCode.value.length < 1) {
//         alert('Please enter ZipCode.');
//     } else if (visaCountry.value.length < 1) {
//         alert('Please select country.');
//     } else if (visaCardNumber.value.length < 1) {
//         alert('Please enter Card Number.');
//     } else if (visaCardHolder.value.length < 1) {
//         alert('Please enter Card Holder.');
//     } else if (visaCCVV.value.length < 1) {
//         alert('Please enter CVV.');
//     } else if (visaExpDate.value.length < 1) {
//         alert('Please enter Expire Data.');
//     }
//     else {
//         var ID = document.getElementById('patientsID');
//         var hospital = document.getElementById('Hospitalpatientlist');

//         //         // No user is signed in.

//         //         // document.getElementById("overlaycash").style.display = "block";
//         //     }
//         var docRef = db.collection("Patients").doc(ID.value);
//         var today = new Date();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


//         docRef.get().then(function (doc) {
//             if (doc.exists) {
//                 db.collection('Patients').doc(ID.value).collection('PatientData').doc('AdministrativeData').collection('Visa Payments').add({
//                     Name: visaname.value,
//                     Address: visaAddress.value,
//                     ZipCode: visaZipCode.value,
//                     Country: visaCountry.value,
//                     CardNumber: visaCardNumber.value,
//                     CardHolder: visaCardHolder.value,
//                     CVV: visaCCVV.value,



//                 });
//                 db.collection('Hospitals').doc(hospital.value).collection('Patients').doc(ID.value).collection('time').add({
//                     Time: time
//                 })
//                 alert('You have checked In')
//             } else {
//                 // doc.data() will be undefined in this case
//                 alert("No such document!");
//             }
//         }).catch(function (error) {
//             console.log("Error getting document:", error);
//         });
//         // document.getElementById("overlayVisa").style.display = "none";

//         return;

//     }
// }





// function submitcashfinal() {
//     window.location.replace("hh")

// }




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
