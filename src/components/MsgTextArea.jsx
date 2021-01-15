import React from 'react'
import styled from 'styled-components'
import { sanitizeUrlText } from '../shared/utils.js'

const Holder = styled.div`
  position: relative;

  textarea {
    z-index: 50;
    width: 100%;
    min-height: 100px;
  }

  .copy-to-clipboard {
    position: absolute;
    right: -16px;
    top: 10px;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #dddddd;
    border-radius: 100%;
    padding: 2px;
    cursor: pointer;
    transition: 100ms;
    &:hover {
      transition: 100ms;
      transform: scale(1.2); 
    }    
  }
`;

export default props => {
  const handleTextChange = event => {
    const text = event.target.value;
    props.setText(text);
    window.location.hash = encodeURI(text);
  };

  return (
    <Holder className="message-textarea">
      <span className="copy-to-clipboard" title="Copy raw message to clipboard">📋</span>
      <label htmlFor="text">Message Raw</label>
      <textarea name="text" value={sanitizeUrlText(props.text)} onChange={handleTextChange} style={{ resize: 'none' }}></textarea>
    </Holder>
  )
}