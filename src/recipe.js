export class Recipe {
  constructor(apiPath, name, url) {
    this.apiPath = apiPath;
    this.name = name;
    this.url = url;
  }
  async getAllRecipe() {
    console.log(this.apiPath);
    const allRecipes = await fetch(this.apiPath);
    const res = await allRecipes.json();
    const arr = res.map((element) => {
      const gallery = document.querySelector('.gallery');
      const card = document.createElement('div');
      card.id = element.id;
      card.classList.add('card-recipe');
      card.description = element.description;
      const img = document.createElement('img');
      img.classList.add('recipe-img');
      img.src = element.image;
      const btnShow = document.createElement('button');
      btnShow.textContent = 'VIEW RECIPE';
      btnShow.classList.add('btn-view');
      const span = document.createElement('span');
      span.textContent = element.name;
      span.classList.add('nameRecipe');
      card.append(img);
      card.append(span);
      card.append(btnShow);
      gallery.append(card);
      let ingredientContainer = [];
      card.addEventListener('click', () => {
        const viewBox = document.querySelector('.viewBox');
        const listIngredients = element.ingredients;
        const textDescription = element.description;
        const ingredients = listIngredients.forEach((element) => {
          const { id, image, name, amount } = element;
          element = `<div class="ingredientsBox" id="${id}"><img class="ingredients-img" src="${image}"></img><span class="nameIngredient">${name}</span>
            <span class="countIngredient">${amount}</span></div>`;
          ingredientContainer.push(element);
        });
        let boxIngredients = ingredientContainer.join('');
        ingredientContainer = [];
        viewBox.innerHTML = `
                <div class="view-card" id=${card.id}>
                  <img class="imgViewCard" src=${img.src}>
                 <div class="ingredient-container">
                  <span class="name-recipe">${span.textContent}</span>
                <span class="description-recipe">${textDescription}</span>
                <div class="ingredients">Ingredients</div>${boxIngredients}</div>
                <button class="btn-viewRecipe">VIEW RECIPE</button></div>`;
      });
      return res;
    });
  }

  async addNewRecipe() {
    this.name = inputName.value;
    this.url = inputUrl.value;
    const body = {};
    body.name = this.name;
    body.image = this.url;
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
    const newRecipe = await fetch(this.apiPath, option);
    const gallery = document.querySelector('.gallery');
    const card = document.createElement('div');
    card.classList.add('card-recipe');
    const btnShow = document.createElement('button');
    btnShow.textContent = 'VIEW RECIPE';
    const img = document.createElement('img');
    img.classList.add('recipe-img');
    img.src = body.image;
    const span = document.createElement('span');
    span.textContent = body.name;
    span.classList.add('nameRecipe');
    card.append(img);
    card.append(span);
    card.append(btnShow);
    gallery.append(card);
  }
}

const apiPath = 'http://localhost:3000/data';

const recipes = new Recipe(apiPath);

const btnAddImg = document.querySelector('.icon-add');
const btnSave = document.querySelector('.btn-save');
btnSave.addEventListener('click', recipes.addNewRecipe.bind(recipes));

const inputName = document.querySelector('.input-name');
const inputUrl = document.querySelector('.input-url');

const card = document.querySelector('.card-recipe');
document.addEventListener('DOMContentLoaded', recipes.getAllRecipe.bind(recipes));
