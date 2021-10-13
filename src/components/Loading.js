import React from "react";
import styled, { keyframes } from "styled-components";

const ringAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Ring = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: ${(props) => props.theme.mainPink} transparent
      ${(props) => props.theme.mainPink} transparent;
    animation: ${ringAnimation} 1.2s linear infinite;
  }
`;

const Loading = () => <Ring />;

export default Loading;
