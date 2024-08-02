import { favList } from '../OnStart/favList.js';
import { favadd } from './Add to favorite/favadd.js';
import { restoreScrollPosition } from './Scrolling Functions/scrollstate.js';
import { ShowDetails } from './ShowDetails/ShowDetails.js';
import { ShowDetailsFav } from './ShowDetails/ShowDetailsFav.js';
import CreateRecipeLabel from './createLabels.js';
import { idExtractor } from './idExtractor.js';


export default function pushfavors(data){
    const outPutArea = document.querySelector('#favoriteField');
    outPutArea.innerHTML='';
    data.forEach(element => {
        const recipeName = element.label;
        const recipeImage = element.image;
        const recipe_id = idExtractor(element.uri);

        const label  = CreateRecipeLabel(recipeName,recipeImage);
        let favoriteList = favList();
        let ifFav = false;
        if(favoriteList) favoriteList = favoriteList.favList
        for(let i = 0; i<favoriteList.length; i++){
            if(favoriteList[i]==recipe_id)  ifFav=true;
        }
        
        favadd(label,ifFav);
        ShowDetailsFav(label);
        outPutArea.append(label);
        

        

    });
}