export function changeClassList(type){
    let element = document.querySelector('.searchArea > div');
    if(type=='output'){
        element.classList='outputField';
    }
    else if(type=='details'){
        element.classList='outputDetails';
    }
}