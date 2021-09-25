import React, { Component } from 'react'
import styled from 'styled-components'

const Positioner = styled.div`
    width: 100%;
    padding: 100px 0px 100px 0px;
`;

const Container = styled.div`
    display: flex;
    margin-left: 130px;
    margin-bottom: 30px;
`;

const Heading = styled.div`
    font-size: 37px;
    font-weight: bold;
    margin-bottom: 20px;
    margin-left: 130px;
`;

const Thumbnail = styled.img`
    object-fit: cover;
    width: 640px;
    height: 360px;
`;

const Button = styled.button`
    border: 1px solid black;
    display: block;
    background-color: white;
    cursor: pointer;
    padding: 8px 30px 8px 30px;
    font-weight: bold;
    margin: 0px auto;
`;

export default class VideoSection extends Component {
    render() {
        return (
            <Positioner>
                <Heading>지금 구매가능한 영상</Heading>
                <Container>
                    <Thumbnail src = "http://img.youtube.com/vi/PQehBcftLKU/0.jpg"/>
                </Container>
                <Button>모든 영상 보기</Button>
            </Positioner>
        )
    }
}
