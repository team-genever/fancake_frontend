import React, { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

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
  margin: 0 0 40px 0;
`;


const EmailInput = styled.input`
  width: 100%;
  height: 100px;
  margin: 12px 0 80px 0;
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
  margin: 30px 0 0 0;
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

const FindPW = () => {
    
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [emailOK, setEmailOK] = useState(false);
    const [loginAble, setLoginAble] = useState("#878485");

    const inputChange = (e) => {
        setErrorMessage("");
        setLoginAble("#878485");
        let email = e.target.value;
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if ( re.test(email) ) { //valid email address
            setEmailOK(true);
            email = e.target.value;
        }
        else { //invalid email address
            setEmailOK(false);
        }

        if(emailOK===true){
            setLoginAble("#da225f");
        }
    }

    const loginClicked = (e) => {
        if (emailOK == false){
            setErrorMessage("이메일이 정확하지 않습니다");
        }
        else {
            setErrorMessage("");
            console.log("비밀번호 찾기 실행");
            //이메일이 db에 있는지 확인 --> 있을 시 : 비밀번호 복구 이메일 전송, 없을 시 : 에러 메세지
        }
    }


    return (
        <Container>
            <LoginDiv>
                <TextDiv>
                    비밀번호 찾기
                </TextDiv>
                이메일
                <EmailInput type="email" placeholder="등록된 이메일을 입력해주세요." onChange={inputChange}/>
                <ErrorMessage>{errorMessage}</ErrorMessage>
                <LoginButton name="login" onClick={loginClicked} style={{backgroundColor:loginAble}}>
                    메일에서 아이디 확인하기
                </LoginButton>
            </LoginDiv>
        </Container>
    );
};

export default FindPW;
