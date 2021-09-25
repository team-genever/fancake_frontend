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
`;

export default class Introduction3 extends Component {
    render() {
        return (
            <Positioner>
                <Heading>
                    fanCake만의 특징
                </Heading>
            </Positioner>
        )
    }
}
