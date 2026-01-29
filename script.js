const Button = document.querySelector('.btn');
const input = document.querySelector('.input');
const imgBox = document.querySelector('.QR');
const image = document.querySelector('.img');
const hide = document.querySelector('.hide');

Button.addEventListener('click', () => {
  let qrValue = input.value;
  if(!qrValue){
   return hide.classList.remove('hide');
  }
  image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
  imgBox.classList.remove('hidden');
})

input.addEventListener('keyup', () => {
  if(!input.value){
    imgBox.classList.add('hidden');
  }
})