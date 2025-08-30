'use strict';
const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal'); // querySelectorAll
const closeModal = document.querySelector('.close-modal');
// Function to Add Class Hidden To Male Modal inVisible
const AddHiddenClass = function () {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
};

for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overLay.classList.remove('hidden');
  });
//Close Modal by x
closeModal.addEventListener('click', AddHiddenClass);
// Close Modal By Cliking on OverLay
overLay.addEventListener('click', AddHiddenClass);
//  Add Escape Key
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden'))
    AddHiddenClass();
});
