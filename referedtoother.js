var SelectHospital6 = sessionStorage.getItem("SelectHospital6");


db.collection('Hospitals').doc(SelectHospital6).collection('Referedtoother').get().then(snapshot => {
    setupList6(snapshot.docs);
    // console.log(snapshot.docs)
});