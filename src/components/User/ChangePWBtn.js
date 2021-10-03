import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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


const ChangePWBtn = ({loginable, loginClicked, loginColor}) => {
    if(loginable===true){
        return(
            <Link to="./edit">
                <LoginButton onClick={loginClicked} style={{backgroundColor:loginColor}}>
                비밀번호 변경하기
                </LoginButton>
            </Link>
        )
    }
    else{
        return (
            <LoginButton onClick={loginClicked} style={{backgroundColor:loginColor}}>
            비밀번호 변경하기
            </LoginButton>
        )
    }
}

export default ChangePWBtn;