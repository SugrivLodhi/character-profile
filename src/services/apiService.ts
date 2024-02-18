const url = "https://rickandmortyapi.com/api";

const sendRequest = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

const fetchCharacter = async (params: string) => {
  return await sendRequest(`${url}/character/?${params}`);
};
const fetchAllEpisode = async () => {
  return await sendRequest(`${url}/episode`);
};
const fetchEpisode = async (params?: string) => {
  return await sendRequest(`${url}/episode/${params}`);
};
const fetchAllLocation = async () => {
  return await sendRequest(`${url}/location`);
};
const fetchLocation = async (params: string) => {
  return await sendRequest(`${url}/location/${params}`);
};
const fetchSingleCharacter = async (id: string | undefined) => {
  return await sendRequest(`${url}/character/${id}`);
};
export {
  fetchCharacter,
  fetchSingleCharacter,
  fetchEpisode,
  fetchLocation,
  fetchAllEpisode,
  fetchAllLocation,
};
