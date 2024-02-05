// Codes for Navigations

const menuBtn = document.getElementById('menu-btn');
const navMenuContainer = document.getElementById('nav-menu-container');
const goBack = document.getElementById('go-back');
const addContainer = document.getElementById('add-container');
const addMsgContainer = document.getElementById('add-msg-container');
const adBtn = document.getElementById('add-btn');

menuBtn.addEventListener("click", ()=>{
    navMenuContainer.style.display = 'block';
    document.body.classList.toggle('no-scroll');
    addContainer.style.display = 'none'
})

goBack.addEventListener("click", ()=>{
    navMenuContainer.style.display = 'none';
    document.body.classList.remove('no-scroll')
    addContainer.style.display = 'block';
})

setInterval(()=>{
    addMsgContainer.style.display = 'none';
    adBtn.style.display = 'flex';
},3000)


// Code for sharing buttons


var currentUrl = window.location.href;

// Output the current URL in an alert box
alert("Current URL: " + currentUrl);