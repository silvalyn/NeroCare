var SelectHospital1 = sessionStorage.getItem("SelectHospital1");

db.collection('Hospitals').doc(SelectHospital1).collection('Outpatient').get().then(snapshot => {
    setupList1(snapshot.docs);
    // console.log(snapshot.docs)
});
// const outpatientoverlay = document.querySelector('#overlaypnumber');


// outpatientoverlay.addEventListener('submit', (e) => {
//     e.preventDefault();



// })