import './index';
import './style/main.scss';

const viewBox = document.querySelector('.viewBox');
viewBox.addEventListener('click', () => {
  console.log(viewBox);
  const gallery = document.querySelector('.gallery');
  viewBox.style.display = 'none';
  const modalRecipe = document.querySelector('.modalRecipe');
  modalRecipe.style.display = 'flex';
  let ingredients = document.querySelector('.ingredientsBox');

  const nameRecipe = document.querySelector('.name-recipe');
  const descriptionRecipe = document.querySelector('.description-recipe');
  const imgRecipe = document.querySelector('.imgViewCard');
  modalRecipe.innerHTML = `
   <div class="recipeBox">
                  <img class="imgModalRecipe" src="${imgRecipe.src}">
                  <span class="modal-name-recipe">${nameRecipe.textContent}</span>
				<span class="modal-description-recipe">${descriptionRecipe.textContent}</span>
				<div class="modal-ingredients">Ingredients</div></div>
	`;
});

const homepage = document.querySelector('.homePage');
homepage.addEventListener('click', () => {
  viewBox.style.display = 'flex';
  const modalRecipe = document.querySelector('.modalRecipe');
  modalRecipe.style.display = 'none';
});
