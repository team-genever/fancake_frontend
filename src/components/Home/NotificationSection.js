import React, { Component } from 'react'
import styled from 'styled-components'

const Positioner = styled.div`
    width: 100%;
    background-color: #414446;
    padding: 100px 130px;
    text-align: center;
`;

const Heading = styled.div`
    color: white;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const Input = styled.input`
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.8);
    background-color: transparent;
    display: block;
    margin: 30px auto;
    width: 700px;
    height: 30px;
    font-size: 16px;
    color: #767676;
    :focus{
        outline: none;
    }
`;

const Button = styled.button`
    border-radius: 8px;
    background-color: #da225f;
    color: white;
    padding: 12px 45px;
    margin: 20px 0px 10px 0px;
    font-weight: 550;
    font-size: 17px;
    cursor: pointer;
    border: none;

    :hover {
        background-color: #e34076;
    }
`;

export default class NotificationSection extends Component {
    render() {
        return (
            <Positioner>
                <Heading>서비스가 출시되면 가장 먼저 알려드릴게요!</Heading>
                <Input placeholder = "이메일을 입력해주세요.  예시) example@naver.com"/>
                <Input placeholder = "갖고 싶은 영상이 있나요? 영상의 URL을 첨부해주세요."/>
                <Button>출시 알림받기</Button>
            </Positioner>
        )
    }
}
