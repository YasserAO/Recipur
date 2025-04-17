import { UpdateRecipies } from "../asyncs/updatereq.js";
import { getcookie } from "../tools/getcookie.js";
import { getURIS } from "../tools/getURIS.js";

export const updateContent = async () => {
  const updater = "updater";
  const maxAge = 3600;
  const updaterCheck = getcookie(updater);

  if (!updaterCheck) {
    const uris = getURIS(JSON.parse(localStorage.getItem("favQue")));
    await UpdateRecipies(uris);
    document.cookie = `${updater}=true;max-age=${maxAge};path=/`;
    console.log("Content Has been updated");
  }
};
