const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const overlay = document.querySelector(".overlay");
const close = document.querySelector(".closebtn");

const optionslist = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionslist.forEach(o => {
  o.addEventListener("click", () => {
    overlay.classList.add("active1");
  });
});
close.addEventListener("click", () => {
  overlay.classList.remove("active1");
});
function openCash() {
  var ID = document.getElementById('patientsID').value;
  if (ID.length < 1) {
    // User is signed in.


    alert('Please enter Patient ID.');
    return;

  } else {
    // No user is signed in.

    document.getElementById("overlaycash").style.display = "block";
  }

}
function openMedical() {
  document.getElementById("overlayMedical").style.display = "block";
}
function openPaypal() {
  document.getElementById("overlayPaypal").style.display = "block";
}
function openPaynow() {
  document.getElementById("overlayPaynow").style.display = "block";
}
function openVisa() {
  document.getElementById("overlayVisa").style.display = "block";
}
function openecocash() {
  document.getElementById("overlayecocash").style.display = "block";
}
function opentelecash() {
  document.getElementById("overlaytelecash").style.display = "block";
}
function openonemoney() {
  document.getElementById("overlayonemoney").style.display = "block";
}
function openmycash() {
  document.getElementById("overlaymycash").style.display = "block";
}
function openzipit() {
  document.getElementById("overlayzipit").style.display = "block";
}
function openpharmacy() {
  document.getElementById("overlaypharmacy").style.display = "block";
}
function opencheckout() {
  document.getElementById("overlaycheckout").style.display = "block";
}
function openPscp() {
  document.getElementById("PrescriptionOverlay").style.display = "block";
}
function openNotes() {
  document.getElementById("NotesOverlay").style.display = "block";
}
function openLab() {
  document.getElementById("LabOverlay").style.display = "block";
}
function openRefferre1() {
  document.getElementById("Refrence1Overlay").style.display = "block";
}
function openReffere() {
  document.getElementById("RefrenceOverlay").style.display = "block";
}

function closeCash() {
  document.getElementById("overlaycash").style.display = "none";
}
function closeMedical() {
  document.getElementById("overlayMedical").style.display = "none";
}
function closePaypal() {
  document.getElementById("overlayPaypal").style.display = "none";
}
function closePaynow() {
  document.getElementById("overlayPaynow").style.display = "none";
}
function closeVisa() {
  document.getElementById("overlayVisa").style.display = "none";
}
function closeecocash() {
  document.getElementById("overlayecocash").style.display = "none";
}
function closetelecash() {
  document.getElementById("overlaytelecash").style.display = "none";
}
function closeonemoney() {
  document.getElementById("overlayonemoney").style.display = "none";
}
function closemycash() {
  document.getElementById("overlaymycash").style.display = "none";
}
function closezipit() {
  document.getElementById("overlayzipit").style.display = "none";
}
function closepharmacy() {
  document.getElementById("overlaypharmacy").style.display = "none";
}
function closecheckout() {
  document.getElementById("overlaycheckout").style.display = "none";
}
function closePscp() {
  document.getElementById("PrescriptionOverlay").style.display = "none";
}
function closeNotes() {
  document.getElementById("NotesOverlay").style.display = "none";
}
function closeLab() {
  document.getElementById("LabOverlay").style.display = "none";
}
function closeRefrence1() {
  document.getElementById("RefrenceOverlay1").style.display = "none";
}
function closeRefrence() {
  document.getElementById("RefrenceOverlay").style.display = "none";
}
function submit() {
  var ID1 = document.getElementById('CashAmount').value;
  if (ID1.length < 1) {
    // User is signed in.


    alert('Enter Amount');
    return;

  } else {
    alert('Submited');
    return;
    // document.getElementById("overlaycash").style.display = "block";
  }
}

