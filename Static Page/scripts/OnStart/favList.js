export function favList(data){
    const que= 'favList'
    const favorite = localStorage.getItem(que)
    if(!favorite) localStorage.setItem(que,JSON.stringify({favList:[]}))
    if(data) {
        let Data = JSON.parse(localStorage.getItem(que));
        Data.favList.push(data);
        localStorage.setItem(que,JSON.stringify(Data));
    }
    else return JSON.parse(localStorage.getItem(que))
   
}

export function favListDelete(data){
    const que= 'favList';
    let list = JSON.parse(localStorage.getItem(que)).favList
    let favList = list.filter(id=>id!==data);
    localStorage.setItem(que,JSON.stringify({favList}))
    
    
   
}