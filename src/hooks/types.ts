export interface IResponse<T> {
  data: T | null;
  hasError: boolean;
  isLoading: boolean;
}

export type IUseFetch = <T>(
  url: string,
  method?: string,
  headers?: {
    [key: string]: string;
  }
) => IResponse<T>;
