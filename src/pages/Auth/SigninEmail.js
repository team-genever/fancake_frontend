// 4.1 - 이메일로 가입하기

import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { LoginBox } from "components/Auth";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  width: 100%;
  height: max-content;
  padding: 35vw 30vw 30vw 30vw;
`;

const LoginDiv = styled.div`
  width: 100%;
  height: 100%;
  text-allign: center;
  //background-color: grey;
  font-size: 24px;
  font-weight: 600;
`;

const TextDiv = styled.div`
  width: 100%;
  height: 100%;
  font-size: 56px;
  font-weight: bold;
`;

const NameInput = styled.input`
  width: 100%;
  height: 100px;
  margin: 10px 0 0 0;
  padding: 40px;
  border-radius: 10px;
  border: solid 1px #979797;
  font-size: 28px;
  color: #767676;
`;

const EmailInput = styled.input`
  width: 100%;
  height: 100px;
  margin: 10px 0 0 0;
  padding: 40px;
  border-radius: 10px;
  border: solid 1px #979797;
  font-size: 28px;
  color: #767676;
`;

const PasswordInput = styled.input`
  width: 100%;
  height: 100px;
  margin: 10px 0 0 0;
  padding: 40px;
  border-radius: 10px;
  border: solid 1px #979797;
  font-size: 28px;
  color: #767676;
`;

const PasswordCheckInput = styled.input`
  width: 100%;
  height: 100px;
  margin: 0 0 40px 0;
  padding: 40px;
  border-radius: 10px;
  border: solid 1px #979797;
  font-size: 28px;
  color: #767676;
`;

const ErrorMessage = styled.p`
  width: 100%;
  margin: 0 0 0 0;
  color: red;
  font-size: 25px;
  text-align: center;
`;

const LoginButton = styled.button`
  width: 100%;
  height: 120px;
  margin: 10px 0 0 0;
  //padding: 37px 348px 37px 347px;
  border-radius: 60px;
  background-color: #da225f;
  font-size: 32px;
  color: #fff;
  border: none;
  cursor: pointer;

  :hover {
    background-color: #e34076;
  }
`;

export default function SigninEmail() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    name: "",
    phone_num: "",
    create_at: "",
    terms: {
      event_info: false,
      service_usage: false,
      privacy_info: false,
    },
    gender: "",
    delivery: {
      recipient: "",
      phone_num: "",
      address: "",
      address_detailed: "",
      zip_code: "",
    },
    account: {
      bank_type: "",
      account_num: "",
      account_holder: "",
    },
  });

  const [checkValid, setCheckValid] = useState({
    name: false,
    email: false,
    password: false,
    passwordCheck: false,
  });
  const [nameVisible, setNameVisible] = useState("hidden");
  const [emailVisible, setEmailVisible] = useState("hidden");
  const [passwordVisible, setPasswordVisible] = useState("hidden");
  const [confirmVisible, setConfirmVisible] = useState("hidden");
  const [loginAble, setLoginAble] = useState("#878485");

  const [errorMessage, setErrorMessage] = useState("");

  const loginClicked = (e) => {
    if (checkValid.name === false) setErrorMessage("이름을 입력해주세요.");
    else if (checkValid.email === false)
      setErrorMessage("이메일이 정확하지 않습니다.");
    else if (checkValid.password === false)
      setErrorMessage("비밀번호는 8자리 이상이어야 합니다.");
    else if (checkValid.passwordCheck === false)
      setErrorMessage("비밀번호가 일치하지 않습니다.");
    else {
      setErrorMessage("");
      console.log("sign in success");
    }
  };

  const inputChange = (e) => {
    if (e.target.name === "name") {
      if (e.target.value) {
        loginInfo.name = e.target.value;
        checkValid.name = true;
        console.log("name is ", e.target.value);

        setNameVisible("visible");
      } else {
        //empty name
        checkValid.name = false;
        console.log("empty name");
        setNameVisible("hidden");
      }
    } else if (e.target.name === "email") {
      let email = e.target.value;
      let re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(email)) {
        //valid email address
        loginInfo.email = e.target.value;
        checkValid.email = true;
        console.log("email is ", e.target.value);
        setEmailVisible("visible");
      } else {
        //invalid email address
        checkValid.email = false;
        loginInfo.email = "";
        console.log("invalid email");
        setEmailVisible("hidden");
      }
    } else if (e.target.name === "password") {
      if (e.target.value.length >= 8) {
        checkValid.password = true;
        loginInfo.password = e.target.value;
        console.log("password is ", e.target.value);
        setPasswordVisible("visible");
      } else {
        checkValid.password = false;
        loginInfo.password = "";
        console.log("password has to be more than 8 characters");
        setPasswordVisible("hidden");
      }
    } else if (e.target.name === "passwordCheck") {
      console.log("login password is ", loginInfo.password);
      console.log("passwordCheck is ", e.target.value);
      if (e.target.value === loginInfo.password) {
        checkValid.passwordCheck = true;
        console.log("passwordCheck is ", e.target.value);
        setConfirmVisible("visible");
      } else {
        checkValid.passwordCheck = false;
        console.log("password check does not match");
        setConfirmVisible("hidden");
      }
    }
    console.log("checkValid is ", checkValid);

    if (
      checkValid.name === true &&
      checkValid.email === true &&
      checkValid.password === true &&
      checkValid.passwordCheck === true
    ) {
      setLoginAble("#da225f");
    } else {
      setLoginAble("#878485");
    }
  };

  return (
    <Container>
      <LoginDiv>
        <TextDiv>이메일로 가입하기</TextDiv>
        <br />
        이름
        <NameInput
          type="text"
          name="name"
          placeholder="이름을 입력해주세요."
          onBlur={inputChange}
        />
        <FontAwesomeIcon
          style={{
            color: "#E31019",
            position: "relative",
            left: "93%",
            bottom: "65px",
            visibility: nameVisible,
          }}
          icon={faCheck}
        />
        <br />
        이메일(아이디)
        <EmailInput
          type="email"
          name="email"
          placeholder="이메일을 입력해주세요."
          onBlur={inputChange}
        />
        <FontAwesomeIcon
          style={{
            color: "#E31019",
            position: "relative",
            left: "93%",
            bottom: "70px",
            visibility: emailVisible,
          }}
          icon={faCheck}
        />
        <br />
        <br />
        비밀번호
        <PasswordInput
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요."
          onBlur={inputChange}
        />
        <FontAwesomeIcon
          style={{
            color: "#E31019",
            position: "relative",
            left: "93%",
            bottom: "65px",
            visibility: passwordVisible,
          }}
          icon={faCheck}
        />
        <PasswordCheckInput
          type="password"
          name="passwordCheck"
          placeholder="비밀번호를 다시 입력해주세요."
          onChange={inputChange}
        />
        <FontAwesomeIcon
          style={{
            color: "#E31019",
            position: "relative",
            left: "93%",
            bottom: "105px",
            visibility: confirmVisible,
          }}
          icon={faCheck}
        />
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <LoginButton
          name="login"
          onClick={loginClicked}
          style={{ backgroundColor: loginAble }}
        >
          가입하기
        </LoginButton>
      </LoginDiv>
    </Container>
  );
}
