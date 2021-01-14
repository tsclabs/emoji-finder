import React from 'react'
import styled from 'styled-components'

const Holder = styled.div`
    display: flex;
    width: 100%;
    padding: 8px;
    text-align: right;

    p {
        margin: 0;
        width: 100%;
        text-align: right;
        font-size: 12px;
        color: #444;
        color: #888888;    
    }
`;

export default props => {
    return (
        <Holder>
            <p>Chars: {props.text.length} | Words: {props.text.length ? props.text.trim().split(' ').length : 0}</p>
        </Holder>
    )
} 