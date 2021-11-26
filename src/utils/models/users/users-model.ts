export interface IUsersResponseModel {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

export interface IGetUsersListResponseModel {
  page: number;
  per_page: number;
  total_pages: number;
  total: number;
  data: IUsersResponseModel[];
}
