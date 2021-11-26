import React from "react";
import styled from "styled-components";
import { IUsersResponseModel } from "../../utils/models";

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  padding: 20px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
`;

const TableBody = styled.div``;

const TableBodyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #ccc;
`;

const Image = styled.img`
  max-width: 50%;
  max-height: 50%;
`;

export const Table = ({ users }: { users: IUsersResponseModel[] }) => {
  return (
    <TableWrapper>
      <TableHeader>
        <div>Avatart</div>
        <div>Imię i nazwisko</div>
        <div>Email</div>
      </TableHeader>
      <TableBody>
        {users.map((user: IUsersResponseModel) => (
          <TableBodyWrapper key={user.id}>
            <div>
              <Image src={user.avatar} alt="USer Avatar" />
            </div>
            <div>
              {user.first_name} {user.last_name}
            </div>
            <div>{user.email}</div>
          </TableBodyWrapper>
        ))}
      </TableBody>
    </TableWrapper>
  );
};
