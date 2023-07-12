let modal = document.getElementById("modal");
let openModalBtn = document.getElementById("openModalBtn");
let closeBtn = document.getElementsByClassName("close")[0];

// Open modal function
function openModal() {
  modal.style.display = "block";
  document.body.classList.add("modal-open");
}

// Close modal function
function closeModal() {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}

// Event listeners
openModalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    closeModal();
  }
});
