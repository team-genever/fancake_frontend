import React, { Component } from 'react'
import styled from 'styled-components'

const Positioner = styled.div`
    width: 100%;
    padding: 100px 130px;
    text-align: center;
`;

const Heading = styled.div`
    color: #da225f;
    font-weight: bold;
    font-size: 37px;
    margin-bottom: 30px;
`;

const GrayBox = styled.div`
    background-color: #f5f5f5;
    padding: 30px 50px;
    margin: 10px;
    width: 350px;
    height: 350px;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const WhiteBox = styled.div`
    border-radius: 7px;
    background-color: white;
    padding: 30px;
    margin: 10px auto;
    width: 170px;
    height: 170px;
    display: inline-block;
`;

const Image = styled.img`
    width: 110px;
    height: 110px;
`;

const Text1 = styled.div`
    font-weight: 900;
    font-size: large;
    margin-bottom: 20px;
`;

const Text2 = styled.div`
    color: #767676;
    font-weight: bold;
`;

export default class Introduction3 extends Component {
    render() {
        return (
            <Positioner>

                <Heading>
                    fanCake만의 특징
                </Heading>
                <Container>
                    <GrayBox>
                        <WhiteBox>
                            <Image src = "details-4.jpeg" alt=""></Image>
                        </WhiteBox>
                        <Text1>수익셰어</Text1>
                        <Text2>매분기별 크리에이터와 영상에서 발생하는 수익을 공유</Text2>
                    </GrayBox>
                    <GrayBox>
                        <WhiteBox>
                            <Image src = "details-4.jpeg" alt=""></Image>
                        </WhiteBox>
                        <Text1>수익셰어</Text1>
                        <Text2>매분기별 크리에이터와 영상에서 발생하는 수익을 공유</Text2>
                    </GrayBox>
                    <GrayBox>
                        <WhiteBox>
                            <Image src = "details-4.jpeg" alt=""></Image>
                        </WhiteBox>
                        <Text1>수익셰어</Text1>
                        <Text2>매분기별 크리에이터와 영상에서 발생하는 수익을 공유</Text2>
                    </GrayBox>
                </Container>
                
            </Positioner>
        )
    }
}
