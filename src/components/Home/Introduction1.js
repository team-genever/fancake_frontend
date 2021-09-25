import React, { Component } from 'react'
import styled from 'styled-components'

const Positioner = styled.div`
    width: 100%;
    background-color: #414446;
    padding: 100px 130px;
    text-align: center;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const Container2 = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TextContainer = styled.div`
    text-align: left;
    margin-right: 30px;
    width: 500px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Heading1 = styled.div`
    color: white;
    font-weight: bold;
    font-size: 37px;
`;

const Heading2 = styled.div`
    color: #da225f;
    font-weight: bold;
    font-size: 37px;
    margin: 30px;
    margin-top: 100px;
`;

const Heading3 = styled.div`
    color: white;
    font-weight: 500;
    font-size: 37px;
`;

const Text1 = styled.div`
    color: white;
    margin-top: 30px;
`;

const Text2 = styled.div`
    text-align: left;
    font-weight: bold;
    font-size: 15px;
    line-height: 23px;
`;

const Image = styled.img`
    width: 700px;
    border: 1px white solid;
`;

const ProfileImg = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 100%;
    border: 1px solid white; //임시
    margin-right: 20px;
`;

const GrayBox = styled.div`
    background-color: #d8d8d8;
    width: 290px;
    height: 300px;
    margin: 12px;
    border-radius: 20px;
    padding: 20px;
`;

const CreaterName = styled.div`
    font-weight: bold;
    font-size: large;
`;

const Subscribers = styled.div`
    color: #767676;
`;

const QuoteIcon = styled.div`
    width: 60px;
    height: 60px;
    border: 1px solid white; //임시
    margin: 15px 0px;
`;


export default class Introduction1 extends Component {
    render() {
        return (
            <Positioner>
                <Container>
                    <TextContainer>
                        <Heading1>fanCake</Heading1>
                        <Heading3>은 무엇인가요?</Heading3>
                        <Text1>우리의 서비스에 대해 간단하게 설명해주세요.<br/>이것은 샘플 텍스트입니다.</Text1>
                    </TextContainer>
                    <Image src = "blank.png"></Image>
                </Container>
                <Heading2>크리에이터와 팬 모두가 만족하는 서비스</Heading2>
                <Container>
                    <GrayBox>
                        <Container style = {{justifyContent: "left"}}>
                            <ProfileImg src = "blank.png"/>
                            <Container2>
                                <CreaterName>크리에이터</CreaterName>
                                <Subscribers>368k subscribers</Subscribers>
                            </Container2>
                        </Container>
                        <QuoteIcon src = "blank.png"/>
                        <Text2>
                            오래된 영상은 몇몇을 제외하고는 거의 수익이 발생하지 않아요.<br/>
                            하지만, 많은 사람들이 제 방송 초기의 모습을 좋아해주실 것 같아요.
                        </Text2>
                    </GrayBox>
                    <GrayBox>
                        <Container style = {{justifyContent: "left"}}>
                            <ProfileImg src = "blank.png"/>
                            <Container2>
                                <CreaterName>크리에이터</CreaterName>
                                <Subscribers>368k subscribers</Subscribers>
                            </Container2>
                        </Container>
                        <QuoteIcon src = "blank.png"/>
                        <Text2>
                            오래된 영상은 몇몇을 제외하고는 거의 수익이 발생하지 않아요.<br/>
                            하지만, 많은 사람들이 제 방송 초기의 모습을 좋아해주실 것 같아요.
                        </Text2>
                    </GrayBox>
                    <GrayBox>
                        <Container style = {{justifyContent: "left"}}>
                            <ProfileImg src = "blank.png"/>
                            <Container2>
                                <CreaterName>크리에이터</CreaterName>
                                <Subscribers>368k subscribers</Subscribers>
                            </Container2>
                        </Container>
                        <QuoteIcon src = "blank.png"/>
                        <Text2>
                            오래된 영상은 몇몇을 제외하고는 거의 수익이 발생하지 않아요.<br/>
                            하지만, 많은 사람들이 제 방송 초기의 모습을 좋아해주실 것 같아요.
                        </Text2>
                    </GrayBox>
                    <GrayBox>
                        <Container style = {{justifyContent: "left"}}>
                            <ProfileImg src = "blank.png"/>
                            <Container2>
                                <CreaterName>크리에이터</CreaterName>
                                <Subscribers>368k subscribers</Subscribers>
                            </Container2>
                        </Container>
                        <QuoteIcon src = "blank.png"/>
                        <Text2>
                            오래된 영상은 몇몇을 제외하고는 거의 수익이 발생하지 않아요.<br/>
                            하지만, 많은 사람들이 제 방송 초기의 모습을 좋아해주실 것 같아요.
                        </Text2>
                    </GrayBox>
                </Container>
            </Positioner>
        )
    }
}
