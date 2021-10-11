import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-bottom: 5vw;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1vw;
  @media only screen and (max-width: 640px) {
    margin-bottom: 3vw;
  }
`;

const Title = styled.h2`
  font-size: 2.2vw;
  font-weight: 500;
  @media only screen and (max-width: 640px) {
    font-size: 4vw;
  }
`;

const EditButton = styled.button`
  border: none;
  text-decoration: underline;
  color: ${(props) => props.theme.linkBlue};
  font-size: 1.4vw;
  font-weight: bold;
  background-color: transparent;
  margin-right: 8vw;
  &:hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 640px) {
    font-size: 3vw;
    margin: 0;
  }
`;

const DarkLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: black;
  @media only screen and (max-width: 640px) {
    height: 1px;
  }
`;

const UserEditContainer = styled.div`
  display: grid;
  grid-auto-rows: minmax(4vw, max-content);
  grid-template-columns: 80%;
  justify-content: center;
  @media only screen and (max-width: 640px) {
    grid-template-columns: 100%;
    grid-auto-rows: minmax(13vw, max-content);
  }
`;

const UserEdit = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1.5vw 0;
  & span {
    font-size: 1.4vw;
    font-weight: 500;
  }
  & .changeLink {
    margin-left: 1vw;
    font-size: 1.4vw;
    font-weight: 500;
    color: ${(props) => props.theme.linkBlue};
    text-decoration: underline;
  }
  @media only screen and (max-width: 640px) {
    padding: 2vw 0;
    & span {
      font-size: 3vw;
    }
    & .changeLink {
      font-size: 3vw;
    }
  }
`;

const EditContainer = ({ title, infos, isDelivery }) => (
  <Container>
    <TitleContainer>
      <Title>{title}</Title>
      {isDelivery && <EditButton>변경</EditButton>}
    </TitleContainer>
    <DarkLine />
    <UserEditContainer>
      {infos.map((info, index) => (
        <UserEdit key={index}>
          <span className="type">{info.type}</span>
          <div>
            {info.content && <span className="content">{info.content}</span>}
            {info.changeLink && (
              <Link className="changeLink" to={info.changeLink}>
                변경
              </Link>
            )}
          </div>
        </UserEdit>
      ))}
    </UserEditContainer>
  </Container>
);

export default EditContainer;
