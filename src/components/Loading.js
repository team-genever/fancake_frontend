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

const SmallRingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  & span {
    font-size: 14px;
  }
  @media only screen and (max-width: 640px) {
    gap: 2vw;
    & span {
      font-size: 3vw;
    }
  }
`;

export const SmallRing = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  &:after {
    content: " ";
    display: block;
    width: 15px;
    height: 15px;
    margin: 2px;
    border-radius: 50%;
    border: 3px solid #fff;
    border-color: ${(props) => props.theme.mainPink} transparent
      ${(props) => props.theme.mainPink} transparent;
    animation: ${ringAnimation} 1.2s linear infinite;
  }
`;

const Loading = () => <Ring />;

export const SmallLoading = () => (
  <SmallRingContainer>
    <SmallRing />
    <span>수정중...</span>
  </SmallRingContainer>
);

export default Loading;
