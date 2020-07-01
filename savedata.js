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


const saveprescrip1 = document.querySelector('#saveprescrip11');
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
    alert("You have created Notes")
    document.getElementById("NotesOverlay").style.display = "none";

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
        Heent: HEENT.value,
        Status1: Status1.value,
        DateofAssesment: DateofAssesment.value,
        CommentAssesment: CommentAssesment.value

    })
    alert("You have saved the data");

})


const Labrequest = document.querySelector('#LabOverlay');

var Labname = document.getElementById('Patientname1');
var LabID = document.getElementById('PatientID1');
var Labtype = document.getElementById('LabRequest');
var HospitalLab = document.getElementById('LabHospital');


Labrequest.addEventListener('submit', (e) => {
    e.preventDefault();

    db.collection('LAB').doc(HospitalLab.value).collection('Requested').doc(LabID.value).set({
        PatientName: Labname.value,
        PatientID: LabID.value,
        LabRequest: Labtype.value,

    })
    db.collection('Hospitals').doc(HospitalLab.value).collection('LabList').doc(LabID.value).set({
        PatientName: Labname.value,
        PatientID: LabID.value,
        LabRequest: Labtype.value,


    })
    alert("You have Requested a Lab invastigation");

    document.getElementById("LabOverlay").style.display = "none";

})


const Refere = document.querySelector('#RefrenceOverlay');

var Referename = document.getElementById('Patientname');
var RefereID = document.getElementById('PatientID');
var ReferingDoc = document.getElementById('RefferringDoctor');
var Recommendation = document.getElementById('recommendations');
var choosehospital = document.getElementById('choosehospital');




Refere.addEventListener('submit', (e) => {
    e.preventDefault();

    db.collection('Hospitals').doc(choosehospital.value).collection('Refered Patients').doc(RefereID.value).set({
        PatientName: Referename.value,
        PatientID: RefereID.value,
        Recommendations: Recommendation.value,
        ReferingDoctor: ReferingDoc.value,


    })
    alert("You have Refferred a Patient.");
    document.getElementById("RefrenceOverlay").style.display = "none";
    document.getElementById("referehistory").style.display = "block";

})

function openAssignbed() {
    document.getElementById("BedsOverlay").style.display = "block";

}
function closebeds() {
    document.getElementById("BedsOverlay").style.display = "none";

}
function opensign() {
    document.getElementById("NotesOverlay").style.display = "none";

    document.getElementById("digitalysign").style.display = "block";

}
function opensign1() {
    document.getElementById("PrescriptionOverlay").style.display = "none";

    document.getElementById("digitalysign1").style.display = "block";

}
function closesign() {
    document.getElementById("NotesOverlay").style.display = "block";

    document.getElementById("digitalysign").style.display = "none";

}


function closesign1() {
    document.getElementById("PrescriptionOverlay").style.display = "block";

    document.getElementById("digitalysign1").style.display = "none";

}
const Sign = document.querySelector('#digitalysign');

var Signature = document.getElementById('signature');
// var Sigword = document.getElementById('signatureword');
const Sigword = document.querySelector('#signatureword1');





Sign.addEventListener('submit', (e) => {
    e.preventDefault();
    let sigwordp = document.createElement('span')

    sigwordp.textContent = Signature.value;

    Sigword.appendChild(sigwordp);

    document.getElementById("NotesOverlay").style.display = "block";

    document.getElementById("digitalysign").style.display = "none";
    document.getElementById("hide1").style.display = "none";


})


const Sign1 = document.querySelector('#digitalysign1');

var Signature1 = document.getElementById('signature1');
// var Sigword = document.getElementById('signatureword');
const Sigword1 = document.querySelector('#signatureword');





Sign1.addEventListener('submit', (e) => {
    e.preventDefault();
    let sigwordp = document.createElement('span')

    sigwordp.textContent = Signature1.value;

    Sigword1.appendChild(sigwordp);

    document.getElementById("PrescriptionOverlay").style.display = "block";

    document.getElementById("digitalysign1").style.display = "none";;
    document.getElementById("hide2").style.display = "none";


})
const Beds = document.querySelector('#BedsOverlay');

var BedPname = document.getElementById('PatientnameBed');
var BedPID = document.getElementById('PatientIDBed');
var Ward = document.getElementById('chooseward');
var BedNo = document.getElementById('BedNo');
var choosehospitalBed = document.getElementById('choosehospitalBed');




Beds.addEventListener('submit', (e) => {
    e.preventDefault();



    db.collection('Hospitals').doc(choosehospitalBed.value).collection('Inpatients').doc(BedPID.value).set({
        PatientName: BedPname.value,
        PatientID: BedPID.value,
        Ward: Ward.value,
        BedNumber: BedNo.value,
        Time: time


    })
    db.collection('Hospitals').doc(choosehospitalBed.value).collection('Hospitalpatients').doc(BedPID.value).set({
        PatientName: BedPname.value,
        PatientID: BedPID.value,
        Ward: Ward.value,
        BedNumber: BedNo.value,
        Time: time


    })

    db.collection('Hospitals').doc(choosehospitalBed.value).collection(Ward.value).doc(BedPID.value).set({
        PatientName: BedPname.value,
        PatientID: BedPID.value,
        Ward: Ward.value,
        BedNumber: BedNo.value,
        Time: time


    })
    db.collection('Hospitals').doc(choosehospitalBed.value).collection('Outpatient').doc(BedPID.value).delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });


    alert("You have moved patient to inpatient for further treatment.");
    document.getElementById("BedsOverlay").style.display = "none";


})

const Discharge = document.querySelector('#dischargepatient');

var Dischargename = document.getElementById('dischargeNumber');

var choosehospitalDischarge = document.getElementById('choosehospitaldischarge');




Discharge.addEventListener('submit', (e) => {
    e.preventDefault();

    db.collection('Hospitals').doc(choosehospitalDischarge.value).collection('Inpatients').doc(Dischargename.value).delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });


    db.collection('Hospitals').doc(choosehospitalDischarge.value).collection('Patients').doc(Dischargename.value).delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });


    db.collection('Hospitals').doc(choosehospitalDischarge.value).collection('Outpatient').doc(Dischargename.value).delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });





    db.collection('Hospitals').doc(choosehospitalBed.value).collection('DischargeList').doc(Dischargename.value).set({
        PatientName: Dischargename.value,
        Time: time,



    })

    db.collection('Hospitals').doc(choosehospitalBed.value).collection('History').doc(Dischargename.value).set({
        PatientName: Dischargename.value,
        Time: time,



    })


    alert("You have Discharged a patient.");
    document.getElementById("dischargepatient").style.display = "none";


})

function dichargepatient() {
    document.getElementById("dischargepatient").style.display = "block";

}
function closepdischargepatient() {
    document.getElementById("dischargepatient").style.display = "none";

}


const KeepHist = document.querySelector('#referehistory');

var histid = document.getElementById('referehistoryid');

var choosehospitalDischarge = document.getElementById('choosehospitaldischarge');




KeepHist.addEventListener('submit', (e) => {
    e.preventDefault();



    db.collection('Hospitals').doc(histid.value).collection('Referedtoother').doc(RefereID.value).set({
        PatientID: RefereID.value,
        refereto: choosehospital.value,
        Time: time,



    })



    document.getElementById("referehistory").style.display = "none";


})







