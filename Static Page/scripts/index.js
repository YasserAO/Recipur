import { SearchQue } from "./OnStart/SearchQue.js";
import { EventListerRun } from "./OnStart/eventListners.js";
import { favQue } from "./OnStart/favQue.js";

import { localfavList } from "./func/localFavlist/localfavlist.js";
import pushLabels from "./func/pushLabels.js";
import pushfavors from "./func/pushfavors.js";

EventListerRun();
favQue(localfavList());
const inputField = document.querySelector("#outputField");
const favoriteField = document.querySelector("#favoriteField");

if (inputField && SearchQue()) pushLabels(SearchQue());
if (favoriteField && favQue()) pushfavors(favQue());
