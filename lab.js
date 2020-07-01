function submittest() {
    document.getElementById("LabSubmitOverlay").style.display = "block";
}
function closeSubmitLab() {
    document.getElementById("LabSubmitOverlay").style.display = "none";
}
const SubmitLabrequest = document.querySelector('#LabSubmitOverlay');

var today = new Date();
var time = today.getDate() + "-" + today.getMonth() + "-" + today.getFullYear() + "---" + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var Labname = document.getElementById('Patientname1');
var LabID = document.getElementById('PatientID1');
var Labtype = document.getElementById('LabTest');
var HospitalLab = document.getElementById('Hospitallab');
var labdoc = document.getElementById('labdocupload');



SubmitLabrequest.addEventListener('submit', (e) => {
    e.preventDefault();

    db.collection('Patients').doc(LabID.value).collection('PatientData').doc('Clinical Data').collection('LabResults').add({
        PatientName: Labname.value,
        PatientID: LabID.value,
        LabRequest: Labtype.value,
        ConductingLab: HospitalLab.value,
        Time: time


    })
    db.collection('LAB').doc(HospitalLab.value).collection('Complete Requests').add({
        PatientName: Labname.value,
        PatientID: LabID.value,
        LabRequest: Labtype.value,
        ConductingLab: HospitalLab.value

    })

    firebase.storage().ref('labdata/' + time + '/labdta.pdf').put(file).then(function () {
        console.log('successfull')
        alert("You have Submitted a Lab invastigation");

    })
    db.collection('LAB').doc(HospitalLab.value).collection('Requested').doc(LabID.value).delete().then(function () {
        // console.log("Document successfully deleted!");
    }).catch(function (error) {
        // console.error("Error removing document: ", error);
    });

})

function openselectlab() {
    document.getElementById("LablistOverlay").style.display = "block";

}


function closeselectlab() {
    document.getElementById("LablistOverlay").style.display = "none";

}


const SelectLab = document.querySelector('#LablistOverlay');
const SelectLab1 = document.querySelector('#LabCompleteOverlay');




var HospitalLab = document.getElementById('Hospitallab2');
const tabe = document.querySelector('#labtable');
const tabe1 = document.querySelector('#labtable1');
var HospitalLab1 = document.getElementById('Hospitallab3');



SelectLab.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection("LAB").doc(HospitalLab.value).collection("Requested").get().then(snapshot => {
        // console.log(snapshot.docs);

        let html1 = '';
        snapshot.docs.forEach(doc => {
            const patient1 = doc.data();

            const pd1 = `
                            <tr>
                           <td>

                           </td>
                           <td>
                            ${patient1.PatientName}
                          </td>
                          <td>
                            ${patient1.PatientID}
                          </td>
                          <td>
                            ${patient1.LabRequest}
                          </td>
                        <td>
                          Pending
                         </td>
                        </tr>


        `;

            html1 += pd1

        });





        tabe.innerHTML = html1;

    });


    document.getElementById("lab_list").style.display = "block";
    document.getElementById("LabHome").style.display = "none";

    document.getElementById("LablistOverlay").style.display = "none";


})

SelectLab1.addEventListener('submit', (e) => {
    e.preventDefault();

    db.collection("LAB").doc(HospitalLab1.value).collection("Complete Requests").get().then(snapshot => {

        let html2 = '';
        snapshot.docs.forEach(doc => {
            const patient2 = doc.data();

            const pd2 = `
                            <tr>
                           <td>

                           </td>
                           <td>
                            ${patient2.PatientName}
                          </td>
                          <td>
                            ${patient2.PatientID}
                          </td>
                          <td>
                            ${patient2.LabRequest}
                          </td>
                        <td>
                          Complete
                         </td>
                        </tr>


        `;

            html2 += pd2
        });

        tabe1.innerHTML = html2;

    })
    document.getElementById("lab_Complete").style.display = "block";
    document.getElementById("LabHome").style.display = "none";

    document.getElementById("LabCompleteOverlay").style.display = "none";




})

function opencompletelab() {
    document.getElementById("LabCompleteOverlay").style.display = "block";

}
function closeCompletelab() {
    document.getElementById("LabCompleteOverlay").style.display = "none";

}
function backtolab() {
    document.getElementById("lab_Complete").style.display = "none";
    document.getElementById("LabHome").style.display = "block";


}
function backtolab1() {
    document.getElementById("lab_list").style.display = "none";
    document.getElementById("LabHome").style.display = "block";


}
// const tabe = document.querySelector('#labtable');

// function labrequest(doc) {
//     let html1 = '';
//     data.forEach(doc => {
//         const patient1 = doc.data();

//         const pd1 = `

//                        <td>

//                        </td>
//                        <td>
//                         ${patient1.PatientName}
//                       </td>
//                       <td>
//                         ${patient1.PatientID}
//                       </td>
//                       <td>
//                         ${patient1.LabRequest}
//                       </td>
//                     <td>
//                       Pending
//                      </td>



//     `;

//         html1 += pd1

//     });





//     tabe.innerHTML = html1;

// }
