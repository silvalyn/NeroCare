



function closeLabList() {
    document.getElementById("lablist").style.display = "none";
    document.getElementById("data").style.display = "block";
}

function closeLab() {
    document.getElementById("overlaylab").style.display = "none";
}

const Hospitalvalue = document.querySelector('#overlayHospital');
const Hospital = document.querySelector('#ChooseHospital');


Hospitalvalue.addEventListener('submit', (e) => {
    e.preventDefault();

    var SelectHospital = Hospital.value;
    sessionStorage.setItem("SelectHospital", SelectHospital);




    window.location.replace('Allpatients.html')

    document.getElementById("overlayHospital").style.display = "none";
})


const Hospitalvalue1 = document.querySelector('#overlayHospital1');
const Hospital1 = document.querySelector('#ChooseHospital1');


Hospitalvalue1.addEventListener('submit', (e) => {
    e.preventDefault();

    var SelectHospital1 = Hospital1.value;
    sessionStorage.setItem("SelectHospital1", SelectHospital1);




    window.location.replace('Outpatientlist.html')

    document.getElementById("overlayHospital1").style.display = "none";
})

const Hospitalvalue2 = document.querySelector('#overlayHospital2');
const Hospital2 = document.querySelector('#ChooseHospital2');


Hospitalvalue2.addEventListener('submit', (e) => {
    e.preventDefault();

    var SelectHospital2 = Hospital2.value;
    sessionStorage.setItem("SelectHospital2", SelectHospital2);




    window.location.replace('InpatientList.html')

    document.getElementById("overlayHospital2").style.display = "none";
})

const Hospitalvalue3 = document.querySelector('#overlayHospital3');
const Hospital3 = document.querySelector('#ChooseHospital3');


Hospitalvalue3.addEventListener('submit', (e) => {
    e.preventDefault();

    var SelectHospital3 = Hospital3.value;
    sessionStorage.setItem("SelectHospital3", SelectHospital3);




    window.location.replace('hospitalList.html')

    document.getElementById("overlayHospital3").style.display = "none";
})

const Hospitalvalue4 = document.querySelector('#overlayHospital4');
const Hospital4 = document.querySelector('#ChooseHospital4');


Hospitalvalue4.addEventListener('submit', (e) => {
    e.preventDefault();

    var SelectHospital4 = Hospital4.value;
    sessionStorage.setItem("SelectHospital4", SelectHospital4);




    window.location.replace('refered.html')

    document.getElementById("overlayHospital4").style.display = "none";
})


const Hospitalvalue5 = document.querySelector('#overlayHospital5');
const Hospital5 = document.querySelector('#ChooseHospital5');


Hospitalvalue5.addEventListener('submit', (e) => {
    e.preventDefault();

    var SelectHospital5 = Hospital5.value;
    sessionStorage.setItem("SelectHospital5", SelectHospital5);




    window.location.replace('dischargeList.html')

    document.getElementById("overlayHospital5").style.display = "none";
})

const Hospitalvalue6 = document.querySelector('#overlayHospital6');
const Hospital6 = document.querySelector('#ChooseHospital6');


Hospitalvalue6.addEventListener('submit', (e) => {
    e.preventDefault();

    var SelectHospital6 = Hospital6.value;
    sessionStorage.setItem("SelectHospital6", SelectHospital6);




    window.location.replace('reffered-to-other.html')

    document.getElementById("overlayHospital6").style.display = "none";
})
const Hospitalvalue8 = document.querySelector('#overlayHospital8');
const Hospitallab8 = document.querySelector('#ChooseHospitallab8');


Hospitalvalue8.addEventListener('submit', (e) => {
    e.preventDefault();

    var SelectHospital8 = Hospitallab8.value;
    sessionStorage.setItem("SelectHospital8", SelectHospital8);




    window.location.replace('labtests.html')

    document.getElementById("overlayHospital8").style.display = "none";
})

const Hospitalvalue9 = document.querySelector('#overlayHospital9');
const Hospitallab9 = document.querySelector('#ChooseHospitallab9');


Hospitalvalue9.addEventListener('submit', (e) => {
    e.preventDefault();

    var SelectHospital9 = Hospitallab9.value;
    sessionStorage.setItem("SelectHospital9", SelectHospital9);




    window.location.replace('labComplete.html')

    document.getElementById("overlayHospital9").style.display = "none";
})