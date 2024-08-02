import { SearchQue } from '../OnStart/SearchQue.js';
import { changeClassList } from '../func/ShowDetails/ChangeClasslist.js';
import { localfavList } from '../func/localFavlist/localfavlist.js';
import pushLabels from '../func/pushLabels.js';


const search = document.getElementById('search');


export async function SearchRecipie(event){
    event.preventDefault();
    const searchInput = search.value;
    fetch('/search',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ searchInputs:searchInput })
    })
    .then(response=> response.json())
    .then(data=>{
        changeClassList('output');
        pushLabels(data)
        SearchQue(data);
        
    })
}

