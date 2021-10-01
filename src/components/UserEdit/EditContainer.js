import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-bottom: 120px;
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const DarkLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: black;
`;

const UserEditContainer = styled.div`
  display: grid;
  grid-auto-rows: minmax(120px, max-content);
  grid-template-columns: 80%;
  justify-content: center;
`;

const UserEdit = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 37px 0;
  & span {
    font-size: 32px;
    font-weight: 500;
  }
  & .changeLink {
    margin-left: 20px;
    font-size: 32px;
    font-weight: 500;
    color: ${(props) => props.theme.linkBlue};
    text-decoration: underline;
  }
`;

const EditContainer = ({ title, infos }) => (
  <Container>
    <Title>{title}</Title>
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
