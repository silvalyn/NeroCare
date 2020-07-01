var SelectHospital8 = sessionStorage.getItem("SelectHospital8");


db.collection('Hospitals').doc(SelectHospital8).collection('LabList').get().then(snapshot => {
    setupList7(snapshot.docs);
    // console.log(snapshot.docs)
});