function AllPatients() {
  document.getElementById("overlayHospital").style.display = "block";

}

function outpatients() {
  document.getElementById("overlayHospital1").style.display = "block";

}
function inpatient() {
  document.getElementById("overlayHospital2").style.display = "block";

}
function hospitalpatient() {
  document.getElementById("overlayHospital3").style.display = "block";

}
function referedpatient() {
  document.getElementById("overlayHospital4").style.display = "block";

}
function dischargelist() {
  document.getElementById("overlayHospital5").style.display = "block";

}
function referedtolist() {
  document.getElementById("overlayHospital6").style.display = "block";

}
function labtestlist() {
  document.getElementById("overlayHospital8").style.display = "block";

}
function completedlablist() {
  document.getElementById("overlayHospital9").style.display = "block";

}




function closeHospital() {
  document.getElementById("overlayHospital").style.display = "none";
  document.getElementById("overlayHospital1").style.display = "none";
  document.getElementById("overlayHospital2").style.display = "none";
  document.getElementById("overlayHospital3").style.display = "none";
  document.getElementById("overlayHospital4").style.display = "none";
  document.getElementById("overlayHospital5").style.display = "none";
  document.getElementById("overlayHospital6").style.display = "none";
  document.getElementById("overlayHospital8").style.display = "none";
  document.getElementById("overlayHospital9").style.display = "none";

}


// var SelectHospital = sessionStorage.getItem("SelectHospital");
// var SelectHospital1 = sessionStorage.getItem("SelectHospital1");



// db.collection('Hospitals').doc(SelectHospital).collection('Patients').get().then(snapshot => {
//   setupList(snapshot.docs);

// });
// db.collection('Hospitals').doc("UBH").collection('Outpatient').get().then(snapshot => {
//   setupList1(snapshot.docs);
//   // console.log(snapshot.docs)
// })



const patientList = document.querySelector('#Allpatientslistdata');
const setupList = (data) => {


  let html = '';
  data.forEach(doc => {

    const patient = doc.data();
    // var PatientN0 = patient.getString("PatientNumber");
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const pd = `
    
     
                        <tr>
                            <td>
                              
                            </td>
                            <td>
                              ${patient.name}
                            </td>
                            <td>
                             ${patient.DateofBirth}
                            </td>
                            <td>
                             ${patient.Gender}

                            </td>
                            
                            <td>
                            ${patient.PatientNumber}
                            </td>
                            <td>
                            ${time}
                            </td>
                            <td>
                            <button>View Patient</Button>
                            </td>
                        </tr>
                        

    
    
    `;

    html += pd

  });


  patientList.innerHTML = html;


  //   pdall1.innerHTML = html1;
  const pnumber = document.querySelector('#pn');
  $("#Allpatientslist tbody tr").click(function () {
    var tableDatavalue = $(this).find("td").eq(4).html();

    // alert("View Patient: " + tableDatavalue.toString());

    let pnumbervalue = document.createElement('span');
    pnumbervalue.setAttribute("id", "pn1");


    pnumbervalue.textContent = tableDatavalue;

    pnumber.appendChild(pnumbervalue);



    document.getElementById("overlaypnumber").style.display = "block";

  });




};


function closepnumber() {
  var clear = document.getElementById("pn1")
  clear.remove();
  document.getElementById("overlaypnumber").style.display = "none";

};


// db.collection('Hospitals').doc('UBH').collection('Patients').get().then(snapshot => {
//   setupList1(snapshot.docs);
//   // console.log(snapshot.docs)
// })






const patientList1 = document.querySelector('#Allpatientslistdata1');
const setupList1 = (data) => {


  let htmloutp = '';
  data.forEach(doc => {

    const patient1 = doc.data();
    // var PatientN0 = patient.getString("PatientNumber");
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const pd1 = `


                        <tr>
                            <td>

                            </td>
                            <td>
                              ${patient1.name}
                            </td>
                            <td>
                             ${patient1.DateofBirth}
                            </td>
                            <td>
                             ${patient1.Gender}

                            </td>

                            <td>
                            ${patient1.PatientNumber}
                            </td>
                            <td>
                            ${time}
                            </td>
                            <td>
                            <button>View Patient</Button>
                            </td>
                        </tr>




    `;

    htmloutp += pd1

  });


  patientList1.innerHTML = htmloutp;


  // //   pdall1.innerHTML = html1;
  const pnumber = document.querySelector('#pn');
  $("#Allpatientslist1 tbody tr").click(function () {
    var tableDatavalue = $(this).find("td").eq(4).html();

    alert("View Patient: " + tableDatavalue.toString());

    let pnumbervalue = document.createElement('span');
    pnumbervalue.setAttribute("id", "pn1");


    pnumbervalue.textContent = tableDatavalue;

    pnumber.appendChild(pnumbervalue);



    document.getElementById("overlaypnumber").style.display = "block";

  });




};



