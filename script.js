const loginModal = document.getElementById('loginModal');
const loginButton = document.getElementById('loginButton');
const closeModal = document.getElementsByClassName('close')[0];

loginButton.onclick = function() {
    loginModal.style.display = 'block';
}

closeModal.onclick = function() {
    loginModal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
}