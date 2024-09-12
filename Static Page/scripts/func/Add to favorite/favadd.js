import { favcheck } from "./favcheck.js";
import { favcheckForFav } from "./favcheckForFav.js";
import { ParentLabel } from "./parentlabel.js";

export function favadd(label, ifFav, fv) {
  const Fav = label.children[1].children[1].children[0].children[0];
  if (ifFav) Fav.classList.add("dark");

  Fav.addEventListener("click", async () => {
    if (fv) favcheckForFav(Fav, ParentLabel(label));
    else favcheck(Fav, ParentLabel(label));
  });
}
