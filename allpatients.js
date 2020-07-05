
var SelectHospital = sessionStorage.getItem("SelectHospital");
db.collection('Hospitals').doc(SelectHospital).collection('Patients').get().then(snapshot => {
    setupList(snapshot.docs);

});