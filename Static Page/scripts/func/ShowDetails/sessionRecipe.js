export function RecipeInHand(data){
    const key = 'RecipeInHand';
    let storedData = sessionStorage.getItem(key);
    if(data) sessionStorage.setItem(key,JSON.stringify(data));
    else if(storedData) return JSON.parse(storedData);
}