import React from 'react'
import styled from 'styled-components'

const AppNav = styled.div`
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 14px;
    font-size: 22px;
    background-color: #ffffff;
`;

export default () => {
    return (
        <AppNav>
            <span>Emoji<strong>Finder</strong></span>
        </AppNav>
    )
}