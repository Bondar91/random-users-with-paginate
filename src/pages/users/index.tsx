import React, { useState } from "react";

import { useFetch } from "../../hooks/useFetch";
import styled from "styled-components";
import {
  IGetUsersListResponseModel,
} from "../../utils/models";

import { Layout, Table, Pagination } from "../../components";

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const TotalPages = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Select = styled.select`
  padding: 5px;
`;

const apiUrl = `https://reqres.in/api/users`;

const Users = () => {
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(page);

  const handlePages = (updatePage: number) => 
    setPage(updatePage);

  const handleChangeItemsPerPage = (event: React.ChangeEvent<HTMLSelectElement>, total: number) => {
    event.preventDefault()
    const itemsPerPage = Number(event.target.value);
    setPerPage(itemsPerPage);
  };

  const {
    data,
    isLoading,
    hasError,
  } = useFetch<IGetUsersListResponseModel>(apiUrl, page, perPage);
  
  //select items options
  const items = []
  const total: number = data?.total!;

  for (let i = 1; i <= total; i++) {
    items.push(<option key={i} value={i}>{i}</option>)
  }

  return (
    <Layout title="Lista użytkowników" isLoading={isLoading}>
      {data?.data && (
        <>
          <Table users={data?.data} />

          <Footer>
            <Pagination
              page={page}
              totalPages={data?.total_pages}
              handlePagination={handlePages}
            />
            <TotalPages>
              Ilość na stronie: 
              <Select value={perPage} onChange={(event) => handleChangeItemsPerPage(event, data?.total)}>
                {items}
              </Select>
            </TotalPages>
          </Footer>
        </>
      )}
      {hasError && <p>Błąd! Proszę spróbować jeszcze raz!</p>}
    </Layout>
  );
};

export default Users;
