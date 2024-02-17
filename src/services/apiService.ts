const url = "https://rickandmortyapi.com/api/character";

const sendRequest = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

const fetchCharacter = async (pageCount: number) => {
  return await sendRequest(`${url}/?page=${pageCount}`);
};
const fetchSingleCharacter = async (id: string | undefined) => {
  return await sendRequest(`${url}/${id}`);
};
export { fetchCharacter, fetchSingleCharacter };
