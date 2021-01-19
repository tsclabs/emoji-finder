import React from 'react'
import styled from 'styled-components'
import BtnDropdown from './BtnDropdown.jsx'
import { useToasts } from 'react-toast-notifications'
import { copyToClipboard, sanitizeUrlText } from '../shared/utils.js'

const Holder = styled.div`
  position: relative;

  textarea {
    z-index: 50;
    width: 100%;
    min-height: 100px;
    resize: both;
    overflow: auto;
    max-width: 100%;
    max-height: 300px;
  }

  .chip-round {
    width: 20px;
    height: 20px;
    margin-left: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: solid 2px #888;
    border-radius: 100%;
    padding: 2px;
    cursor: pointer;
    transition: 100ms;
    &:hover {
      transition: 100ms;
      transform: translateY(-3px);
      box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    }    
  }

  .header {
    display: flex;
    margin-bottom: 4px;
    align-items: center;
    justify-content: space-between;

    .right {
      display: flex;
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

  const clearText = () => {
    props.setText('');
    window.location.hash = '';
  };

  return (
    <Holder className="message-textarea">
      <div className="header">
        <div className="left">
          <label htmlFor="text">
            Message Raw
          </label>
        </div>

        <div className="right">
          <BtnDropdown btnClass="chip-round" btnContent={<span>⚡</span>}>
            <ul>
              <li onClick={() => console.log('Italic')}><i>Italic</i></li>
              <li onClick={() => console.log('Bold')}><strong>Bold</strong></li>
              <li onClick={() => console.log('Stroked')}><s>Stroked</s></li>
            </ul>
          </BtnDropdown>
          
          <div className="chip-round" title="Copy raw message to clipboard" onClick={() => sendToClipboard(sanitizeUrlText(props.text))}>📋</div>
          <div className="chip-round" title="Clear current message" onClick={() => clearText()}>✖</div>
        </div>
      </div>

      <textarea name="text" value={sanitizeUrlText(props.text)} onChange={handleTextChange}></textarea>
    </Holder>
  )
}