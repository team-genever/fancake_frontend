// 4.1 - 이메일로 가입하기

import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { LoginBox } from "components/Auth";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";
import { Helmet } from "react-helmet";

import { api, GetBackendIP } from "../../settings";
import axios from "axios";
import Popup from "components/Popup";
import { useCookies } from "react-cookie";
import ReactGA from "react-ga";

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
  color: #767676;

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
  margin: 0 0 5px 0;
  color: black;

  @media only screen and (max-width: 640px) {
    font-size: 25px;
    margin: 0 0 15px 0;
  }
`;

const NameInput = styled.input`
  width: 100%;
  height: 55px;
  margin: 10px 0 0 0;
  padding: 20px;
  border-radius: 10px;
  border: solid 1px #979797;
  font-size: 18px;
  ::-webkit-input-placeholder {
    color: #d8d8d8;
  }

  @media only screen and (max-width: 640px) {
    font-size: 15px;
    height: 45px;
    margin: 5px 0 0 0;
  }
`;

const EmailInput = styled.input`
  width: 100%;
  height: 55px;
  margin: 10px 0 20px 0;
  padding: 20px;
  border-radius: 10px;
  border: solid 1px #979797;
  font-size: 18px;
  ::-webkit-input-placeholder {
    color: #d8d8d8;
  }

  @media only screen and (max-width: 640px) {
    font-size: 15px;
    height: 45px;
    margin: 5px 0 10px 0;
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

  @media only screen and (max-width: 640px) {
    font-size: 15px;
    height: 45px;
    margin: 5px 0 5px 0;
  }
`;

const PasswordCheckInput = styled.input`
  width: 100%;
  height: 55px;
  padding: 20px;
  border-radius: 10px;
  border: solid 1px #979797;
  font-size: 18px;
  ::-webkit-input-placeholder {
    color: #d8d8d8;
  }

  @media only screen and (max-width: 640px) {
    font-size: 15px;
    height: 45px;
  }
`;

const PrivacyCheckContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 5px;
  & label {
    font-weight: 500;
    font-size: 15px;
    margin-right: 5px;
    &:hover {
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 640px) {
    & label {
      font-size: 13px;
    }
  }
`;

const PrivacyCheck = styled.input`
  &:hover {
    cursor: pointer;
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

const PopupTitle = styled.h3`
  font-size: 23px;
  font-weight: bold;
  text-align: center;
  line-height: 23px;
  margin-bottom: 15px;
  @media screen and (max-width: 640px) {
    font-size: 5.3vw;
    line-height: 6vw;
    margin-bottom: 5vw;
  }
`;

const PopupDescription = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  margin-bottom: 15px;
  @media screen and (max-width: 640px) {
    font-size: 3.5vw;
    line-height: 4.5vw;
    margin-bottom: 5vw;
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
    privacy: false,
  });

  useEffect(() => {}, [checkValid]);

  const [nameVisible, setNameVisible] = useState("hidden");
  const [emailVisible, setEmailVisible] = useState("hidden");
  const [passwordVisible, setPasswordVisible] = useState("hidden");
  const [confirmVisible, setConfirmVisible] = useState("hidden");
  const [loginAble, setLoginAble] = useState("#878485");

  const [popup, setPopup] = useState(false);
  const [cookies, setCookie] = useCookies(["Authorization"]);

  const [errorMessage, setErrorMessage] = useState("");

  const isTabletPC = useMediaQuery({
    query: "(min-width: 641px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  const loginClicked = (e) => {
    if (checkValid.name === false) setErrorMessage("이름을 입력해주세요.");
    else if (checkValid.email === false)
      setErrorMessage("이메일이 정확하지 않습니다.");
    else if (checkValid.password === false)
      setErrorMessage("비밀번호는 7자리 이상이어야 합니다.");
    else if (checkValid.passwordCheck === false)
      setErrorMessage("비밀번호가 일치하지 않습니다.");
    else if (checkValid.privacy === false)
      setErrorMessage("개인정보수집 동의 후 가입 가능합니다.");
    else {
      setErrorMessage("");
      signin();
    }
  };

  async function signin() {
    let tempData;
    let response;
    try {
      response = await api.post("users", {
        id: loginInfo.email,
        password: loginInfo.password,
        name: loginInfo.name,
        _temp_password: loginInfo.password,
      });
      console.log(response);
      tempData = response.data;
      console.log("tempData is ", tempData);
      console.log("sign in success");

      ReactGA.event({
        category: "signin",
        action: `email signin`,
      });

      setPopup(true);
    } catch (error) {
      window.alert(error.response.data[0].message);
      console.error(error);
    } finally {
    }
  }

  const welcomePopup = async () => {
    try {
      const response = await api.post("users/login", {
        id: loginInfo.email,
        password: loginInfo.password,
      });
      setCookie("Authorization", response.data.accessToken, {
        expires: new Date(response.data.accessTokenExpiresIn),
        path: "/",
      });
    } catch (error) {
      window.alert(error.response.data[0].message);
      console.error(error);
    } finally {
      setPopup(false);
      window.location.replace("/");
    }
  };

  const inputChange = (e) => {
    let checkValidTemp = checkValid;
    if (e.target.name === "name") {
      if (e.target.value) {
        loginInfo.name = e.target.value;
        checkValidTemp.name = true;
        console.log("name is ", e.target.value);

        setNameVisible("visible");
      } else {
        //empty name
        checkValidTemp.name = false;
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
        checkValidTemp.email = true;
        console.log("email is ", e.target.value);
        setEmailVisible("visible");
      } else {
        //invalid email address
        checkValidTemp.email = false;
        loginInfo.email = "";
        console.log("invalid email");
        setEmailVisible("hidden");
      }
    } else if (e.target.name === "password") {
      if (e.target.value.length >= 7) {
        checkValidTemp.password = true;
        loginInfo.password = e.target.value;
        console.log("password is ", e.target.value);
        setPasswordVisible("visible");
      } else {
        checkValidTemp.password = false;
        loginInfo.password = "";
        console.log("password has to be more than 7 characters");
        setPasswordVisible("hidden");
      }
    } else if (e.target.name === "passwordCheck") {
      console.log("login password is ", loginInfo.password);
      console.log("passwordCheck is ", e.target.value);
      if (e.target.value === loginInfo.password) {
        checkValidTemp.passwordCheck = true;
        console.log("passwordCheck is ", e.target.value);
        setConfirmVisible("visible");
      } else {
        checkValidTemp.passwordCheck = false;
        console.log("password check does not match");
        setConfirmVisible("hidden");
      }
    } else if (e.target.name === "privacy") {
      checkValidTemp.privacy = e.target.checked;
    }
    console.log("checkValid is ", checkValidTemp);

    setCheckValid(checkValidTemp);

    if (
      checkValidTemp.name === true &&
      checkValidTemp.email === true &&
      checkValidTemp.password === true &&
      checkValidTemp.passwordCheck === true &&
      checkValidTemp.privacy === true
    ) {
      setLoginAble("#da225f");
    } else {
      setLoginAble("#878485");
    }
  };

  return (
    <Container>
      <Helmet>
        <title>fanCake | 이메일로 가입하기</title>
      </Helmet>
      {popup ? (
        <Popup padding={[30, 30]}>
          <PopupTitle>가입을 축하드립니다!</PopupTitle>
          <PopupDescription>
            20000 베리가 지급되었습니다!
            <br />
            '나의 지갑'을 통해 확인하고 원하는 영상을 구매해보세요!
          </PopupDescription>
          <div className="buttonsContainer">
            <button onClick={welcomePopup}>체험하러가기</button>
          </div>
        </Popup>
      ) : (
        ""
      )}
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
        {isTabletPC && (
          <FontAwesomeIcon
            style={{
              color: "#E31019",
              position: "relative",
              left: "93%",
              bottom: "40px",
              visibility: nameVisible,
            }}
            icon={faCheck}
          />
        )}
        {isMobile && (
          <FontAwesomeIcon
            style={{
              color: "#E31019",
              position: "relative",
              left: "90%",
              bottom: "35px",
              visibility: nameVisible,
            }}
            icon={faCheck}
          />
        )}
        <br />
        이메일(아이디)
        <EmailInput
          type="email"
          name="email"
          placeholder="이메일을 입력해주세요."
          onBlur={inputChange}
        />
        {isTabletPC && (
          <FontAwesomeIcon
            style={{
              color: "#E31019",
              position: "relative",
              left: "93%",
              bottom: "60px",
              visibility: emailVisible,
            }}
            icon={faCheck}
          />
        )}
        {isMobile && (
          <FontAwesomeIcon
            style={{
              color: "#E31019",
              position: "relative",
              left: "90%",
              bottom: "45px",
              visibility: emailVisible,
            }}
            icon={faCheck}
          />
        )}
        <br />
        비밀번호
        <PasswordInput
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요."
          onBlur={inputChange}
        />
        <PasswordCheckInput
          type="password"
          name="passwordCheck"
          placeholder="비밀번호를 다시 입력해주세요."
          onChange={inputChange}
        />
        {isTabletPC && (
          <FontAwesomeIcon
            style={{
              color: "#E31019",
              position: "relative",
              left: "93%",
              bottom: "105px",
              visibility: passwordVisible,
            }}
            icon={faCheck}
          />
        )}
        {isMobile && (
          <FontAwesomeIcon
            style={{
              color: "#E31019",
              position: "relative",
              left: "90%",
              bottom: "85px",
              visibility: passwordVisible,
            }}
            icon={faCheck}
          />
        )}
        {isTabletPC && (
          <FontAwesomeIcon
            style={{
              color: "#E31019",
              position: "relative",
              left: "89%",
              bottom: "40px",
              visibility: confirmVisible,
            }}
            icon={faCheck}
          />
        )}
        {isMobile && (
          <FontAwesomeIcon
            style={{
              color: "#E31019",
              position: "relative",
              left: "85%",
              bottom: "35px",
              visibility: confirmVisible,
            }}
            icon={faCheck}
          />
        )}
        <PrivacyCheckContainer>
          <label htmlFor="privacy">개인정보수집에 동의합니다.</label>
          <PrivacyCheck
            id="privacy"
            type="checkbox"
            onChange={inputChange}
            name="privacy"
          ></PrivacyCheck>
        </PrivacyCheckContainer>
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
