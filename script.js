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

document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234'){ 
        alert('Login bem-sucedido!');
        loginModal.style.display = 'none';
    }else {
        alert('Usuário ou Senha errados!!!');
    }
    
})