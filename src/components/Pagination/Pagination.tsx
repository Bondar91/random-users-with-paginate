import React, { FC } from "react";
import styled from "styled-components";

const PaginationWrapper = styled.div`
  display: flex;
`;

const PaginationList = styled.ul`
  list-style: none;
  display: flex;
`;

const PaginationItem = styled.li`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: 0.2s all;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

const PaginationItemLink = styled.button`
  font-size: 20px;
  background: none;
  border: none;
`;

interface IPaginationProps {
  page: number;
  totalPages: number;
  handlePagination: (page: number) => void;
}
export const Pagination: FC<IPaginationProps> = ({
  page,
  totalPages,
  handlePagination,
}) => {
  const goToNextPage = () => {
    handlePagination(page + 1);
  };

  const goToPreviousPage = () => {
    handlePagination(page - 1);
  };

  return (
    <PaginationWrapper>
      <PaginationList>
        <PaginationItem>
          <PaginationItemLink disabled={page === 1} onClick={goToPreviousPage}>
            Poprzednia
          </PaginationItemLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationItemLink disabled={page === totalPages} onClick={goToNextPage}>
            Następna
          </PaginationItemLink>
        </PaginationItem>
      </PaginationList>
    </PaginationWrapper>
  );
};
