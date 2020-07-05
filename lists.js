

db.collection('LAB').doc('UBHlab').collection('Complete Requests').get().then(snapshot => {
  setupList8(snapshot.docs);
  // console.log(snapshot.docs)
});
//



db.collection('Pharmacy').get().then(snapshot => {
  setupList9(snapshot.docs);
  // console.log(snapshot.docs)
});


const patientportal = document.querySelector('#overlaypnumber');

var pp1 = document.getElementById("pnumber");
patientportal.addEventListener('submit', (e) => {
  e.preventDefault();



  db.collection("Patients").doc(pp1.value).collection("PatientData").get().then((snapshot) => {
    // console.log(snapshot.docs);
    snapshot.docs.forEach(doc => {
      inputdata(doc);
    });

    inputdata(doc);
    // window.location.replace('patientPortal.html');

  });
  db.collection("Patients").doc(pp1.value).get().then(function (doc) {
    console.log(doc.data())
    var picture = doc.data().userID;
    let img = document.getElementById('profileImage');
    firebase.storage().ref('patients/' + picture + '/profilePic.jpg').getDownloadURL().then(imgUrl => {
      img.src = imgUrl;

    })

  });


  db.collection("Patients").doc(pp1.value).collection("PatientData").doc("AdministrativeData").collection("CashPayments").get().then(snapshot => {
    // console.log(snapshot.docs);

    cashdata(snapshot);


    // inputdata(doc);
    // window.location.replace('patientPortal.html');

  });
  db.collection("Patients").doc(pp1.value).collection("PatientData").doc("AdministrativeData").collection("Medical Payments").get().then(snapshot => {
    // console.log(snapshot.docs);

    medicaldata(snapshot);




  });
  db.collection("Patients").doc(pp1.value).collection("PatientData").doc("Clinical Data").collection("Prescriptions").get().then(snapshot => {
    // console.log(snapshot.docs);

    prescriptiondata(snapshot);




  });






  db.collection("Patients").doc(pp1.value).collection("PatientData").doc("Clinical Data").collection("Prescriptions").get().then(snapshot => {
    // console.log(snapshot.docs);

    prescriptionlist1(snapshot);


    // inputdata(doc);
    // window.location.replace('patientPortal.html');

  });
  db.collection("Patients").doc(pp1.value).collection("PatientData").doc("Clinical Data").collection("History").get().then(snapshot => {
    // console.log(snapshot.docs);

    Historylist1(snapshot);


    // inputdata(doc);
    // window.location.replace('patientPortal.html');

  });
  db.collection("Patients").doc(pp1.value).collection("PatientData").doc("Clinical Data").collection("History").get().then(snapshot => {
    // console.log(snapshot.docs);

    History1(snapshot);


    // inputdata(doc);
    // window.location.replace('patientPortal.html');

  });
  db.collection("Patients").doc(pp1.value).collection("PatientData").doc("Clinical Data").collection("History").get().then(snapshot => {
    // console.log(snapshot.docs);

    History2(snapshot);


    // inputdata(doc);
    // window.location.replace('patientPortal.html');

  });
  db.collection("Patients").doc(pp1.value).collection("PatientData").doc("Clinical Data").collection("Assesment").doc("Assesment").get().then(snapshot => {
    // console.log(snapshot.docs);

    History3(snapshot);


    // inputdata(doc);
    // window.location.replace('patientPortal.html');

  });
  db.collection("Patients").doc(pp1.value).collection("PatientData").doc("Clinical Data").collection("LabResults").get().then(snapshot => {
    // console.log(snapshot.docs);

    LabTest(snapshot);


    // inputdata(doc);
    // window.location.replace('patientPortal.html');

  });

  db.collection("Patients").doc(pp1.value).collection("PatientData").doc("Clinical Data").collection("LabResults").get().then(snapshot => {
    // console.log(snapshot.docs);

    LabTestList(snapshot);


    // inputdata(doc);
    // window.location.replace('patientPortal.html');

  });




  document.getElementById("overlaypnumber").style.display = "none";
});

const pdall1 = document.querySelector('#pdata1');




