const myButton = document.querySelector('.bttn');
const myInput = document.getElementById('myinput');
const myImage = document.getElementById('qrimage');

function myQrGenerator() {
   myImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${myInput.value}`
 if(myInput.value === "") {
    myImage.style.display = "none";
 }
}

myButton.addEventListener('click', myQrGenerator);