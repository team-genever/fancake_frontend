import Loading from "components/Loading";
import Popup from "components/Popup";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
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

const PopupTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  line-height: 20px;
  margin-bottom: 10px;
  @media screen and (max-width: 640px) {
    font-size: 5.3vw;
    line-height: 6vw;
    margin-bottom: 5vw;
  }
`;

const PopupDescription = styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  margin-bottom: 10px;
  @media screen and (max-width: 640px) {
    font-size: 3.5vw;
    line-height: 4.5vw;
    margin-bottom: 5vw;
  }
`;

const Callback = () => {
  const [popup, setPopup] = useState(false);
  const [_, setCookie] = useCookies(["Authorization"]);
  const [accessToken, setAccessToken] = useState(null);
  const [accessTokenExpiresIn, setExpire] = useState(null);
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
      setAccessToken(response.data.accessToken);
      setExpire(response.data.accessTokenExpiresIn);
      if (response.data.new) {
        setPopup(true);
      } else {
        setCookie("Authorization", response.data.accessToken, {
          expires: new Date(response.data.accessTokenExpiresIn),
          path: "/",
        });
        window.location.replace("/");
      }
    } catch (error) {
      window.alert(error.response.data[0].message);
    } finally {
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
      {popup ? (
        <Popup padding={[30, 30]}>
          <PopupTitle>가입을 축하드립니다!</PopupTitle>
          <PopupDescription>
            20000 베리가 지급되었습니다!
            <br />
            '나의 지갑'을 통해 확인하고 원하는 영상을 구매해보세요!
          </PopupDescription>
          <div className="buttonsContainer">
            <button
              onClick={() => {
                setCookie("Authorization", accessToken, {
                  expires: new Date(accessTokenExpiresIn),
                  path: "/",
                });
                window.location.replace("/");
                setPopup(false);
              }}
            >
              체험하러가기
            </button>
          </div>
        </Popup>
      ) : (
        ""
      )}
    </Container>
  );
};

export default Callback;
