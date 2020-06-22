// function saveprescrip() {
//     var today = new Date();
//     var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

//     var pnumber = document.getElementById('prescrippnumber');
//     var prescrip = document.getElementById('prescripnotes');

//     db.collection('Patients').doc(pnumber.value).collection('PatientData').doc('Clinical Data').collection('Prescriptions').add({

//         Time: time,
//         Notes: prescrip.value
//     })
//     alert('you have created priscription');
// }
var pp1 = document.getElementById("pnumber");


const saveprescrip1 = document.querySelector('#saveprescrip');
var today = new Date();
var time = today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear() + "-" + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var pnumber = document.getElementById('prescrippnumber');
var prescrip = document.getElementById('prescripnotes');
var unique = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();



saveprescrip1.addEventListener('submit', (e) => {
    e.preventDefault();


    db.collection('Patients').doc(pp1.value).collection('PatientData').doc('Clinical Data').collection('Prescriptions').add({

        Time: time,
        Notes: prescrip.value,
        PrescriptionNumber: unique
    })
    alert("You have created a prescription " + unique)
    document.getElementById("PrescriptionOverlay").style.display = "none";
})


const prespsingle = document.querySelector('#overlayprescrip');
prescripsingle.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById("PrescriptionOverlay1").style.display = "block";

})
function closePscp1() {
    var clear = document.getElementById("pn4")
    clear.remove();
    document.getElementById("PrescriptionOverlay1").style.display = "none";

};

const PatientNotes = document.querySelector('#NotesOverlay');

var Assesment = document.getElementById('Assesment');
var Suggestion = document.getElementById('Suggestions');
var Intake = document.getElementById('Intake');
var HomeActivities = document.getElementById('Activities');
var Medication = document.getElementById('Medication');
var ImagingResults = document.getElementById('Imaging');
var BodyTemp = document.getElementById('BodyTemperature');
var BloodPres = document.getElementById('BloodPreasure');
var Hieght = document.getElementById('Height');
var Weight = document.getElementById('Weight');
var PalseRate = document.getElementById('PulseRate');
var Respiration = document.getElementById('Respiration');
var OxygenSaturation = document.getElementById('OxygenSaturation');
var HIVStatus = document.getElementById('HIVStatus');
var PyschiatricAssesment = document.getElementById('PsychiatricsAssesment');
var HEENT = document.getElementById('HEENTExamination');
var Status1 = document.getElementById('Status');
var DateofAssesment = document.getElementById('VisitDate');
var CommentAssesment = document.getElementById('Comment1');
// var ImagingResults = document.getElementById('Imaging');
// var ImagingResults = document.getElementById('Imaging');


PatientNotes.addEventListener('submit', (e) => {
    e.preventDefault();

    db.collection('Patients').doc(pp1.value).collection('PatientData').doc('Clinical Data').collection('History').add({

        Time: time,
        Assesment: Assesment.value,
        Suggestion: Suggestion.value,
        Intake: Intake.value,
        HomeActivities: HomeActivities.value,
        Medication: Medication.value,
        ImagingResults: ImagingResults.value,
        BloodPressure: BloodPres.value,
        BodyTemp: BodyTemp.value,
        Hieght: Hieght.value,
        Weight: Weight.value,
        PalseRate: PalseRate.value,
        Respiration: Respiration.value,
        OxygenSaturation: OxygenSaturation.value,
        HIVStatus: HIVStatus.value,
        PyschiatricAssesment: PyschiatricAssesment.value,
        HEENT: HEENT.value,
        Status1: Status1.value,
        DateofAssesment: DateofAssesment.value,
        CommentAssesment: CommentAssesment.value
    })
    alert("You have created Notes")
    document.getElementById("NotesOverlay").style.display = "none";


    db.collection('Patients').doc(pp1.value).collection('PatientData').doc('Clinical Data').collection('Assesment').doc("Assesment").set({
        BloodPressure: BloodPres.value,
        BodyTemp: BodyTemp.value,
        Hieght: Hieght.value,
        Weight: Weight.value,
        PalseRate: PalseRate.value,
        Respiration: Respiration.value,
        OxygenSaturation: OxygenSaturation.value,
        HIVStatus: HIVStatus.value,
        PyschiatricAssesment: PyschiatricAssesment.value,
        HEENT: HEENT.value,
        Status1: Status1.value,
        DateofAssesment: DateofAssesment.value,
        CommentAssesment: CommentAssesment.value

    })

})
function closeNotes() {
    document.getElementById("NotesOverlay").style.display = "none";

};
const PatientAssesmrnt = document.querySelector('#formAssesment');


PatientAssesmrnt.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('Patients').doc(pp1.value).collection('PatientData').doc('Clinical Data').collection('Assesment').doc("Assesment").set({
        BloodPressure: BloodPres.value,
        BodyTemp: BodyTemp.value,
        Hieght: Hieght.value,
        Weight: Weight.value,
        PalseRate: PalseRate.value,
        Respiration: Respiration.value,
        OxygenSaturation: OxygenSaturation.value,
        HIVStatus: HIVStatus.value,
        PyschiatricAssesment: PyschiatricAssesment.value,
        HEENT: HEENT.value,
        Status1: Status1.value,
        DateofAssesment: DateofAssesment.value,
        CommentAssesment: CommentAssesment.value

    })
    alert("You have saved the data");

})


// const viewHistory1 = document.querySelector('#historyoverlay');


// var Assesment2 = document.getElementById('Assesment');
// var Suggestion2 = document.getElementById('Suggestions');
// var Intake2 = document.getElementById('Intake');
// var HomeActivities2 = document.getElementById('Activities');
// var Medication2 = document.getElementById('Medication');
// var ImagingResults2 = document.getElementById('Imaging');

// viewHistory1.addEventListener('submit', (e) => {
//     e.preventDefault();



//     Assesment2.textContent = doc.data().name;
//     Suggestion2.textContent = doc.data().Address;
//     Intake2.textContent = doc.data().City;
//     HomeActivities2.textContent = doc.data().ContactDetails;
//     Medication2.textContent = doc.data().Nationality;
//     ImagingResults2.textContent = doc.data().PatientNumber;

//     prescripname1.appendChild(prescripnamevalue1);
//     prescripaddress1.appendChild(prescripaddressvalue1);
//     prescripcity1.appendChild(prescripcityvalue1);
//     prescripnumber1.appendChild(prescripnumbervalue1);
//     prescripcountry1.appendChild(prescripcountryvalue1);
//     prescrippnumber1.appendChild(prescrippnumbervalue1);





// })


