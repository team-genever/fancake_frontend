import React, { useState, useEffect } from "react";
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
  const [popup] = useState(false);

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
      setErrorMessage("????????? ??????????????????.");
    } else if (emailOK === false) {
      setErrorMessage("???????????? ???????????? ????????????");
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
        window.alert("???????????? ?????? ?????? ????????? ??????????????????.");
      }
    }
  };

  return (
    <Container>
      <Helmet>
        <title>fanCake | ????????? ??????</title>
      </Helmet>
      {popup ? (
        <Popup padding={[30, 30]}>
          <PopupTitle>????????? ?????? ??????</PopupTitle>
          <PopupDescription>???????????? ???????????? {} ?????????.</PopupDescription>
          <div className="buttonsContainer">
            <button
              onClick={() => {
                window.location.replace("/auth/main");
              }}
            >
              ??????????????? ??????
            </button>
          </div>
        </Popup>
      ) : (
        ""
      )}
      <LoginDiv>
        <TextDiv>????????? ??????</TextDiv>
        ??????
        <NameInput
          type="text"
          placeholder="????????? ??????????????????."
          onChange={inputChange}
        />
        ?????????
        <EmailInput
          type="email"
          placeholder="????????? ???????????? ??????????????????."
          onChange={inputChange}
        />
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <LoginButton
          name="login"
          onClick={loginClicked}
          style={{ backgroundColor: loginAble }}
        >
          ???????????? ????????? ????????????
        </LoginButton>
      </LoginDiv>
    </Container>
  );
};

export default FindID;
