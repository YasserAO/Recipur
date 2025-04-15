export const getURIS = (data) => {
  let uris = [];
  data.forEach((element) => {
    uris.push(element.recipe.uri);
  });

  return uris;
};
