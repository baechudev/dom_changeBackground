const redbtn = document.querySelector('.btn-red');
const greenbtn = document.querySelector('.btn-green');
const bluebtn = document.querySelector('.btn-blue');
const blackbtn = document.querySelector('.btn-black');
const whitebtn = document.querySelector('.btn-white');
const body = document.querySelector('.body');

redbtn.addEventListener('click', function () {
  body.style.backgroundColor = 'red';
});

greenbtn.addEventListener('click', function () {
  body.style.backgroundColor = 'green';
});

bluebtn.addEventListener('click', function () {
  body.style.backgroundColor = 'blue';
});

blackbtn.addEventListener('click', function () {
  body.style.backgroundColor = 'black';
});

whitebtn.addEventListener('click', function () {
  body.style.backgroundColor = 'white';
});
