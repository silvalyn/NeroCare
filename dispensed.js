db.collection('Pharmacy').doc('Trinity Pharmacy').collection('Dispensed Px').get().then(snapshot => {
    Pharmacydispensed(snapshot.docs);
    // console.log(snapshot.docs)
});