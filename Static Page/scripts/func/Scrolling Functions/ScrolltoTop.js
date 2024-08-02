export function scrolltotop(){
    const outputField = document.querySelector('.searchArea');
    const position = outputField.getBoundingClientRect().top ;
    window.scrollBy({
        top:position,
        behavior:'smooth'
    })
}