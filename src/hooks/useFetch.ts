import { useState, useEffect } from "react";
import { IResponse } from "./types";

export const useFetch = <T>(
  url: string,
  page: number = 1,
  perPage: number = 2,
  method: string = "GET"
): IResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [hasError, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(`${url}?page=${page}&per_page=${perPage}`, {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await response.json();

        setData(json);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };

    fetchData();
  }, [page, perPage, url, method]);

  return { data, isLoading, hasError };
};
