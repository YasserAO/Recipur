import { localfavList, localfavListDelete } from "../localFavlist/localfavlist.js";
import { favCheck } from "./FavDetails.js";
import { IngredientCreate } from "./IngredientCreate.js";


export function createDetailElement(recipe){
    const Nuts = recipe.totalNutrients;
    const proteins = Math.round(Nuts.PROCNT.quantity);
    const carbs = Math.round(Nuts.CHOCDF.quantity);
    const calories = Math.round(recipe.calories);
    const fat = Math.round(Nuts.FAT.quantity);
    
    const container = document.createElement('div');
    container.classList.add('recipe-details');
    container.innerHTML=`
    
    <div class="foodtitle"><h3>${recipe.label}</h3></div>
    <div class="imageContainer">
        <img src="${recipe.image}" alt="${recipe.label}">
    </div>
    <div class="ingredients">
        <h4>ingredients</h4>
        
    </div>
    <div class="nuts">
    <div class="calories">
        <p>Calories: <span>${calories} Kcal</span></p>
    </div>
    <div class="nutsContainer">
        <p>Proteins: <span>${proteins} g</span></p>
        <p>Carbs: <span>${carbs} g</span></p>
        <p>Fat:<span>${fat} g</span></p>
    </div> 
        
    
    </div>
    <div class="directions">
        <p>Directions: <a href="${recipe.url}">${recipe.source}</a></p>
    </div>
    <div class="setting">
        <div class="backArrow">
            <img src="images/arrow-left-solid.svg" alt="backWard">
        </div>
        
        <div class="favoriteAdd">
            <img src="/images/AddToFavorite.png" alt="AddToFavorite">
        </div>
    </div>
    `
    const ingrCont = container.querySelector('.ingredients');
    const favoriteAdd = container.querySelector('.favoriteAdd')
    ingrCont.append(IngredientCreate(recipe.ingredients));

    if(favCheck(recipe)) favoriteAdd.classList.add('dark');
        
    
        

    
    
    

    return container
}