import { idExtractor } from "../idExtractor.js";

export function localfavList(data) {
  const que = "localfavList";
  const favorite = localStorage.getItem(que);
  if (!favorite) localStorage.setItem(que, JSON.stringify([]));
  if (data) {
    data = { recipe: data };
    let Data = JSON.parse(localStorage.getItem(que));
    Data.push(data);
    localStorage.setItem(que, JSON.stringify(Data));
  } else return JSON.parse(localStorage.getItem(que));
}

export function localfavListDelete(data) {
  let extractedid = idExtractor(data.uri);
  const que = "localfavList";
  let list = JSON.parse(localStorage.getItem(que));
  let localfavList = list.filter(
    (item) => idExtractor(item.recipe.uri) !== extractedid
  );
  localStorage.setItem(que, JSON.stringify(localfavList));
}
