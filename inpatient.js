var SelectHospital2 = sessionStorage.getItem("SelectHospital2");
db.collection('Hospitals').doc(SelectHospital2).collection('Inpatients').get().then(snapshot => {
    setupList2(snapshot.docs);
    // console.log(snapshot.docs)
});


