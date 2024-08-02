
export function ParentLabel(label){
    let index=0;
    const parent = label.parentNode;
    for(let i =0; i<parent.children.length;i++){
        if(parent.children[i]==label) index=i;
    }
    return {index:index,label:label}
}