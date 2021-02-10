export const findCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(({ results }) => results.map(result => ({
      id: result.id,
      name: result.name,
      image: result.image
    })));
};
