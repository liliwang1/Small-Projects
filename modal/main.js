let modal = document.getElementById('simple-modal');
let modalBtn = document.getElementById('modal-btn');
let closeBtn = document.getElementsByClassName('close-btn')[0];

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutsideClose);

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

function clickOutsideClose(e) {
    if(e.target === modal) {
        modal.style.display = "none";
    }
}