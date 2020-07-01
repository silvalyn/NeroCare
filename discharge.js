var SelectHospital5 = sessionStorage.getItem("SelectHospital5");

db.collection('Hospitals').doc(SelectHospital5).collection('DischargeList').get().then(snapshot => {
    setupList5(snapshot.docs);
    // console.log(snapshot.docs)
});