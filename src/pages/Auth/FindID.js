import React, { useRef, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Popup from "components/Popup";
import { api } from "settings";

const Container = styled.div`
  width: 100%;
  height: max-content;
  padding: 200px 300px 200px 300px;

  @media only screen and (max-width: 1007px) {
    padding: 200px 100px 200px 100px;
  }

  @media only screen and (max-width: 640px) {
    padding: 200px 30px 200px 30px;
  }
`;

const LoginDiv = styled.div`
  width: 400px;
  height: 100%;
  margin: 0 auto;
  font-size: 16px;
  font-weight: 600;

  @media only screen and (max-width: 640px) {
    width: 300px;
  }
`;

const TextDiv = styled.div`
  width: 100%;
  height: 100%;
  font-size: 35px;
  font-weight: bold;
  text-align: left;
  margin: 0 0 25px 0;

  @media only screen and (max-width: 640px) {
    font-size: 25px;
    margin: 0 0 25px 0;
  }
`;

const NameInput = styled.input`
  width: 100%;
  height: 55px;
  margin: 10px 0 25px 0;
  padding: 20px;
  border-radius: 10px;
  border: solid 1px #979797;
  font-size: 18px;
  color: black;

  @media only screen and (max-width: 640px) {
    font-size: 15px;
    height: 45px;
    margin: 5px 0 15px 0;
  }
`;

const EmailInput = styled.input`
  width: 100%;
  height: 55px;
  margin: 10px 0 50px 0;
  padding: 20px;
  border-radius: 10px;
  border: solid 1px #979797;
  font-size: 18px;
  color: black;

  @media only screen and (max-width: 640px) {
    font-size: 15px;
    height: 45px;
    margin: 5px 0 25px 0;
  }
`;

const ErrorMessage = styled.p`
  width: 100%;
  margin: 0 0 0 0;
  color: red;
  font-size: 18px;
  text-align: center;

  @media only screen and (max-width: 640px) {
    font-size: 13px;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  height: 70px;
  margin: 10px 0 0 0;
  //padding: 37px 348px 37px 347px;
  border-radius: 60px;
  background-color: #da225f;
  font-size: 20px;
  color: #fff;
  border: none;
  cursor: pointer;

  :hover {
    background-color: #e34076;
  }

  @media only screen and (max-width: 640px) {
    font-size: 15px;
    height: 55px;
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

const FindID = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [findIDinfo, setFindIDinfo] = useState({
    name: "",
    email: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [emailOK, setEmailOK] = useState(false);
  const [loginAble, setLoginAble] = useState("#878485");
  const [popup, setPopup] = useState(false);

  const inputChange = (e) => {
    let findIDinfoTemp = {
      name: "",
      email: "",
    };
    let emailOKTemp = false;
    console.log(findIDinfoTemp);
    setErrorMessage("");
    setLoginAble("#878485");
    if (e.target.type === "email") {
      let email = e.target.value;
      console.log(email);
      let re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(email)) {
        //valid email address
        emailOKTemp = true;
        findIDinfoTemp.email = email;
      } else {
        //invalid email address
        emailOKTemp = false;
      }
    } else if (e.target.type === "text") {
      findIDinfoTemp.name = e.target.value;
    }

    setEmailOK(emailOKTemp);
    setFindIDinfo(findIDinfoTemp);

    if (emailOKTemp === true && findIDinfoTemp.name !== "") {
      setLoginAble("#da225f");
    }
  };

  const loginClicked = async (e) => {
    if (findIDinfo.name === "") {
      setErrorMessage("이름을 입력해주세요.");
    } else if (emailOK === false) {
      setErrorMessage("이메일이 정확하지 않습니다");
    } else {
      setErrorMessage("");
      try {
        const response = await api.get("users/id", {
          params: {
            email: findIDinfo.email,
            name: findIDinfo.name,
          },
        });
        console.log(response);
        //setPopup(true);
      } catch (error) {
        window.alert("로그인을 하는 도중 오류가 발생했습니다.");
      }
    }
  };

  return (
    <Container>
      <Helmet>
        <title>fanCake | 아이디 찾기</title>
      </Helmet>
      {popup ? (
        <Popup padding={[30, 30]}>
          <PopupTitle>아이디 찾기 완료</PopupTitle>
          <PopupDescription>회원님의 아이디는 {} 입니다.</PopupDescription>
          <div className="buttonsContainer">
            <button
              onClick={() => {
                window.location.replace("/auth/main");
              }}
            >
              로그인하러 가기
            </button>
          </div>
        </Popup>
      ) : (
        ""
      )}
      <LoginDiv>
        <TextDiv>아이디 찾기</TextDiv>
        이름
        <NameInput
          type="text"
          placeholder="이름을 입력해주세요."
          onChange={inputChange}
        />
        이메일
        <EmailInput
          type="email"
          placeholder="등록된 이메일을 입력해주세요."
          onChange={inputChange}
        />
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <LoginButton
          name="login"
          onClick={loginClicked}
          style={{ backgroundColor: loginAble }}
        >
          메일에서 아이디 확인하기
        </LoginButton>
      </LoginDiv>
    </Container>
  );
};

export default FindID;
