import Loading from "components/Loading";
import React, { useEffect, useState } from "react";
import { api } from "settings";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  max-height: max-content;
  padding: 160px 120px 200px 120px;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 1007px) {
    padding: 120px 90px 300px 90px;
  }
  @media only screen and (max-width: 640px) {
    padding: 21vw 5vw;
    padding-bottom: 0;
    height: 95vh;
  }
`;

const Callback = () => {
  const request = async (dataArray) => {
    try {
      console.log({
        access_token: dataArray[0][1],
        token_type: dataArray[2][1],
        expires_in: parseInt(dataArray[3][1]),
      });
      const response = await api.post("oauth/naver", {
        access_token: dataArray[0][1],
        token_type: dataArray[2][1],
        expires_in: parseInt(dataArray[3][1]),
      });
      console.log(response);
    } catch {
      window.alert("로그인 도중 오류가 발생했습니다. 다시 시도해주세요.");
      //window.location.replace("/");
    }
  };

  useEffect(() => {
    const dataArray = window.location.hash
      .split("&")
      .map((item) => item.split("="));
    request(dataArray);
  }, []);
  return (
    <Container>
      <Loading />
    </Container>
  );
};

export default Callback;
