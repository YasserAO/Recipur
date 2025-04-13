import { SearchQue } from "../OnStart/SearchQue.js";

const imgLoadingHandle = (event) => {
  const imgContainer = event.target.parentNode.parentNode;
  const activity = event.target.parentNode;
  imgContainer.classList.remove("load-wraper");
  activity.classList.remove("activity");
  event.target.classList.add("loaded");
  event.target.removeEventListener("load", imgLoadingHandle);
};

export default function CreateRecipeLabel(recipeName, recipeImg) {
  const label = document.createElement("div");

  label.innerHTML = `
    <h3>${recipeName}</h3>
    
                <div class="settings">
                    <div class="imgContainer load-wraper">
                        <div class="activity">
                        <img src=${recipeImg}   alt="RecipieImg">
                        </div>
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
  label.classList.add("recipe");
  const img = label.querySelector(".imgContainer img");

  img.addEventListener("load", imgLoadingHandle);
  return label;
}
