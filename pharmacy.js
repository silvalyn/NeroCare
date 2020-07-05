const PharmacyPatient = document.querySelector('#overlaypharmacy');
const PharmacyPrescrip = document.querySelector('#overlayprescrip');

var PatientNumberPharmacy = document.getElementById('PharmacyPatientID');
var PrescripNumberPharmacy = document.getElementById('prescripnum');

var today = new Date();
var time = today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear() + "-" + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


PharmacyPatient.addEventListener('submit', (e) => {
    e.preventDefault();

    db.collection('Patients').doc(PatientNumberPharmacy.value).collection('PatientData').doc('Clinical Data').collection('Prescriptions').get().then(snapshot => {
        Pharmacy(snapshot);
        // console.log(snapshot.docs)
    });
    db.collection("Patients").doc(PatientNumberPharmacy.value).collection("PatientData").get().then((snapshot) => {
        // console.log(snapshot.docs);
        snapshot.docs.forEach(doc => {
            inputdata1(doc);
        });

        inputdata1(doc);
        // window.location.replace('patientPortal.html');

    });

    document.getElementById("pharmacypatientlist1").style.display = "block";
    document.getElementById("overlaypharmacy").style.display = "none";
    document.getElementById("pharmacyhome").style.display = "none";


});


PharmacyPrescrip.addEventListener('submit', (e) => {
    e.preventDefault();
    const prescriptiondetail = document.querySelector('#prescripnotes1');


    // db.collection('Patients').doc(PatientNumberPharmacy.value).collection('PatientData').doc('Clinical Data').collection('Prescriptions').doc(PrescripNumberPharmacy.value).get().then(snapshot => {

    //     Pharmacydetails(snapshot.doc);


    //     // window.location.replace('patientPortal.html');
    //     // console.log(snapshot.docs)
    // });

    var docRef = db.collection("Patients").doc(PatientNumberPharmacy.value).collection("PatientData").doc("Clinical Data").collection("Prescriptions").doc(PrescripNumberPharmacy.value);

    docRef.get().then(function (doc) {
        if (doc.exists) {
            const prescripdata = doc.data();



            prescriptiondetail.textContent = prescripdata.Notes;

            // prescripnotes1.appendChild(prescripnotesvalue1);

            // console.log("Document data:", doc.data());


        } else {
            // doc.data() will be undefined in this case
            // console.log("No such document!");
            alert("no Such Document")
        }
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });

    db.collection("Pharmacy").doc('Trinity Pharmacy').collection("Dispensed Px").add({
        Time: time,
        PatientName: PatientNumberPharmacy.value
    })


    document.getElementById("PrescriptionOverlay2").style.display = "Block";
    document.getElementById("overlayprescrip").style.display = "none";
    document.getElementById("pharmacypatientlist1").style.display = "none";


});






const patientListpharmacy = document.querySelector('#Pharmacylistdata');


function Pharmacy(data) {


    let html = '';
    data.forEach(doc => {

        const patient = doc.data();
        // var PatientN0 = patient.getString("PatientNumber");
        // var today = new Date();
        // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const pd = `


                        <tr>
                            <td>
                            ${patient.PrescriptionNumber}
                            </td>
                            <td>
                              ${patient.Time}
                            </td>
                            <td>
                             ${doc.id}
                            </td>
                            <td>
                             ${patient.Notes}

                            </td>


                        </tr>




    `;

        html += pd

    });


    patientListpharmacy.innerHTML = html;



    const pnumber = document.querySelector('#pn3');
    $("#Pharmacylist tbody tr").click(function () {
        var tableDatavalue = $(this).find("td").eq(2).html();

        // alert("View Patient: " + tableDatavalue.toString());

        let pnumbervalue = document.createElement('span');
        pnumbervalue.setAttribute("id", "pn1");


        pnumbervalue.textContent = tableDatavalue;

        pnumber.appendChild(pnumbervalue);



        document.getElementById("overlayprescrip").style.display = "block";

    });




}
function closePscp1() {
    var clear = document.getElementById("pn1")
    clear.remove();
    document.getElementById("PrescriptionOverlay2").style.display = "none";
    document.getElementById("pharmacypatientlist1").style.display = "block";
}
function closeppx() {
    var clear = document.getElementById("pn1")
    clear.remove();
    document.getElementById("overlayprescrip").style.display = "none";


}

const prescripname1 = document.querySelector('#prescripname1');
const prescripaddress1 = document.querySelector('#prescripaddress1');
const prescripcity1 = document.querySelector('#prescripcity1');
const prescripnumber1 = document.querySelector('#prescripnumber1');
const prescripcountry1 = document.querySelector('#prescripcountry1');
const prescrippnumber1 = document.querySelector('#prescrippnumber1');

function inputdata1(doc) {

    let prescripnamevalue1 = document.createElement('span')
    let prescripaddressvalue1 = document.createElement('span')
    let prescripcityvalue1 = document.createElement('span')
    let prescripnumbervalue1 = document.createElement('span')
    let prescripcountryvalue1 = document.createElement('span')
    let prescrippnumbervalue1 = document.createElement('span')

    prescripnamevalue1.textContent = doc.data().name;
    prescripaddressvalue1.textContent = doc.data().Address;
    prescripcityvalue1.textContent = doc.data().City;
    prescripnumbervalue1.textContent = doc.data().ContactDetails;
    prescripcountryvalue1.textContent = doc.data().Nationality;
    prescrippnumbervalue1.textContent = doc.data().PatientNumber;

    prescripname1.appendChild(prescripnamevalue1);
    prescripaddress1.appendChild(prescripaddressvalue1);
    prescripcity1.appendChild(prescripcityvalue1);
    prescripnumber1.appendChild(prescripnumbervalue1);
    prescripcountry1.appendChild(prescripcountryvalue1);
    prescrippnumber1.appendChild(prescrippnumbervalue1);

}

function pharmcayback() {
    document.getElementById("pharmacypatientlist1").style.display = "none";
    document.getElementById("pharmacyhome").style.display = "block";
}


