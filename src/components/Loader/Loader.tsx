import React from "react";
import ImportedLoader from "react-loader-spinner";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
export const Loader = () => (
  <LoaderWrapper>
    <ImportedLoader type="ThreeDots" color="#000f39" height={80} width={80} />
  </LoaderWrapper>
);
