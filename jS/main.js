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
  document.getElementById("overlaycash").style.display = "block";
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