const patientList2 = document.querySelector('#Allpatientslistdata2');
const setupList2 = (data) => {


  let htmlinp = '';
  data.forEach(doc => {

    const patient2 = doc.data();
    // var PatientN0 = patient.getString("PatientNumber");
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const pd2 = `


                        <tr>
                            <td>

                            </td>
                            <td>
                              ${patient2.PatientName}
                            </td>
                            <td>
                             ${patient2.BedNumber}
                            </td>
                            <td>
                             ${patient2.Ward}

                            </td>

                            <td>
                            ${patient2.PatientID}
                            </td>
                            <td>
                            ${patient2.Time}
                            </td>
                            <td>
                            <button>View Patient</Button>
                            </td>
                        </tr>




    `;

    htmlinp += pd2

  });


  patientList2.innerHTML = htmlinp;


  // //   pdall1.innerHTML = html1;
  const pnumber = document.querySelector('#pn');
  $("#Allpatientslist2 tbody tr").click(function () {
    var tableDatavalue = $(this).find("td").eq(4).html();

    alert("View Patient: " + tableDatavalue.toString());

    let pnumbervalue = document.createElement('span');
    pnumbervalue.setAttribute("id", "pn1");


    pnumbervalue.textContent = tableDatavalue;

    pnumber.appendChild(pnumbervalue);



    document.getElementById("overlaypnumber").style.display = "block";

  });




};





const patientList3 = document.querySelector('#Allpatientslistdata3');
const setupList3 = (data) => {


  let htmlhosp = '';
  data.forEach(doc => {

    const patient3 = doc.data();
    // var PatientN0 = patient.getString("PatientNumber");
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const pd3 = `


                        <tr>
                            <td>

                            </td>
                            <td>
                              ${patient3.PatientName}
                            </td>
                            <td>
                             ${patient3.BedNumber}
                            </td>
                            <td>
                             ${patient3.Ward}

                            </td>

                            <td>
                            ${patient3.PatientID}
                            </td>
                            <td>
                            ${patient3.Time}
                            </td>
                            <td>
                            <button>View Patient</Button>
                            </td>
                        </tr>




    `;

    htmlhosp += pd3

  });


  patientList3.innerHTML = htmlhosp;


  // //   pdall1.innerHTML = html1;
  const pnumber = document.querySelector('#pn');
  $("#Allpatientslist3 tbody tr").click(function () {
    var tableDatavalue = $(this).find("td").eq(4).html();

    alert("View Patient: " + tableDatavalue.toString());

    let pnumbervalue = document.createElement('span');
    pnumbervalue.setAttribute("id", "pn1");


    pnumbervalue.textContent = tableDatavalue;

    pnumber.appendChild(pnumbervalue);



    document.getElementById("overlaypnumber").style.display = "block";

  });




};



const patientList4 = document.querySelector('#Allpatientslistdata4');
const setupList4 = (data) => {


  let htmlref = '';
  data.forEach(doc => {

    const patient4 = doc.data();
    // var PatientN0 = patient.getString("PatientNumber");
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const pd4 = `


                        <tr>
                            <td>

                            </td>
                            <td>
                              ${patient4.PatientName}
                            </td>
                            <td>
                              ${patient4.PatientID}
                            </td>
                            <td>
                             ${patient4.Recommendations}

                            </td>

                            <td>
                            ${patient4.ReferingDoctor}
                            </td>
                            <td>
                            ${time}
                            </td>
                            <td>
                            <button>View Patient</Button>
                            </td>
                        </tr>




    `;

    htmlref += pd4

  });


  patientList4.innerHTML = htmlref;


  // //   pdall1.innerHTML = html1;
  const pnumber = document.querySelector('#pn');
  $("#Allpatientslist4 tbody tr").click(function () {
    var tableDatavalue = $(this).find("td").eq(2).html();

    alert("View Patient: " + tableDatavalue.toString());

    let pnumbervalue = document.createElement('span');
    pnumbervalue.setAttribute("id", "pn1");


    pnumbervalue.textContent = tableDatavalue;

    pnumber.appendChild(pnumbervalue);



    document.getElementById("overlaypnumber").style.display = "block";

  });




};





