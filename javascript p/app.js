/*==================== Input ====================*/

let userName = document.getElementById('userName');
let password = document.getElementById('password');
let userMail = document.getElementById('mail');
let btn = document.getElementById('btn');
let form = document.getElementById('form');
let file = document.getElementById('file');
/*==================== Output ====================*/

let Email = document.getElementById('Email');
let Name = document.getElementById('Name');
let img = document.getElementById('img');

/*==================== Event ====================*/

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let cardName = userName.value;
    let cardEmail = userMail.value;
    Name.innerText = 'Name: ' + cardName;
    Email.innerText = 'Email: ' + cardEmail;
    userName.value = '';
    password.value = '';
    userMail.value = '';
});