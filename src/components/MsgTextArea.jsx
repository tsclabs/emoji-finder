import React from 'react'
import styled from 'styled-components'
import { useToasts } from 'react-toast-notifications'
import { copyToClipboard, sanitizeUrlText } from '../shared/utils.js'

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
  const { addToast } = useToasts();
  
  const handleTextChange = event => {
    const text = event.target.value;
    props.setText(text);
    window.location.hash = encodeURI(text);
  };

  const sendToClipboard = str => {
    copyToClipboard(str);

    addToast(`Message raw text copied to clipboard`, { 
      autoDismiss: true,
      appearance: 'success'
    });
  };

  return (
    <Holder className="message-textarea">
      <span className="copy-to-clipboard" title="Copy raw message to clipboard" onClick={() => sendToClipboard(sanitizeUrlText(props.text))}>📋</span>
      <label htmlFor="text">Message Raw</label>
      <textarea name="text" value={sanitizeUrlText(props.text)} onChange={handleTextChange} style={{ resize: 'none' }}></textarea>
    </Holder>
  )
}