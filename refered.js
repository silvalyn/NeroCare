var SelectHospital4 = sessionStorage.getItem("SelectHospital4");


db.collection('Hospitals').doc(SelectHospital4).collection('Refered Patients').get().then(snapshot => {
    setupList4(snapshot.docs);
    // console.log(snapshot.docs)
});