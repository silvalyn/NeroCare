var SelectHospital3 = sessionStorage.getItem("SelectHospital3");


db.collection('Hospitals').doc(SelectHospital3).collection('Hospitalpatients').get().then(snapshot => {
    setupList3(snapshot.docs);
    // console.log(snapshot.docs)
});