// 4.4 - 비밀번호 변경

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { useCookies } from "react-cookie";
import { api } from "settings";

const Container = styled.div`
  width: 100%;
  height: max-content;
  padding: 200px 300px 200px 300px;
  
  @media only screen and (max-width:1007px) {
    padding: 200px 100px 200px 100px;
  }

  @media only screen and (max-width:640px) {
    padding: 200px 30px 200px 30px;
  }
`;

const LoginDiv = styled.div`
  width: 400px;
  height: 100%;
  margin: 0 auto;
  font-size: 16px;
  font-weight: 600;
  color: #767676;

  @media only screen and (max-width:640px) {
    width: 300px;
  }
`;

const TextDiv = styled.div`
  width: 100%;
  height: 100%;
  font-size: 35px;
  font-weight: bold;
  text-align: left;
  margin: 0 0 5px 0;
  color: black;

  @media only screen and (max-width:640px) {
    font-size: 25px;
    margin: 0 0 15px 0;
  }
`;

const PasswordInput = styled.input`
  width: 100%;
  height: 55px;
  margin: 10px 0 10px 0;
  padding: 20px;
  border-radius: 10px;
  border: solid 1px #979797;
  font-size: 18px;
  ::-webkit-input-placeholder {
    color: #d8d8d8;
  }

  @media only screen and (max-width:640px) {
    font-size: 15px;
    height: 45px;
    margin: 5px 0 5px 0;
  }
`;

const PasswordCheckInput = styled.input`
  width: 100%;
  height: 55px;
  margin: 0 0 35px 0;
  padding: 20px;
  border-radius: 10px;
  border: solid 1px #979797;
  font-size: 18px;
  ::-webkit-input-placeholder {
    color: #d8d8d8;
  }

  @media only screen and (max-width:640px) {
    font-size: 15px;
    height: 45px;
    margin: 0 0 20px 0;
  }
`;

const ErrorMessage = styled.p`
  width: 100%;
  margin: 0 0 0 0;
  color: red;
  font-size: 18px;
  text-align: center;

  @media only screen and (max-width:640px) {
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
  border : none;
  cursor: pointer;  

  :hover{
      background-color: #e34076;
  }

  @media only screen and (max-width:640px) {
    font-size: 20px;
    height: 55px;
  }
`;

export default function ChangePW() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [changePWInfo, setChangePWInfo] = useState({
    password_now: "",
    password_new: "",
  });
  const [cookies] = useCookies(["Authorization"]);
  const [loginable, setLoginable] = useState(false);
  const [loginColor, setLoginColor] = useState("#878485");
  const [errorMessage, setErrorMessage] = useState("");
  const [valid, setValid] = useState({
    pw: false,
    match: false,
  });

  let backendResponse = "";

  const history = useHistory();

  const setPassword = async () => {
    try {
      const response = await api.put("user/password", null, {
        headers: {
          Authorization: cookies.Authorization,
        },
        //changePWInfo, // == params
        params: {
          //old_password: changePWInfo.password_now,
          password: changePWInfo.password_new,
        },
      });
      backendResponse = response.data;
      console.log("response from back is ", response.data);
    } catch (e) {
      console.error(e);
    } finally { }
  };

  const ButtonClicked = (e) => {
    if (loginable === true) {
      //백엔드와 통신 코드
      setPassword();

      //현재 비밀번호가 잘못된 경우:
      let tempPasswordNowWrong = false;
      console.log("3");
      if (tempPasswordNowWrong === true) {
        setErrorMessage("현재 비밀번호가 잘못되었습니다.");
      } else {
        console.log("4");
        setErrorMessage("");
        console.log("sign in success");
        console.log("hihi");
        history.push('../');
      }
    } else {
      console.log("5");
      if (valid.pw === false)
        setErrorMessage("비밀번호는 7자리 이상이어야 합니다.");
      else if (valid.match === false)
        setErrorMessage("비밀번호가 일치하지 않습니다.");
    }
  };

  const inputChange = (e) => {
    setErrorMessage("");
    setLoginable(false);
    setLoginColor("#878485");

    if (e.target.name === "passwordNow") {
      changePWInfo.password_now = e.target.value;
      console.log("passwordNow is ", e.target.value);
    } else if (e.target.name === "passwordNew") {
      if (e.target.value.length >= 7) {
        changePWInfo.password_new = e.target.value;
        console.log("passwordNew is ", e.target.value);
        valid.pw = true;
      } else {
        valid.match = false;
        console.log("password has to be over 7 characters");
        setErrorMessage("비밀번호는 7자리 이상이어야 합니다.");
      }
    } else if (e.target.name === "passwordCheck") {
      console.log("login password is ", changePWInfo.password_new);
      console.log("passwordCheck is ", e.target.value);
      if (e.target.value === changePWInfo.password_new) {
        console.log("password match");
        valid.match = true;
      } else {
        valid.match = false;
        console.log("password check does not match");
        setErrorMessage("비밀번호가 일치하지 않습니다.");
      }
    }

    if (valid.pw === true && valid.match === true) {
      setLoginable(true);
      setLoginColor("#da225f");
    }

    console.log("loginable is ", loginable);
  };

  return (
    <Container>
      <LoginDiv>
        <TextDiv>비밀번호 변경</TextDiv>
        <br />
        현재 비밀번호
        <PasswordInput
          type="password"
          name="passwordNow"
          placeholder="현재 비밀번호를 입력해주세요."
          onBlur={inputChange}
        />
        <br />
        <br />
        새로운 비밀번호
        <PasswordInput
          type="password"
          name="passwordNew"
          placeholder="새로운 비밀번호를 입력해주세요."
          onBlur={inputChange}
        />
        <PasswordCheckInput
          type="password"
          name="passwordCheck"
          placeholder="비밀번호를 다시 입력해주세요."
          onChange={inputChange}
          onBlur={inputChange}
        />
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <LoginButton onClick={ButtonClicked} style={{backgroundColor:loginColor}}>
            비밀번호 변경하기
        </LoginButton>
      </LoginDiv>
    </Container>
  );
}
