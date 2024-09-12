import { SearchQue } from "../../OnStart/SearchQue.js";
import { favList, favListDelete } from "../../OnStart/favList.js";
import { idExtractor } from "../idExtractor.js";
import {
  localfavList,
  localfavListDelete,
} from "../localFavlist/localfavlist.js";

const favClass = "dark";
export function favcheck(fav, parent) {
  if (fav.classList.contains(favClass)) return removeFromFavorite(fav, parent);
  AddToFavorite(fav, parent);
}

function removeFromFavorite(fav, parent) {
  let recipe = SearchQue()[parent.index];
  let recipe_ID = idExtractor(recipe.recipe.uri);
  favListDelete(recipe_ID);
  localfavListDelete(recipe.recipe);

  fav.classList.remove(favClass);
}

function AddToFavorite(fav, parent) {
  fav.classList.add(favClass);
  let recipe = SearchQue()[parent.index];
  let recipe_ID = idExtractor(recipe.recipe.uri);
  favList(recipe_ID);
  localfavList(recipe.recipe);
}
