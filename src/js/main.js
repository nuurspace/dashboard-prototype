// General variables
let verified = false;

// UI variables
const verificationAlert = document.querySelector('.dashboard-alert');
const btcDrop = document.querySelector('.btc-drop');
const gbpDrop = document.querySelector('.gbp-drop');
const input = document.querySelectorAll('input');


// Event listeners

// Dashboard alert listener
verificationAlert.addEventListener('click', (e) => {
    if(e.target.classList.contains('close-alert') || e.target.parentElement.classList.contains('close-alert')){
        // verificationAlert.classList.add('animated','fadeOut','faster');
        setTimeout(() => {
            verificationAlert.remove();
        }, 0)
    }
})


// Create a random array of chart data
btcDrop.addEventListener('click', function(){
    var data = myChart.config.data;
    data.datasets[0].data = data2;
    data.labels = label2;
    data.datasets[0].borderColor = 'rgba(230,137,28,1)';
    data.datasets[0].backgroundColor = colorChart('rgba(230,137,28,0.1)');
    myChart.update();
  })

// Create a random array of chart data
gbpDrop.addEventListener('click', function(){
    var data = myChart.config.data;
    data.datasets[0].data = data1;
    data.labels = label1;
    data.datasets[0].borderColor = 'rgba(41, 190, 96, 1)';
    data.datasets[0].backgroundColor = colorChart('rgba(41, 190, 96, 0.1)');
    myChart.update();
  })


// document.querySelectorAll('input').forEach(function(){
//     this.addEventListener('focus', ()=>{
//         console.log("focused");
//         this.parentElement.classList.toggle('border-blue');
//     });

// })

// input.addEventListener('focus', ()=> {
//     input.parentElement.style.borderColor = 'blue';
// })

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

