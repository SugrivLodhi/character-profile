import { useEffect, useState } from "react";
import { APIResponse, Character } from "../types/profile";
type FetchCharacterFunction = () => Promise<APIResponse>;

const useGetCharacterProfile = (
  fetchCharacter: FetchCharacterFunction,
  params = ""
) => {
  const [data, setData] = useState<APIResponse | Character>();
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchCharacterProfile = async () => {
      setIsLoading(true);
      try {
        const respoonse = await fetchCharacter();
        setData(respoonse);
        setIsLoading(false);
        setError({});
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCharacterProfile();
  }, [params]);

  return {
    error,
    isLoading,
    data,
  };
};

export default useGetCharacterProfile;
