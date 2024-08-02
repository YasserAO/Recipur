import { SearchQue } from "../OnStart/SearchQue.js";



export default function CreateRecipeLabel(recipeName,recipeImg){

    const label = document.createElement('div');

    label.innerHTML=`
    <h3>${recipeName}</h3>
    
                <div class="settings">
                    <div class="imgContainer">
                        <img src=${recipeImg} alt="RecipieImg">
                    </div>
                    <div class="recipeOptions">
                        <div class="AddFav">
                            <div class="favContainer">
                                <img src="/images/AddToFavorite.png" alt="AddToFavorite">
                            </div>
                            <p>Add To Favorite</p>
                        </div>
                        
                        <div class="ShowDetails">
                            <div class="detContainer">
                                <img src="/images/ShowDetails.png" alt="ShowDetails">
                            </div>
                            <p>Show Details</p>
                        </div>
                    </div>
                </div>
                `;
    label.classList.add('recipe');    
    return label;
}