const smoking = document.querySelector('#smokingvalue');
const Disability = document.querySelector('#Disabilitiesvalue');
const Alchole = document.querySelector('#Alcholevalue');
const Religion = document.querySelector('#Religionvalue');
const MaritalStatus = document.querySelector('#MaritalStatusvalue');
const PatientNumber = document.querySelector('#PatientNumbervalue');
const BirthPlace = document.querySelector('#BirthPlacevalue');
const FamilyDetails = document.querySelector('#FamilDetailsvalue');
const NextofKin = document.querySelector('#NextofKinvalue');
const BMI = document.querySelector('#BMIvalue');
const dailyjob = document.querySelector('#dailyjob');
const nationality = document.querySelector('#Nationality');
const citizenship = document.querySelector('#citizenship');
const comunityservice = document.querySelector('#cominityservice');
const Allergies1 = document.querySelector('#allegieslist');


// phrmacy prescription
const prescripname = document.querySelector('#prescripname');
const prescripaddress = document.querySelector('#prescripaddress');
const prescripcity = document.querySelector('#prescripcity');
const prescripnumber = document.querySelector('#prescripnumber');
const prescripcountry = document.querySelector('#prescripcountry');
const prescrippnumber = document.querySelector('#prescrippnumber');

const prescripname1 = document.querySelector('#prescripname1');
const prescripaddress1 = document.querySelector('#prescripaddress1');
const prescripcity1 = document.querySelector('#prescripcity1');
const prescripnumber1 = document.querySelector('#prescripnumber1');
const prescripcountry1 = document.querySelector('#prescripcountry1');
const prescrippnumber1 = document.querySelector('#prescrippnumber1');
const patientclass = document.querySelector('#patientclass');





function inputdata(doc) {
  let div = document.createElement('div')
  let name = document.createElement('h4')
  let dateofbirth = document.createElement('h5')
  let gender = document.createElement('h5')
  let fullAddress = document.createElement('h5')
  let city = document.createElement('h5')
  let contactDetails = document.createElement('h5')
  let Allergieslist = document.createElement('li')


  let smokingvalue = document.createElement('span')
  let Disabilityvalue = document.createElement('span')
  let Alcholevalue = document.createElement('span')
  let Religionvalue = document.createElement('span')
  let MaritalStatusvalue = document.createElement('span')
  let PatientNumbervalue = document.createElement('span')
  let BirthPlacevalue = document.createElement('span')
  let FamilyDetailsvalue = document.createElement('span')
  let NextofKinvalue = document.createElement('span')
  let BMIvalue = document.createElement('span')
  let patientclass1 = document.createElement('span')


  let dailyjobvalue = document.createElement('span')
  let nationalityvalue = document.createElement('span')
  let citizenshipvalue = document.createElement('span')
  let communityservicevalue = document.createElement('span')
  let criminalrecordvalue = document.createElement('span')

  let prescripnamevalue = document.createElement('span')
  let prescripaddressvalue = document.createElement('span')
  let prescripcityvalue = document.createElement('span')
  let prescripnumbervalue = document.createElement('span')
  let prescripcountryvalue = document.createElement('span')
  let prescrippnumbervalue = document.createElement('span')







  name.textContent = doc.data().name;
  dateofbirth.textContent = doc.data().DateofBirth;
  gender.textContent = doc.data().Gender;
  fullAddress.textContent = doc.data().Address;
  city.textContent = doc.data().City;
  contactDetails.textContent = doc.data().ContactDetails;
  Allergieslist.textContent = doc.data().Allergies;


  smokingvalue.textContent = doc.data().SmokingStatus;
  Disabilityvalue.textContent = doc.data().Disability;
  Religionvalue.textContent = doc.data().Religion;
  Alcholevalue.textContent = doc.data().AlcholeConsumption;
  MaritalStatusvalue.textContent = doc.data().MaritalStatus;
  PatientNumbervalue.textContent = doc.data().PatientNumber;
  BirthPlacevalue.textContent = doc.data().PlaceOfBirth;
  FamilyDetailsvalue.textContent = doc.data().FamilyDetails;
  NextofKinvalue.textContent = doc.data().NextOfKin;
  BMIvalue.textContent = doc.data().bmi;
  patientclass1.textContent = doc.data().PatientClass;


  citizenshipvalue.textContent = doc.data().Citizenship;
  nationalityvalue.textContent = doc.data().Nationality;
  communityservicevalue.textContent = doc.data().communityservice;
  criminalrecordvalue.textContent = doc.data().criminalrecord;
  dailyjobvalue.textContent = doc.data().DailyJob;

  prescripnamevalue.textContent = doc.data().name;
  prescripaddressvalue.textContent = doc.data().Address;
  prescripcityvalue.textContent = doc.data().City;
  prescripnumbervalue.textContent = doc.data().ContactDetails;
  prescripcountryvalue.textContent = doc.data().Nationality;
  prescrippnumbervalue.textContent = doc.data().PatientNumber;







  pdall1.appendChild(name);
  pdall1.appendChild(dateofbirth);
  pdall1.appendChild(gender);
  pdall1.appendChild(fullAddress);
  pdall1.appendChild(city);
  pdall1.appendChild(div);

  smoking.appendChild(smokingvalue);
  Disability.appendChild(Disabilityvalue);
  Alchole.appendChild(Alcholevalue);
  Religion.appendChild(Religionvalue);
  MaritalStatus.appendChild(MaritalStatusvalue);
  PatientNumber.appendChild(PatientNumbervalue);
  BirthPlace.appendChild(BirthPlacevalue);
  NextofKin.appendChild(NextofKinvalue);
  FamilyDetails.appendChild(FamilyDetailsvalue);
  BMI.appendChild(BMIvalue);
  patientclass.appendChild(patientclass1);
  Allergies1.appendChild(Allergieslist);



  dailyjob.appendChild(dailyjobvalue);
  nationality.appendChild(nationalityvalue);
  citizenship.appendChild(citizenshipvalue);
  // comunityservice.appendChild(communityservicevalue);
  // criminalrecord.appendChild(criminalrecordvalue);

  prescripname.appendChild(prescripnamevalue);
  prescripaddress.appendChild(prescripaddressvalue);
  prescripcity.appendChild(prescripcityvalue);
  prescripnumber.appendChild(prescripnumbervalue);
  prescripcountry.appendChild(prescripcountryvalue);
  prescrippnumber.appendChild(prescrippnumbervalue);


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






  document.getElementById("list").style.display = "none";
  // document.getElementById("outp").style.display = "none";
  // document.getElementById("inp").style.display = "none";


  document.getElementById("data").style.display = "block";

};

