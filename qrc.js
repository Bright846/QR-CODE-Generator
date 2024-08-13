const inputbox = document.querySelector('.input-field');
const imageContainer = document.querySelector('.qr-code-box');
const qrCode = document.querySelector('.qr-code');
const button = document.querySelector('button');

const APIurl ='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

function qrGenerator(){
    if(inputbox.value <= 0){
        alert('Please enter a valid input');
        return;
       }
       else{ 
            button.innerHTML = "<div class='loader'></div>";
            setTimeout(() => {
                imageContainer.classList.remove("visible");
                button.innerHTML = 'QR Code Generated';
            }, 3000);
       
   qrCode.src = APIurl + inputbox.value;

  
}
}
button.addEventListener('click', qrGenerator );


   
   
