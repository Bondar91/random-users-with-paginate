import React, { FC } from "react";
import styled from "styled-components";

import { Loader } from "../Loader";
import { ILayout } from "./types";

const LayoutWrapper = styled.div`
  width: 100%;
  max-width: 1170px;
  height: 100vh;
  position: relative;
  margin: 20px auto;
`;

const PageTitle = styled.h2`
  color: ${({ theme }) => theme.colors.black};
`;

export const Layout: FC<ILayout> = ({
  title,
  children,
  isLoading = false,
}): JSX.Element => {
  return (
    <>
      <LayoutWrapper>
        <PageTitle>{title}</PageTitle>

        {isLoading ? <Loader /> : <>{children}</>}
      </LayoutWrapper>
    </>
  );
};
