export function SearchQue(data){
    const que= 'SearchQue'
    if(data) localStorage.setItem(que,JSON.stringify(data));
    else return JSON.parse(localStorage.getItem(que))
    
   
}