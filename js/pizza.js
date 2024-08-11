// Onclick on register shows registration form 
const registerButton = document.getElementById('register');
registerButton.addEventListener('click',()=>{
    const registerWrap = document.getElementById('registerform');
    const loginForm = document.getElementById('loginForm');
    const logContainer = document.getElementById('logContainer');
    loginForm.style.display = "none";
    logContainer.appendChild(registerWrap);
    registerWrap.style.display = "flex";

});

// Onclick on login shows login form 
const loginButton = document.getElementById('login');
loginButton.addEventListener('click',()=>{
    const registerWrap = document.getElementById('registerform');
    const loginForm = document.getElementById('loginForm');
    const logContainer = document.getElementById('logContainer');
    registerWrap.style.display = "none";
    logContainer.appendChild(loginForm);
    loginForm.style.display = "flex";
});

