import React, { Component } from 'react'
import styled from 'styled-components'

const Positioner = styled.div`
    width: 100%;
    background-color: black;
    padding: 100px 100px 100px 130px;
`;

const Heading1 = styled.div`
    color: white;
    font-weight: bold;
    font-size: 45px;
    margin-bottom: 1%;
`;

const Heading2 = styled.div`
    color: #cfcfcf;
    font-weight: bold;
    font-size: 37px;
`;

const Button = styled.button`
    border-radius: 10px;
    background-color: #da225f;
    color: white;
    padding: 15px 30px 15px 30px;
    margin: 20px 0px 10px 0px;
    font-weight: bold;
    font-size: 17px;
    cursor: pointer;
    border: none;

    :hover {
        background-color: #e34076;
    }
`;

const Text = styled.div`
    color: #cccccc;
    font-weight: bold;
    font-size: 15px;
`;

export default class Banner extends Component {
    render() {
        return (
            <Positioner>
                <Heading1>좋아하는 크리에이터 영상의 주인이 되세요.</Heading1>
                <Heading2>내용을 채워주세요.</Heading2>
                <Button>베타 서비스 참여하기</Button>
                <Text>서비스가 출시되면, 가장 먼저 알려드릴게요.</Text>
            </Positioner>
        )
    }
}
