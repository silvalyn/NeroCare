var SelectHospital9 = sessionStorage.getItem("SelectHospital9");

db.collection('LAB').doc(SelectHospital9).collection('Complete Requests').get().then(snapshot => {
    setupList8(snapshot.docs);
    // console.log(snapshot.docs)
});
//