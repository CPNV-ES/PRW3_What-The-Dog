import { fetcher } from './../../lib/fetcher';
import useSWR from "swr";
import { Dog } from "./Dog";

type UseLinksResult = {
  dogs: Dog[];
  isLoading: boolean;
  isError: boolean;
};

export const useLinks = (): UseLinksResult => {
  const { data, error } = useSWR("localhost:3412/dogs/dogs", fetcher);

  return {
    dogs: data ?? [],
    isLoading: !error && !data,
    isError: !!error,
  };
};