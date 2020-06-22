
const patientList = document.querySelector('#Allpatientslist');
const setupList = (data) => {


  let html = '';
  data.forEach(doc => {

    const patient = doc.data();
    // var PatientN0 = patient.getString("PatientNumber");
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const pd = `
     <thead>
     <tr><th><i class="fas fa-camera"></i></th>
                        <th>Full Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Patient Number</th>
                        <th>Time</th>
                        <th>Action</th></tr>

     </theard>
     <tbody>
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
                        </tbody>

    
    
    `;

    html += pd

  });


  patientList.innerHTML = html;


  //   pdall1.innerHTML = html1;
  const pnumber = document.querySelector('#pn');
  $("#Allpatientslist tbody tr").click(function () {
    var tableDatavalue = $(this).find("td").eq(4).html();

    alert("View Patient: " + tableDatavalue.toString());

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












// // const patientportal = document.querySelector('.overlay4');

// const patientportal = document.querySelector('.overlay4');


// patientportal.addEventListener('submit', (e) => {
//   e.preventDefault();


//   // var pp1 = document.getElementById("pnumber");
//   // db.collection("Patients").doc(pp1.value).collection("PatientData").get().then((snapshot) => {
//   //   console.log(snapshot.docs);
//   //   snapshot.docs.forEach(doc => {
//   //     inputdata(doc);
//   //   });

//   //   // inputdata(doc);
//   //   // window.location.replace('patientPortal.html');

//   // });
//   // db.collection("Patients").doc(pp1.value).get().then(function (doc) {
//   //   console.log(doc.data())
//   //   var picture = doc.data().userID;
//   //   let img = document.getElementById('profileImage');
//   //   firebase.storage().ref('patients/' + picture + '/profilePic.jpg').getDownloadURL().then(imgUrl => {
//   //     img.src = imgUrl;

//   //   })

//   // });

//   // db.collection("Patients").doc(pp1.value).collection("PatientData").doc("AdministrativeData").collection("CashPayments").get().then(snapshot => {
//   //   // console.log(snapshot.docs);

//   //   cashdata(snapshot);


//   //   // inputdata(doc);
//   //   // window.location.replace('patientPortal.html');

//   // });
//   // db.collection("Patients").doc(pp1.value).collection("PatientData").doc("AdministrativeData").collection("Medical Payments").get().then(snapshot => {
//   //   // console.log(snapshot.docs);

//   //   medicaldata(snapshot);


//   //   // inputdata(doc);
//   //   // window.location.replace('patientPortal.html');

// });



// const pdall1 = document.querySelector('#pdata1');




// const smoking = document.querySelector('#smokingvalue');
// const Disability = document.querySelector('#Disabilitiesvalue');
// const Alchole = document.querySelector('#Alcholevalue');
// const Religion = document.querySelector('#Religionvalue');
// const MaritalStatus = document.querySelector('#MaritalStatusvalue');
// const PatientNumber = document.querySelector('#PatientNumbervalue');
// const BirthPlace = document.querySelector('#BirthPlacevalue');
// const FamilyDetails = document.querySelector('#FamilDetailsvalue');
// const NextofKin = document.querySelector('#NextofKinvalue');
// const BMI = document.querySelector('#BMIvalue');
// const dailyjob = document.querySelector('#dailyjob');
// const nationality = document.querySelector('#Nationality');
// const citizenship = document.querySelector('#citizenship');
// const comunityservice = document.querySelector('#cominityservice');
// const criminalrecord = document.querySelector('#criminalrecord');



// function inputdata(doc) {
//   let div = document.createElement('div')
//   let name = document.createElement('h4')
//   let dateofbirth = document.createElement('h5')
//   let gender = document.createElement('h5')
//   let fullAddress = document.createElement('h5')
//   let city = document.createElement('h5')
//   let contactDetails = document.createElement('h5')

//   let smokingvalue = document.createElement('span')
//   let Disabilityvalue = document.createElement('span')
//   let Alcholevalue = document.createElement('span')
//   let Religionvalue = document.createElement('span')
//   let MaritalStatusvalue = document.createElement('span')
//   let PatientNumbervalue = document.createElement('span')
//   let BirthPlacevalue = document.createElement('span')
//   let FamilyDetailsvalue = document.createElement('span')
//   let NextofKinvalue = document.createElement('span')
//   let BMIvalue = document.createElement('span')

//   let dailyjobvalue = document.createElement('span')
//   let nationalityvalue = document.createElement('span')
//   let citizenshipvalue = document.createElement('span')
//   let communityservicevalue = document.createElement('span')
//   let criminalrecordvalue = document.createElement('span')





//   name.textContent = doc.data().name;
//   dateofbirth.textContent = doc.data().DateofBirth;
//   gender.textContent = doc.data().Gender;
//   fullAddress.textContent = doc.data().Address;
//   city.textContent = doc.data().City;
//   contactDetails.textContent = doc.data().ContactDetails;

//   smokingvalue.textContent = doc.data().SmokingStatus;
//   Disabilityvalue.textContent = doc.data().Disability;
//   Religionvalue.textContent = doc.data().Religion;
//   Alcholevalue.textContent = doc.data().AlcholeConsumption;
//   MaritalStatusvalue.textContent = doc.data().MaritalStatus;
//   PatientNumbervalue.textContent = doc.data().PatientNumber;
//   BirthPlacevalue.textContent = doc.data().PlaceOfBirth;
//   FamilyDetailsvalue.textContent = doc.data().FamilyDetails;
//   NextofKinvalue.textContent = doc.data().NextOfKin;
//   BMIvalue.textContent = doc.data().BMI;

//   citizenshipvalue.textContent = doc.data().Citizenship;
//   nationalityvalue.textContent = doc.data().Nationality;
//   communityservicevalue.textContent = doc.data().communityservice;
//   criminalrecordvalue.textContent = doc.data().criminalrecord;
//   dailyjobvalue.textContent = doc.data().DailyJob;





//   pdall1.appendChild(name);
//   pdall1.appendChild(dateofbirth);
//   pdall1.appendChild(gender);
//   pdall1.appendChild(fullAddress);
//   pdall1.appendChild(city);
//   pdall1.appendChild(div);

//   smoking.appendChild(smokingvalue);
//   Disability.appendChild(Disabilityvalue);
//   Alchole.appendChild(Alcholevalue);
//   Religion.appendChild(Religionvalue);
//   MaritalStatus.appendChild(MaritalStatusvalue);
//   PatientNumber.appendChild(PatientNumbervalue);
//   BirthPlace.appendChild(BirthPlacevalue);
//   NextofKin.appendChild(NextofKinvalue);
//   FamilyDetails.appendChild(FamilyDetailsvalue);
//   BMI.appendChild(BMIvalue);

//   dailyjob.appendChild(dailyjobvalue);
//   nationality.appendChild(nationalityvalue);
//   citizenship.appendChild(citizenshipvalue);
//   // comunityservice.appendChild(communityservicevalue);
//   // criminalrecord.appendChild(criminalrecordvalue);




//   document.getElementById("list").style.display = "none";
//   document.getElementById("data").style.display = "block";

// };

// const date = document.querySelector('#accountsDate');
// const Description = document.querySelector('#accountsDescription');
// const paymentMethod = document.querySelector('#accountspaymentMethod');
// const Amount = document.querySelector('#accountsAmount');
// const Status = document.querySelector('#accountsStatus');

// const tabe = document.querySelector('#accountsTable');



// function cashdata(data) {
//   let html1 = '';
//   data.forEach(doc => {
//     const patient1 = doc.data();

//     const pd1 = `
//                        <tr>

//                        <td>

//                        </td>
//                        <td>
//                         Cash payments
//                       </td>
//                       <td>
//                         CASH
//                       </td>
//                       <td>
//                         ${patient1.amount}
//                       </td>
//                     <td>
//                       Processed
//                      </td>
//                        <td>
//                        <h5>Approved</h5>

//                       </td> 
//                       </tr> 


//     `;

//     html1 += pd1

//   });





//   tabe.innerHTML = html1;





//   // // let date = document.createElement('h4');
//   // let tr = document.createElement('tr');
//   // // let td = document.createElement('td');
//   // let datevalue = document.createElement('span');
//   // let Descriptionvalue = document.createElement('span');
//   // let Paymentvalue = document.createElement('span');
//   // let Amountvalue = document.createElement('td');
//   // let Statusvalue = document.createElement('span');


//   // tr.setAttribute('data-id', doc.id);
//   // datevalue.textContent = doc.data().Date;
//   // Descriptionvalue.textContent = doc.data().description;
//   // Paymentvalue.textContent = doc.data().Payment;
//   // Amountvalue.textContent = doc.data().amount;
//   // Statusvalue.textContent = doc.data().status;
//   // // Actionvalue.textContent = doc.data().Action;


//   // // date.appendChild(datevalue);
//   // // Description.appendChild(Descriptionvalue);
//   // // paymentMethod.appendChild(Paymentvalue);
//   // // Amount.appendChild(Amountvalue);
//   // // Status.appendChild(Statusvalue);
//   // // td.appendChild(date);
//   // // td.appendChild(Description);
//   // // td.appendChild(paymentMethod);
//   // // td.appendChild(Amount);
//   // // td.appendChild(Status);
//   // tr.appendChild(datevalue);
//   // tr.appendChild(Descriptionvalue);
//   // tr.appendChild(Paymentvalue);

//   // tr.appendChild(Amountvalue);

//   // tr.appendChild(Statusvalue);
//   // // tr.appendChild(Actionvalue);


//   // tabe.appendChild(tr);








// }
// const tabe1 = document.querySelector('#accountsTablemedical');

// function medicaldata(data) {
//   let html2 = '';
//   data.forEach(doc => {
//     const patient1 = doc.data();

//     const pd2 = `
//                        <tr>

//                        <td>

//                        </td>
//                        <td>
//                           ${patient1.Condition}
//                       </td>
//                       <td>
//                         ${patient1.Organisation}
//                       </td>
//                       <td>
//                         Medical Amount
//                       </td>
//                     <td>
//                       ${patient1.MemberNumber}
//                      </td>
//                        <td>
//                        <h5>Approved</h5>

//                       </td> 
//                       </tr> 


//     `;

//     html2 += pd2

//   });


//   tabe1.innerHTML = html2;




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













