export const url = "https://rickandmortyapi.com/api";

const sendRequest = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

const fetchCharacter = async (params: string) => {
  return await sendRequest(`${url}/character/?${params}`);
};

const fetchSingleCharacter = async (id: string | undefined) => {
  return await sendRequest(`${url}/character/${id}`);
};
export {
  fetchCharacter,
  fetchSingleCharacter,
};