const date = document.querySelector('#accountsDate');
const Description = document.querySelector('#accountsDescription');
const paymentMethod = document.querySelector('#accountspaymentMethod');
const Amount = document.querySelector('#accountsAmount');
const Status = document.querySelector('#accountsStatus');

const tabe = document.querySelector('#accountsTable');



function cashdata(data) {
  let html1 = '';
  data.forEach(doc => {
    const patient1 = doc.data();

    const pd1 = `
                       <tr>

                       <td>

                       </td>
                       <td>
                        Cash payments
                      </td>
                      <td>
                        CASH
                      </td>
                      <td>
                        ${patient1.amount}
                      </td>
                    <td>
                      Processed
                     </td>
                       <td>
                       <h5>Approved</h5>

                      </td> 
                      </tr> 
    
    
    `;

    html1 += pd1

  });





  tabe.innerHTML = html1;

}





const tabe1 = document.querySelector('#accountsTablemedical');

function medicaldata(data) {
  let html2 = '';
  data.forEach(doc => {
    const patient1 = doc.data();

    const pd2 = `
                       <tr>

                       <td>
                         
                       </td>
                       <td>
                          ${patient1.Condition}
                      </td>
                      <td>
                        ${patient1.Organisation}
                      </td>
                      <td>
                        Medical Amount
                      </td>
                    <td>
                      ${patient1.MemberNumber}
                     </td>
                       <td>
                       <h5>Approved</h5>

                      </td> 
                      </tr> 
    
    
    `;

    html2 += pd2

  });


  tabe1.innerHTML = html2;




}

// });




const presp = document.querySelector('#prescriplist');



function prescriptiondata(data) {
  let html3 = '';
  data.forEach(doc => {
    const patient2 = doc.data();

    const pd3 = `
  <li>${patient2.Time} ---${patient2.Notes}</li>
  `

    html3 += pd3
  })


  presp.innerHTML = html3;
}
const presp1 = document.querySelector('#Historylist');

function History1(data) {
  let html4 = '';
  data.forEach(doc => {
    const patient3 = doc.data();

    const pd4 = `
  <li>${patient3.Medication}</li>
  `

    html4 += pd4
  })


  presp1.innerHTML = html4;
}


const presp2 = document.querySelector('#AssesmentList');


