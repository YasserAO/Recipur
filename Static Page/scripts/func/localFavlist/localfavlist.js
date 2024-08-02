import { idExtractor } from "../idExtractor.js";

export function localfavList(data){
    const que= 'localfavList'
    const favorite = localStorage.getItem(que)
    if(!favorite) localStorage.setItem(que,JSON.stringify({localfavList:[]}))
    if(data) {
        let Data = JSON.parse(localStorage.getItem(que));
        Data.localfavList.push(data);
        localStorage.setItem(que,JSON.stringify(Data));
    }
    else return JSON.parse(localStorage.getItem(que))
   
}

export function localfavListDelete(data){
    let extractedid = idExtractor(data.uri);
    const que= 'localfavList';
    let list = JSON.parse(localStorage.getItem(que)).localfavList
    console.log(`the id that u want to extract from recipe is ${extractedid}`)
    let localfavList = list.filter(id=>idExtractor(id.uri)!==extractedid);
    localStorage.setItem(que,JSON.stringify({localfavList}));
    
    
   
}