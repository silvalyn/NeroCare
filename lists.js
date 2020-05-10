db.collection('Hospitals').doc('UBH').collection('Patients').get().then(snapshot => {
    setupList(snapshot.docs);
    // console.log(snapshot.docs)
})
db.collection("Patients").doc(msg.value).collection("PatientData").doc("DemographicData").get().then(snapshot => {
    demographic(snapshot);
});