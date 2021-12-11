import React, { useEffect } from "react";
import styled from "styled-components";

const PopupBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundGray};
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContainer = styled.div`
  background-color: white;
  padding: ${(props) =>
    props.padding ? `${props.padding[0]}px ${props.padding[1]}px` : "none"};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  z-index: 11;
  & .infoContainer {
    display: flex;
    justify-content: space-between;
    width: 350px;
  }
  & .buttonsContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  & small {
    font-size: 12px;
    font-weight: normal;
    color: ${(props) => props.theme.boxGray};
  }
  & span {
    font-size: 12px;
    font-weight: normal;
    color: black;
  }
  & button {
    background-color: ${(props) => props.theme.mainPink};
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 10px;
  }
  & button:hover {
    background-color: ${(props) => props.theme.mainPinkHover};
    cursor: pointer;
  }
  @media screen and (max-width: 640px) {
    padding: 8vw;
    width: 89.5vw;
    border-radius: 3vw;
    margin-bottom: 20vw;
    & div {
      width: 90%;
    }
    & small {
      font-size: 3.5vw;
    }
    & span {
      font-size: 3.5vw;
    }
    & button {
      padding: 2vw 7vw;
      font-size: 3.3vw;
      border-radius: 2vw;
      text-align: center;
    }
  }
`;

const Popup = ({ children, padding }) => {
  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.add("scrollLock");
    return () => {
      body.classList.remove("scrollLock");
    };
  }, []);
  return (
    <PopupBackground id="popup">
      <PopupContainer padding={padding}>{children}</PopupContainer>
    </PopupBackground>
  );
};

export default Popup;