function History2(data) {
  let html5 = '';
  data.forEach(doc => {
    const patient4 = doc.data();

    const pd5 = `
  <li>${patient4.Assesment}</li>
  `

    html5 += pd5
  })


  presp2.innerHTML = html5;
}

const presp3 = document.querySelector('#LabList');


function LabTest(data) {
  let html6 = '';
  data.forEach(doc => {
    const patient5 = doc.data();

    const pd6 = `
  <li>${patient5.Time}---${patient5.LabRequest}</li>
  `

    html6 += pd6
  })


  presp3.innerHTML = html6;
}


const presp4 = document.querySelector('#allegieslist');


// function Allergies(data) {
//   let html7 = '';
//   data.forEach(doc => {
//     const patient6 = doc.data();

//     const pd7 = `
//   <li>${patient6.Allergies}</li>
//   `

//     html7 += pd7
//   })


//   presp3.innerHTML = html7;
// }





const Statusresults = document.querySelector('#StatusResults')
function History3(data) {
  const results = data.data();
  Statusresults.textContent = results.Status1;

  if (Statusresults.innerHTML == "Unstable") {
    document.getElementById("StatusResults").style.backgroundColor = "red";
  } else if (Statusresults.innerHTML == "WatchList") {
    document.getElementById("StatusResults").style.backgroundColor = "yellow";
    document.getElementById("StatusResults").style.color = "black";


  } else if (Statusresults.innerHTML == "Stable") {
    document.getElementById("StatusResults").style.backgroundColor = "blue";

  } else if (Statusresults.innerHTML == "ToBeDischarged") {
    document.getElementById("StatusResults").style.backgroundColor = "green";

  }



}



const labbody = document.querySelector('#labbody');
function LabTestList(data) {
  let html10 = '';
  data.forEach(doc => {
    const lab1 = doc.data();

    const lab = `
     <tr>
     <td>
     ${lab1.Time}
     </td>
      <td id="ppnumber" value="${doc.id}">
     ${doc.id}
     </td>
      <td>
     ${lab1.LabRequest}
     </td>
     </tr>
     <br>



    `


    html10 += lab;


  })

  labbody.innerHTML = html10
  const labdetail = document.querySelector('#labid');
  $("#labbody tr").click(function () {
    var tableDatavalue = $(this).find("td").eq(0).html();

    alert("View Lab: " + tableDatavalue.toString());

    let labvalue = document.createElement('span');
    labvalue.setAttribute("id", "labid1");


    labvalue.textContent = tableDatavalue;

    labdetail.appendChild(labvalue);



    document.getElementById("overlaylab").style.display = "block";

  });
  var clear = document.getElementById("labid1")
  clear.remove();
}


function viewlabList() {
  document.getElementById("lablist").style.display = "block";
  document.getElementById("data").style.display = "none";
}
function closelab() {
  document.getElementById("lablist").style.display = "none";
  document.getElementById("data").style.display = "block";
}

function closelaboverlay() {
  document.getElementById("overlaylab").style.display = "none";
  var clear = document.getElementById("labid1")
  clear.remove();
}



