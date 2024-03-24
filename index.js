const inputElement = document.getElementById("input");
const alertMsg = document.querySelector(".input--alert");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const modal = document.getElementById("modal");
const btn = document.getElementById("myBtn");
const closeModal = document.getElementById("close");



function changeInputText() {
    if (emailRegex.test(inputElement.value.trim())) {
        alertMsg.textContent = "We promise to never spam you.";
        alertMsg.classList.add("show--text");
        inputElement.classList.remove("invalid");
    } else {
        alertMsg.classList.remove("show--text", "invalid");
        alertMsg.textContent = "";
    }
}

function handleSubmit(e) {
    e.preventDefault();
    if (emailRegex.test(inputElement.value.trim())) {
        inputElement.classList.remove("invalid");
        modal.classList.add("modal-show")
        inputElement.value = ""
        alertMsg.textContent = "";
    } else {
        alertMsg.textContent = "Please Enter a Valid Email Address.";
        alertMsg.classList.add("show--text");
        inputElement.classList.add("invalid")
    }
}


closeModal.onclick = function () {
    modal.classList.remove("modal-show")
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.classList.remove("modal-show")
    }
}