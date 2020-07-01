

const mycash = document.querySelector('#overlaycash');

var Amount = document.getElementById('CashAmount');


mycash.addEventListener('submit', (e) => {
    e.preventDefault();

    if (Amount.value.length < 1) {
        alert('Please enter Amount.');
    } else {
        var ID = document.getElementById('patientsID');
        var hospital = document.getElementById('Hospitalpatientlist');
        var docRef = db.collection("Patients").doc(ID.value);
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var fullname = db.collection("Patients").doc(ID.value).collection("PatientData").doc("Clinical Data");
        var fullnamevalue = db.collection("Patients").doc(ID.value).collection("PatientData").doc("DemographicData");


        docRef.get().then(function (doc) {
            if (doc.exists) {

                db.collection('Patients').doc(ID.value).collection('PatientData').doc('AdministrativeData').collection('CashPayments').add({
                    amount: Amount.value



                });


            } else {
                // doc.data() will be undefined in this case
                alert("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });



        fullnamevalue.get().then(function (doc) {
            if (doc.exists) {

                db.collection('Hospitals').doc(hospital.value).collection('Patients').doc(ID.value).set(

                    doc.data()




                )
                db.collection('Hospitals').doc(hospital.value).collection('Outpatient').doc(ID.value).set(

                    doc.data()




                )

                alert('You have checked In')

                // document.getElementById("overlaycash").style.display = "none";

            } else {
                // doc.data() will be undefined in this case
                alert("No such document!");
            }


        }).catch(function (error) {
            console.log("Error getting document:", error);
        });

        return;

    }





    // document.getElementById("referehistory").style.display = "none";


})






const myMedical = document.querySelector('#overlayMedical');

// var Amount = document.getElementById('CashAmount');
var name = document.getElementById('MedicalName');
var lastname = document.getElementById('LastName');
var organisation = document.getElementById('Organisation');
var MemberNumber = document.getElementById('MemberNo');
var Notes = document.getElementById('Condition');


myMedical.addEventListener('submit', (e) => {
    e.preventDefault();

    if (name.value.length < 1) {
        // User is signed in.


        alert('Please enter Full Name.');
    } else if (lastname.value.length < 1) {
        alert('Please enter Last Name.');
    } else if (organisation.value.length < 1) {
        alert('Please enter Organisation.');
    } else if (MemberNumber.value.length < 1) {
        alert('Please enter Member Number.');
    } else if (Notes.value.length < 1) {
        alert('Please Write Condition.');
    } else {
        var ID = document.getElementById('patientsID');
        var hospital = document.getElementById('Hospitalpatientlist');
        var docRef = db.collection("Patients").doc(ID.value);
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var fullname = db.collection("Patients").doc(ID.value).collection("PatientData").doc("Clinical Data");
        var fullnamevalue = db.collection("Patients").doc(ID.value).collection("PatientData").doc("DemographicData");




        docRef.get().then(function (doc) {
            if (doc.exists) {
                db.collection('Patients').doc(ID.value).collection('PatientData').doc('AdministrativeData').collection('Medical Payments').add({
                    Name: name.value,
                    LastName: lastname.value,
                    Organisation: organisation.value,
                    MemberNumber: MemberNumber.value,
                    Condition: Notes.value


                });
                // db.collection('Hospitals').doc(hospital.value).collection('Patients').doc(ID.value).collection('time').add({
                //     Time: time
                // })



            } else {
                // doc.data() will be undefined in this case
                alert("No such document!");
            }




        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
        // document.getElementById("overlayMedical").style.display = "none";

        fullnamevalue.get().then(function (doc) {
            if (doc.exists) {

                db.collection('Hospitals').doc(hospital.value).collection('Patients').doc(ID.value).set(

                    doc.data()




                )

                alert('You have checked In')

                // document.getElementById("overlaycash").style.display = "none";

            } else {
                // doc.data() will be undefined in this case
                alert("No such document!");
            }


        }).catch(function (error) {
            console.log("Error getting document:", error);
        });



        return;

    }
    // document.getElementById("referehistory").style.display = "none";


})







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


//             } else {
//                 // doc.data() will be undefined in this case
//                 alert("No such document!");
//             }
//         }).catch(function (error) {
//             console.log("Error getting document:", error);
//         });



//         fullnamevalue.get().then(function (doc) {
//             if (doc.exists) {

//                 db.collection('Hospitals').doc(hospital.value).collection('Patients').doc(ID.value).set(

//                     doc.data()




//                 )
//                 db.collection('Hospitals').doc(hospital.value).collection('Outpatient').doc(ID.value).set(

//                     doc.data()




//                 )

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


function submitmedical() {
    var name = document.getElementById('MedicalName');
    var lastname = document.getElementById('LastName');
    var organisation = document.getElementById('Organisation');
    var MemberNumber = document.getElementById('MemberNo');
    var Notes = document.getElementById('Condition');


    if (name.value.length < 1) {
        // User is signed in.


        alert('Please enter Full Name.');
    } else if (lastname.value.length < 1) {
        alert('Please enter Last Name.');
    } else if (organisation.value.length < 1) {
        alert('Please enter Organisation.');
    } else if (MemberNumber.value.length < 1) {
        alert('Please enter Member Number.');
    } else if (Notes.value.length < 1) {
        alert('Please Write Condition.');
    } else {
        var ID = document.getElementById('patientsID');
        var hospital = document.getElementById('Hospitalpatientlist');
        var docRef = db.collection("Patients").doc(ID.value);
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var fullname = db.collection("Patients").doc(ID.value).collection("PatientData").doc("Clinical Data");
        var fullnamevalue = db.collection("Patients").doc(ID.value).collection("PatientData").doc("DemographicData");




        docRef.get().then(function (doc) {
            if (doc.exists) {
                db.collection('Patients').doc(ID.value).collection('PatientData').doc('AdministrativeData').collection('Medical Payments').add({
                    Name: name.value,
                    LastName: lastname.value,
                    Organisation: organisation.value,
                    MemberNumber: MemberNumber.value,
                    Condition: Notes.value


                });
                // db.collection('Hospitals').doc(hospital.value).collection('Patients').doc(ID.value).collection('time').add({
                //     Time: time
                // })



            } else {
                // doc.data() will be undefined in this case
                alert("No such document!");
            }




        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
        // document.getElementById("overlayMedical").style.display = "none";

        fullnamevalue.get().then(function (doc) {
            if (doc.exists) {

                db.collection('Hospitals').doc(hospital.value).collection('Patients').doc(ID.value).set(

                    doc.data()




                )

                alert('You have checked In')

                // document.getElementById("overlaycash").style.display = "none";

            } else {
                // doc.data() will be undefined in this case
                alert("No such document!");
            }


        }).catch(function (error) {
            console.log("Error getting document:", error);
        });



        return;

    }
}






