"use client";

import React from "react";
import { Footer} from './Footer';
import { Header} from './Header';

import styled from 'styled-components';

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`;

export const PageWrapper = (props) => {
  return (
    <StyledWrapper>
        <Header />
            {props.children}
        <Footer />
    </StyledWrapper>
  );
};

// You need to take a look on props.