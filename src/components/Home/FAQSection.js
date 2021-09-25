import React, { Component } from 'react'
import styled from 'styled-components'

const Positioner = styled.div`
    background-color: #e3e3e3;
    padding: 100px 130px 100px 130px;
    text-align: center;
`;

const Heading = styled.div`
    font-size: 37px;
    font-weight: bold;
`;

const Button = styled.button`
    border: 1px solid black;
    display: block;
    background-color: transparent;
    cursor: pointer;
    padding: 8px 30px 8px 30px;
    font-weight: bold;
    margin: 50px auto 0px auto;
`;

export default class FAQSection extends Component {
    render() {
        return (
            <Positioner>
                <Heading>자주 물어보는 질문</Heading>
                <Button>View all FAQ</Button>
            </Positioner>
        )
    }
}
