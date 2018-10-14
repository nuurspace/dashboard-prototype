const walletAddress = document.querySelector('#wallet-address');
const input = document.querySelectorAll('input');

document.addEventListener("DOMContentLoaded", function() {
    walletAddress.focus();
});

input.forEach((element)=>{
    element.addEventListener('focus', ()=> {
        element.parentElement.style.borderColor = '#045CC7';
        element.parentElement.style.boxShadow = '0px 3px 3px rgba(0,0,0,0.1)';
    });
    
    element.addEventListener('blur', ()=>{
        element.parentElement.style.borderColor = '#C0C7CC';
        element.parentElement.style.boxShadow = 'none';
    })
})