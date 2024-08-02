import { favList } from '../OnStart/favList.js';
import { favadd } from './Add to favorite/favadd.js';
import { restoreScrollPosition } from './Scrolling Functions/scrollstate.js';
import { ShowDetails } from './ShowDetails/ShowDetails.js';
import CreateRecipeLabel from './createLabels.js';
import { idExtractor } from './idExtractor.js';


export default function pushfavorite(data){
    const outPutArea = document.querySelector('.outputField');
    outPutArea.innerHTML='';
    data.forEach(element => {
        const recipeName = element.recipe.label;
        const recipeImage = element.recipe.image;
        const recipe_id = idExtractor(element.recipe.uri);

        const label  = CreateRecipeLabel(recipeName,recipeImage);
        let favoriteList = favList();
        let ifFav = false;
        if(favoriteList) favoriteList = favoriteList.favList
        for(let i = 0; i<favoriteList.length; i++){
            if(favoriteList[i]==recipe_id)  ifFav=true;
        }
        
        favadd(label,ifFav);
        ShowDetails(label);
        outPutArea.append(label);
        

        

    });
}