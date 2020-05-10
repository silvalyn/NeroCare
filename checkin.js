function submitcashvalue() {
    var Amount = document.getElementById('CashAmount');
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

                // alert('You have checked In')

                // document.getElementById("overlaycash").style.display = "none";

            } else {
                // doc.data() will be undefined in this case
                alert("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });

        // fullname.get().then(function (doc) {
        //     if (doc.exists) {

        //         db.collection('Hospitals').doc(hospital.value).collection('Patients').doc(ID.value).set(
        //             // Time: time,
        //             doc.data()
        //         )
        //         // alert('You have checked In')

        //         // document.getElementById("overlaycash").style.display = "none";

        //     } else {
        //         // doc.data() will be undefined in this case
        //         alert("No such document!");
        //     }
        // }).catch(function (error) {
        //     console.log("Error getting document:", error);
        // });


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