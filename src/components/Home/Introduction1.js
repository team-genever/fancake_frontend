import React, { Component } from 'react'
import styled from 'styled-components'

const Positioner = styled.div`
    width: 100%;
    background-color: #414446;
    padding: 100px 130px;
    text-align: center;
`;

const Heading1 = styled.div``;

const Heading2 = styled.div`
    color: #da225f;
    font-weight: bold;
    font-size: 37px;
`;

export default class Introduction1 extends Component {
    render() {
        return (
            <Positioner>
                <Heading2>크리에이터와 팬 모두가 만족하는 서비스</Heading2>
            </Positioner>
        )
    }
}
