// 4.4 - 비밀번호 변경

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import ChangePWBtn from "../../components/User/ChangePWBtn"

const Container = styled.div`
  width: 100%;
  height: max-content;
  padding: 25vw 30vw 30vw 30vw;
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


const PasswordInput = styled.input`
  width: 100%;
  height: 100px;
  margin: 10px 0 10px 0;
  padding: 40px;
  border-radius: 10px;
  border: solid 1px #979797;
  font-size: 28px;
  color: #767676;
`;

const PasswordCheckInput = styled.input`
  width: 100%;
  height: 100px;
  margin: 20px 0 40px 0;
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
  border : none;
  cursor: pointer;  

  :hover{
      background-color: #e34076;
  }
`;

export default function SigninEmail (userinfo) {

  const [changePWInfo, setChangePWInfo] = useState({
    "user_id": userinfo ? userinfo.user_id : "",
    "password_now": "",
    "password_new": "",
  });

  const[valid, setValid] = useState({
      "pw":false,
      "match":false,
  })
  const [loginable, setLoginable] = useState(false);
  const [loginColor, setLoginColor] = useState("#878485");
  const [errorMessage, setErrorMessage] = useState("");


  const loginClicked = async(e) => {
    if (loginable===true){

        //백엔드와 통신 코드
        //await

        //현재 비밀번호가 잘못된 경우:
        let tempPasswordNowWrong = false;
        if(tempPasswordNowWrong === true) {
            setErrorMessage("현재 비밀번호가 잘못되었습니다.");
        }
        else {
            setErrorMessage("");
            console.log("sign in success");
            console.log("hihi");
        }
    }
    else{
        if(valid.pw===false)
        setErrorMessage("비밀번호는 8자리 이상이어야 합니다.");
      else if(valid.match===false)
        setErrorMessage("비밀번호가 일치하지 않습니다.");
    }
  }

  const inputChange = (e) => {
    setErrorMessage("");
    setLoginable(false);
    setLoginColor("#878485");

    if (e.target.name === "passwordNow") {
        changePWInfo.password_now = e.target.value;
        console.log("passwordNow is ", e.target.value);
    } else if (e.target.name === "passwordNew") {
        if(e.target.value.length >= 8){
            changePWInfo.password_new = e.target.value;
            console.log("passwordNew is ", e.target.value);
            valid.pw=true;
        }
        else{
            valid.match=false;
            console.log("password has to be over 8 characters")
            setErrorMessage("비밀번호는 8자리 이상이어야 합니다.");
        }
    } else if (e.target.name === "passwordCheck") {
        console.log("login password is ", changePWInfo.password_new);
        console.log("passwordCheck is ", e.target.value);
        if(e.target.value === changePWInfo.password_new){
            console.log("password match");
            valid.match=true;
        }
        else{
            valid.match=false;
            console.log("password check does not match");
            setErrorMessage("비밀번호가 일치하지 않습니다.");
        }
    }

    if(valid.pw===true && valid.match===true){
        setLoginable(true);
        setLoginColor("#da225f");
    }

    console.log("loginable is ", loginable);
  }
  
//   let changepwbutton;
//   if(loginable){
//       changepwbutton = (
//         <Link to=".">
//             <LoginButton onClick={loginClicked} style={{backgroundColor:loginColor}}>
//             비밀번호 변경하기
//             </LoginButton>
//         </Link>
//       )
//   } else {
//       changepwbutton = (
//         <LoginButton onClick={loginClicked} style={{backgroundColor:loginColor}}>
//         비밀번호 변경하기 
//         </LoginButton>
//       )
//   }

  return (
    <Container>
      <LoginDiv>
        <TextDiv>
          비밀번호 변경
        </TextDiv>

        <br/>현재 비밀번호
        <PasswordInput type="password" name="passwordNow" placeholder="현재 비밀번호를 입력해주세요." onBlur={inputChange}/>
        
        <br/><br/>새로운 비밀번호
        <PasswordInput type="password" name="passwordNew" placeholder="새로운 비밀번호를 입력해주세요." onBlur={inputChange}/>
        
        <PasswordCheckInput type="password" name="passwordCheck" placeholder="비밀번호를 다시 입력해주세요." onChange={inputChange} onBlur={inputChange}/>

        <ErrorMessage>{errorMessage}</ErrorMessage>

        {/* {changepwbutton} */}
        <ChangePWBtn loginable={loginable} loginClicked={loginClicked} loginColor={loginColor}/>

      </LoginDiv>
    </Container>
  )
}