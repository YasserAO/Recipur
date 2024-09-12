import { SearchQue } from "./OnStart/SearchQue.js";
import { EventListerRun } from "./OnStart/eventListners.js";

import { localfavList } from "./func/localFavlist/localfavlist.js";
import pushLabels from "./func/pushLabels.js";
import pushfavors from "./func/pushfavors.js";

EventListerRun();

const inputField = document.querySelector("#outputField");
const favoriteField = document.querySelector("#favoriteField");

if (inputField && SearchQue()) pushLabels(SearchQue());
if (favoriteField && localfavList()) pushfavors(localfavList());
