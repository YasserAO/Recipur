import { localfavListUpdate } from "../func/localFavlist/localfavlist.js";
import { favQue } from "../OnStart/favQue.js";
import { SearchQue } from "../OnStart/SearchQue.js";

export async function UpdateRecipies(uris, browse) {
  fetch("/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ uris: uris }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (browse) {
        return SearchQue(data);
      }
      localfavListUpdate(data);
    });
}
