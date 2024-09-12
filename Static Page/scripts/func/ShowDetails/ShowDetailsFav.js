import { SearchQue } from "../../OnStart/SearchQue.js";
import { ParentLabel } from "../Add to favorite/parentlabel.js";
import { createDetailElement } from "./CreateDetailElement.js";
import pushLabels from "../pushLabels.js";
import { RecipeInHand } from "./sessionRecipe.js";
import { favList, favListDelete } from "../../OnStart/favList.js";
import { idExtractor } from "../idExtractor.js";
import { scrolltotop } from "../Scrolling Functions/ScrolltoTop.js";
import {
  restoreScrollPosition,
  saveScrollPosition,
} from "../Scrolling Functions/scrollstate.js";
import { changeClassList } from "./ChangeClasslist.js";
import {
  localfavList,
  localfavListDelete,
} from "../localFavlist/localfavlist.js";
import pushfavors from "../pushfavors.js";

export function ShowDetailsFav(label) {
  const ShowDet = label.children[1].children[1].children[1].children[0];
  ShowDet.addEventListener("click", (event) => {
    const parent = ParentLabel(label);
    const recipe = localfavList()[parent.index];
    const outputField = label.parentElement;
    const htmlElement = createDetailElement(recipe);
    RecipeInHand(recipe);
    outputField.innerHTML = ``;
    outputField.append(htmlElement);
    changeClassList("details");
    saveScrollPosition(label);
    scrolltotop();

    // BackWards Button
    const backArrow = htmlElement.querySelector(".backArrow");
    if (backArrow)
      backArrow.addEventListener("click", () => {
        changeClassList("output");
        pushfavors(localfavList());
        sessionStorage.clear();
        restoreScrollPosition();
      });

    // FavortieButton
    const favoriteAdd = htmlElement.querySelector(".favoriteAdd");
    if (favoriteAdd)
      favoriteAdd.addEventListener("click", () => {
        const recipe_ID = idExtractor(recipe.uri);
        if (favoriteAdd.classList.contains("dark")) {
          favoriteAdd.classList.remove("dark");
          favListDelete(recipe_ID);
          localfavListDelete(recipe);
        } else {
          favoriteAdd.classList.add("dark");
          favList(recipe_ID);
          console.log(recipe);
          localfavList(recipe);
        }
      });
  });
}
