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

export default class FAQSection extends Component {
    render() {
        return (
            <Positioner>
                <Heading>자주 물어보는 질문</Heading>
                
            </Positioner>
        )
    }
}
