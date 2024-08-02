export function idExtractor(uri){
    let match = uri.match(/recipe_(\w+)/);
    if(match){
        return match[1];
    }
}