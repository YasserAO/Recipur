import { favcheck } from "./favcheck.js";
import { ParentLabel } from "./parentlabel.js";

export function favadd(label, ifFav) {
  const Fav = label.children[1].children[1].children[0].children[0];
  if (ifFav) Fav.classList.add("dark");

  Fav.addEventListener("click", async () => {
    favcheck(Fav, ParentLabel(label));
  });
}
