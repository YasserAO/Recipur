export function IngredientCreate(ingredients){
    const ingrCont = document.createElement('div');

    for(let i=0; i<ingredients.length;i++){
        const ingr = document.createElement('div');
        ingr.classList.add('ingr');
        ingr.innerHTML=`
        <div class="ingrImgContainer">
        <img src="${ingredients[i].image}" alt="${ingredients[i].food}">
        </div>
        <p><span>${i+1}): </span>${ingredients[i].text}</p>
        
        `
        ingrCont.append(ingr);
    }
    return ingrCont;
}