const patientList5 = document.querySelector('#Allpatientslistdata5');
const setupList5 = (data) => {


  let htmldisch = '';
  data.forEach(doc => {

    const patient5 = doc.data();
    // var PatientN0 = patient.getString("PatientNumber");
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const pd5 = `


                        <tr>
                            <td>

                            </td>
                            <td>
                              ${patient5.PatientName}
                            </td>
                            <td>
                              ${patient5.Time}
                            </td>
                            
                           
                        </tr>




    `;

    htmldisch += pd5

  });


  patientList5.innerHTML = htmldisch;


  // //   pdall1.innerHTML = html1;
  // const pnumber = document.querySelector('#pn');
  // $("#Allpatientslist4 tbody tr").click(function () {
  //   var tableDatavalue = $(this).find("td").eq(2).html();

  //   alert("View Patient: " + tableDatavalue.toString());

  //   let pnumbervalue = document.createElement('span');
  //   pnumbervalue.setAttribute("id", "pn1");


  //   pnumbervalue.textContent = tableDatavalue;

  //   pnumber.appendChild(pnumbervalue);



  //   document.getElementById("overlaypnumber").style.display = "block";

  // });




};


const patientList6 = document.querySelector('#Allpatientslistdata6');
const setupList6 = (data) => {


  let htmlreft = '';
  data.forEach(doc => {

    const patient6 = doc.data();
    // var PatientN0 = patient.getString("PatientNumber");
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const pd6 = `


                        <tr>
                            <td>

                            </td>
                            <td>
                              ${patient6.PatientID}
                            </td>
                            <td>
                              ${patient6.refereto}
                            </td>
                            <td>
                              ${patient6.Time}
                            </td>
                            
                           
                        </tr>




    `;

    htmlreft += pd6

  });


  patientList6.innerHTML = htmlreft;


  // //   pdall1.innerHTML = html1;
  // const pnumber = document.querySelector('#pn');
  // $("#Allpatientslist4 tbody tr").click(function () {
  //   var tableDatavalue = $(this).find("td").eq(2).html();

  //   alert("View Patient: " + tableDatavalue.toString());

  //   let pnumbervalue = document.createElement('span');
  //   pnumbervalue.setAttribute("id", "pn1");


  //   pnumbervalue.textContent = tableDatavalue;

  //   pnumber.appendChild(pnumbervalue);



  //   document.getElementById("overlaypnumber").style.display = "block";

  // });




};

const patientList7 = document.querySelector('#Allpatientslistdata7');
const setupList7 = (data) => {


  let htmllab = '';
  data.forEach(doc => {

    const patient7 = doc.data();
    // var PatientN0 = patient.getString("PatientNumber");
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const pd7 = `


                        <tr>
                            <td>

                            </td>
                            <td>
                              ${patient7.PatientName}
                            </td>
                             <td>
                              ${patient7.PatientID}
                            </td>
                            <td>
                              ${patient7.LabRequest}
                            </td>
                             <td>
                             Requested
                            </td>
                            <td>
                             
                            </td>
                            
                           
                        </tr>




    `;

    htmllab += pd7

  });


  patientList7.innerHTML = htmllab;






};

const patientList8 = document.querySelector('#Allpatientslistdata8');
const setupList8 = (data) => {


  let htmllabcomp = '';
  data.forEach(doc => {

    const patient8 = doc.data();
    // var PatientN0 = patient.getString("PatientNumber");
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const pd8 = `


                        <tr>
                            <td>

                            </td>
                            <td>
                              ${patient8.PatientName}
                            </td>
                             <td>
                              ${patient8.PatientID}
                            </td>
                            <td>
                              ${patient8.LabRequest}
                            </td>
                             <td>
                             Completed
                            </td>
                            <td>
                             
                            </td>
                            
                           
                        </tr>




    `;

    htmllabcomp += pd8

  });


  patientList8.innerHTML = htmllabcomp;






};