const prespbody = document.querySelector('#prescripbody');
function prescriptionlist1(data) {
  let html4 = '';
  data.forEach(doc => {
    const presp4 = doc.data();

    const pp = `
     <tr>
     <td>
     ${presp4.Time}
     </td>
      <td id="ppnumber" value="${doc.id}">
     ${doc.id}
     </td>
      <td>
     <Button>View Prescription</Button>
     </td>
     </tr>
     <br>

    
    
    `


    html4 += pp;
  })
  prespbody.innerHTML = html4
  const ppnumber = document.querySelector('#pn2');
  $("#prescripbody tr").click(function () {
    var tableDatavalue = $(this).find("td").eq(1).html();
    alert("View Prescription: " + tableDatavalue.toString());
    let ppnumbervalue = document.createElement('span');
    ppnumbervalue.setAttribute("id", "pn4");
    ppnumbervalue.textContent = tableDatavalue;
    ppnumber.appendChild(ppnumbervalue);
    document.getElementById("overlayprescrip").style.display = "block";
  });
  var clear = document.getElementById("pn4")
  clear.remove();
}
function closeppnumber() {
  var clear = document.getElementById("pn4")
  clear.remove();
  document.getElementById("overlayprescrip").style.display = "none";
};
function openprescrip() {
  document.getElementById("prescriptionlist").style.display = "block";
  document.getElementById("data").style.display = "none";
}
const prescripsingle = document.querySelector('.overlay3');
var ppnumber1 = document.getElementById("ppnumber");
prescripsingle.addEventListener('submit', (e) => {
  e.preventDefault();
  const prescripnotes1 = document.querySelector('#prescripnotes1');
  var docRef = db.collection("Patients").doc(pp1.value).collection("PatientData").doc("Clinical Data").collection("Prescriptions").doc(ppnumber1.value);
  docRef.get().then(function (doc) {
    if (doc.exists) {
      const prescripdata = doc.data();
      prescripnotes1.textContent = prescripdata.Notes;
    } else {
      alert("no Such Document")
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  });
  document.getElementById("overlayprescrip").style.display = "none";
})
function closeprescrip() {
  document.getElementById("prescriptionlist").style.display = "none";
  document.getElementById("data").style.display = "block";
}



const histbody = document.querySelector('#Historybody');
function Historylist1(data) {
  let html5 = '';
  data.forEach(doc => {
    const histbody1 = doc.data();

    const pp1 = `
     <tr>
     <td>
     ${histbody1.Time}
     </td>
      <td id="ppnumber" value="${doc.id}">
     ${doc.id}
     </td>
      <td>
     <Button>View Document</Button>
     </td>
     </tr>
     <br>

    
    
    `


    html5 += pp1;


  })

  histbody.innerHTML = html5
  const ppnumber1 = document.querySelector('#pn3');
  $("#Historybody tr").click(function () {
    var tableDatavalue = $(this).find("td").eq(1).html();

    alert("View Document: " + tableDatavalue.toString());

    let ppnumbervalue1 = document.createElement('span');
    ppnumbervalue1.setAttribute("id", "pn5");


    ppnumbervalue1.textContent = tableDatavalue;

    ppnumber1.appendChild(ppnumbervalue1);



    document.getElementById("overlayHistory").style.display = "block";

  });
  var clear = document.getElementById("pn5")
  // clear.remove();
}
function viewHistory() {
  document.getElementById("Historylist1").style.display = "block";
  document.getElementById("data").style.display = "none";
}
function closeHistory() {
  document.getElementById("Historylist1").style.display = "none";
  document.getElementById("data").style.display = "block";
}
function closeppnumber() {
  document.getElementById("overlayHistory").style.display = "none";
  // document.getElementById("data").style.display = "block";
}


const viewHistory1 = document.querySelector('#historyoverlay');


var Assesment2 = document.getElementById('Assesment');
var Suggestion2 = document.getElementById('Suggestions');
var Intake2 = document.getElementById('Intake');
var HomeActivities2 = document.getElementById('Activities');
var Medication2 = document.getElementById('Medication');
var ImagingResults2 = document.getElementById('Imaging');
var BodyTemp = document.getElementById('BodyTemperature1');
var BloodPre = document.getElementById('BloodPreasure1');
var Hieght = document.getElementById('Height1');
var Weight = document.getElementById('Weight1');
var PR = document.getElementById('PulseRate1');
var Resp = document.getElementById('Respiration1');
var OX = document.getElementById('OxygenSaturation1');
var HIVstat = document.getElementById('HIVStatus1');
var PS = document.getElementById('PsychiatricsAssesment1');
var HEENT = document.getElementById('HEENTExamination1');


var historynumber1 = document.getElementById("historynumber");

viewHistory1.addEventListener('submit', (e) => {
  e.preventDefault();


  var docRef = db.collection("Patients").doc(pp1.value).collection("PatientData").doc("Clinical Data").collection("History").doc(historynumber1.value);

  docRef.get().then(function (doc) {
    if (doc.exists) {
      const prescripdata = doc.data();





      Assesment2.textContent = doc.data().Assesment;
      Suggestion2.textContent = doc.data().Suggestion;
      Intake2.textContent = doc.data().Intake;
      HomeActivities2.textContent = doc.data().HomeActivities;
      Medication2.textContent = doc.data().Medication;
      ImagingResults2.textContent = doc.data().ImagingResults;

      BodyTemp.textContent = doc.data().BodyTemp;
      BloodPre.textContent = doc.data().BloodPressure;
      Hieght.textContent = doc.data().Hieght;
      Weight.textContent = doc.data().Weight;
      PR.textContent = doc.data().PalseRate;
      Resp.textContent = doc.data().Respiration;
      OX.textContent = doc.data().OxygenSaturation;
      HIVstat.textContent = doc.data().HIVStatus;
      PS.textContent = doc.data().PyschiatricAssesment;
      HEENT.textContent = doc.data().Heent;


      // prescripnotes1.appendChild(prescripnotesvalue1);

      // console.log("Document data:", doc.data());


    } else {
      // doc.data() will be undefined in this case
      alert("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  });
  document.getElementById("overlayHistory").style.display = "none";
  document.getElementById("NotesOverlay1").style.display = "block";
  document.getElementById("NotesOverlay1").style.display = "block";

  document.getElementById("Historylist1").style.display = "none";



})

const viewHistory2 = document.querySelector('#NotesOverlay1');



viewHistory2.addEventListener('submit', (e) => {
  e.preventDefault();



  document.getElementById("overlayHistory1").style.display = "block";
})
function closepppnumber() {
  document.getElementById("overlayHistory1").style.display = "none";
}
function viewstatus() {
  document.getElementById("overlayHistory1").style.display = "block";
}

const viewHistory3 = document.querySelector('#overlayHistory2');

var BodyTemp1 = document.getElementById('BodyTemperature2');
var BloodPre1 = document.getElementById('BloodPreasure2');
var Hieght1 = document.getElementById('Height2');
var Weight1 = document.getElementById('Weight2');
var PR1 = document.getElementById('PulseRate2');
var Resp1 = document.getElementById('Respiration2');
var OX1 = document.getElementById('OxygenSaturation2');
var HIVstat1 = document.getElementById('HIVStatus2');
var PS1 = document.getElementById('PsychiatricsAssesment2');
var HEENT1 = document.getElementById('HEENTExamination2');


viewHistory3.addEventListener('submit', (e) => {
  e.preventDefault();



})

function opencurrentmedicaltrials() {


  var docRef = db.collection("Patients").doc(pp1.value).collection("PatientData").doc("Clinical Data").collection("Assesment").doc("Assesment");

  docRef.get().then(function (doc) {
    if (doc.exists) {
      const prescripdata = doc.data();


      BodyTemp1.textContent = doc.data().BodyTemp;
      BloodPre1.textContent = doc.data().BloodPressure;
      Hieght1.textContent = doc.data().Hieght;
      Weight1.textContent = doc.data().Weight;
      PR1.textContent = doc.data().PalseRate;
      Resp1.textContent = doc.data().Respiration;
      OX1.textContent = doc.data().OxygenSaturation;
      HIVstat1.textContent = doc.data().HIVStatus;
      PS1.textContent = doc.data().PyschiatricAssesment;
      HEENT1.textContent = doc.data().Heent;


      // prescripnotes1.appendChild(prescripnotesvalue1);

      // console.log("Document data:", doc.data());


    } else {
      // doc.data() will be undefined in this case
      alert("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  });

  document.getElementById("overlayHistory2").style.display = "block";

}
function closetrials() {
  document.getElementById("overlayHistory2").style.display = "none";
}




const labdownload = document.querySelector('#overlaylab');

var labidtodownload = document.getElementById('labnumber');

labdownload.addEventListener('submit', (e) => {
  e.preventDefault();
  var storage = firebase.storage();
  let storageRef = firebase.storage();
  //   // Create a reference to the file we want to down
  storageRef.ref('labdata/' + labidtodownload.value + '/labdta.pdf').getDownloadURL().then(function (url) {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    // var xhr = new XMLHttpRequest();
    // xhr.responseType = 'blob';
    // xhr.onload = function (event) {
    //   var blob = xhr.response;
    // };
    // xhr.open('GET', url);
    // xhr.send();

    // Or inserted into an <img> element:
    var img = document.getElementById('download');
    img.src = url;
  }).catch(function (error) {

    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/object-not-found':
        // File doesn't exist
        alert("File does not exist")
        break;

      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        alert("You dont have permission to this file")
        break;

      case 'storage/canceled':
        // User canceled the upload
        alert("Storage Canceled")
        break;



      case 'storage/unknown':
        // Unknown error occurred, inspect the server response
        alert("Storage Unknown")
        break;
    }
  });

})


function printDiv(divName) {
  var printContents = document.getElementById(divName).innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
}