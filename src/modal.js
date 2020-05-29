const btnCreateImg = document.querySelector('.icon-add');
const btnClose = document.querySelector('.btn-close');
const modal = document.querySelector('.modal');
const btnSave = document.querySelector('.btn-save');
const modalOverlay = document.querySelector('.modal-overlay');
const gallery = document.querySelector('.gallery');

btnClose.addEventListener('click', () => {
  modal.style.display = 'none';
  modalOverlay.style.display = 'none';
});
btnSave.addEventListener('click', () => {
  modal.style.display = 'none';
  modalOverlay.style.display = 'none';
});
btnCreateImg.addEventListener('click', () => {
  modal.style.display = 'flex';
  modalOverlay.style.display = 'flex';
});
modalOverlay.addEventListener('click', () => {
  modal.style.display = 'none';
  modalOverlay.style.display = 'none';
});