const patientList9 = document.querySelector('#Allpatientslistdata9');
const setupList9 = (data) => {


  let htmlpham = '';
  data.forEach(doc => {

    const patient9 = doc.data();
    // var PatientN0 = patient.getString("PatientNumber");
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const pd9 = `


                        <tr>
                            <td>

                            </td>
                            <td>
                              ${patient9.Name}
                            </td>
                             <td>
                              ${patient9.PharmacyID}
                            </td>
                            <td>
                              ${patient9.email}
                            </td>
                             
                            
                           
                        </tr>




    `;

    htmlpham += pd9

  });


  patientList9.innerHTML = htmlpham;






};


// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("gohome").onclick = function () { gohome() };

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function gohome() {
  location.replace("home.html")
}





document.getElementById("dropdown").classList.toggle("show");




// }

// });

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const overlay = document.querySelector(".overlay");
const close = document.querySelector(".closebtn");

const optionslist = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionslist.forEach(o => {
  o.addEventListener("click", () => {
    overlay.classList.add("active1");
  });
});
close.addEventListener("click", () => {
  overlay.classList.remove("active1");
});
function openCash() {
  var ID = document.getElementById('patientsID').value;

  if (ID.length < 1) {
    // User is signed in.


    alert('Please enter Patient ID.');



    return;

  } else {
    // No user is signed in.

    document.getElementById("overlaycash").style.display = "block";
  }

}

function openMedical() {
  document.getElementById("overlayMedical").style.display = "block";
}
function openPaypal() {
  document.getElementById("overlayPaypal").style.display = "block";
}
function openPaynow() {
  document.getElementById("overlayPaynow").style.display = "block";
}
function openVisa() {
  document.getElementById("overlayVisa").style.display = "block";
}
function openecocash() {
  document.getElementById("overlayecocash").style.display = "block";
}
function opentelecash() {
  document.getElementById("overlaytelecash").style.display = "block";
}
function openonemoney() {
  document.getElementById("overlayonemoney").style.display = "block";
}
function openmycash() {
  document.getElementById("overlaymycash").style.display = "block";
}
function openzipit() {
  document.getElementById("overlayzipit").style.display = "block";
}
function openpharmacy() {
  document.getElementById("overlaypharmacy").style.display = "block";
}
function opencheckout() {
  document.getElementById("overlaycheckout").style.display = "block";
}
function openPscp() {
  document.getElementById("PrescriptionOverlay").style.display = "block";
}
function openNotes() {
  document.getElementById("NotesOverlay").style.display = "block";
}
function openLab() {
  document.getElementById("LabOverlay").style.display = "block";
}
function openRefferre1() {
  document.getElementById("Refrence1Overlay").style.display = "block";
}
function openReffere() {
  document.getElementById("RefrenceOverlay").style.display = "block";
}

function closeCash() {
  document.getElementById("overlaycash").style.display = "none";
}
function closeMedical() {
  document.getElementById("overlayMedical").style.display = "none";
}
function closePaypal() {
  document.getElementById("overlayPaypal").style.display = "none";
}
function closePaynow() {
  document.getElementById("overlayPaynow").style.display = "none";
}
function closeVisa() {
  document.getElementById("overlayVisa").style.display = "none";
}
function closeecocash() {
  document.getElementById("overlayecocash").style.display = "none";
}
function closetelecash() {
  document.getElementById("overlaytelecash").style.display = "none";
}
function closeonemoney() {
  document.getElementById("overlayonemoney").style.display = "none";
}
function closemycash() {
  document.getElementById("overlaymycash").style.display = "none";
}
function closezipit() {
  document.getElementById("overlayzipit").style.display = "none";
}
function closepharmacy() {
  document.getElementById("overlaypharmacy").style.display = "none";
}
function closecheckout() {
  document.getElementById("overlaycheckout").style.display = "none";
}
function closePscp() {
  document.getElementById("PrescriptionOverlay").style.display = "none";
}
function closeNotes() {
  document.getElementById("NotesOverlay").style.display = "none";
}
function closeLab() {
  document.getElementById("LabOverlay").style.display = "none";
}
function closeRefrence1() {
  document.getElementById("RefrenceOverlay1").style.display = "none";
}
function closeRefrence() {
  document.getElementById("RefrenceOverlay").style.display = "none";
}

function submit() {
  var ID1 = document.getElementById('CashAmount').value;
  if (ID1.length < 1) {
    // User is signed in.


    alert('Enter Amount');
    return;

  } else {
    alert('Submited');
    return;
    // document.getElementById("overlaycash").style.display = "block";
  }
}
//setting up db componets

function opencreatePatient() {
  window.location.replace('creatingPatient.html');
};













