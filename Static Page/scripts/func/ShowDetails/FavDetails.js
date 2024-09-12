import { favList } from "../../OnStart/favList.js";
import { idExtractor } from "../idExtractor.js";

export function favCheck(recipe) {
  let Recipe_ID;
  let ifFav = false;
  let favorList = favList();
  if (recipe) Recipe_ID = idExtractor(recipe.uri);

  for (let i = 0; i < favorList.length; i++) {
    if (favorList[i] == Recipe_ID) ifFav = true;
  }

  return ifFav;
}
