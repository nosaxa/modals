'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let btn of btnsShowModal) {
    btn.addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (!modal.classList.contains('hidden')) {
        if(e.code === 'Escape') {
            closeModal();
        }
    }
});
