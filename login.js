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


