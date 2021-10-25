import React, { useRef, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet";

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

const EmailInput = styled.input`
  width: 100%;
  height: 55px;
  margin: 10px 0 50px 0;
  padding: 20px;
  border-radius: 10px;
  border: solid 1px #979797;
  font-size: 18px;
  color: #d8d8d8;

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
  font-size: 24px;
  color: #fff;
  border: none;
  cursor: pointer;

  :hover {
    background-color: #e34076;
  }

  @media only screen and (max-width: 640px) {
    font-size: 20px;
    height: 55px;
  }
`;

const FindPW = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailOK, setEmailOK] = useState(false);
  const [loginAble, setLoginAble] = useState("#878485");

  const inputChange = (e) => {
    setErrorMessage("");
    setLoginAble("#878485");
    let email = e.target.value;
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
      //valid email address
      setEmailOK(true);
      email = e.target.value;
    } else {
      //invalid email address
      setEmailOK(false);
    }

    if (emailOK === true) {
      setLoginAble("#da225f");
    }
  };

  const loginClicked = (e) => {
    if (emailOK == false) {
      setErrorMessage("이메일이 정확하지 않습니다");
    } else {
      setErrorMessage("");
      console.log("비밀번호 찾기 실행");
      //이메일이 db에 있는지 확인 --> 있을 시 : 비밀번호 복구 이메일 전송, 없을 시 : 에러 메세지
    }
  };

  return (
    <Container>
      <Helmet>
        <title>fanCake | 비밀번호 찾기</title>
      </Helmet>
      <LoginDiv>
        <TextDiv>비밀번호 찾기</TextDiv>
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
          메일에서 비밀번호 확인하기
        </LoginButton>
      </LoginDiv>
    </Container>
  );
};

export default FindPW;
