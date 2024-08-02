let scrollPosition = 0;

export function saveScrollPosition(label){
    let scrollPed = label.getBoundingClientRect().bottom
}

export function restoreScrollPosition(){
    window.scrollBy({
        top:scrollPosition,
        behavior:'smooth'
    })
    
    
}