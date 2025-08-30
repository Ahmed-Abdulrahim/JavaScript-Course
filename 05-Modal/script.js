'use strict';
const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal'); // querySelectorAll
const closeModal = document.querySelector('.close-modal');

const AddHiddenClass = function () {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
};

for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overLay.classList.remove('hidden');
  });
closeModal.addEventListener('click', AddHiddenClass);
overLay.addEventListener('click', AddHiddenClass);
