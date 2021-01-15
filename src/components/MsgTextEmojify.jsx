import React from 'react'
import EmojiEngine from '../shared/emoji-engine.js'
import styled from 'styled-components'
import parseHtml from 'html-react-parser'
import { sanitizeUrlText } from '../shared/utils.js'

const Holder = styled.div`
  padding: 10px;
  border-radius: 4px;
  position: relative;
  border: solid 1px #eee;

  img.emojione {
    max-width: 18px;
    transform: translateY(2px);
  }

  p {
    margin: 0;
  }

  .copy-to-clipboard {
    position: absolute;
    right: -16px;
    top: -18px;
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
  return (
    <React.Fragment>
      <label>Message Result</label>
      
      <Holder className="message-emojify">
        <span className="copy-to-clipboard" title="Copy message result to clipboard">📋</span>
        <p>{parseHtml( EmojiEngine.shortnameToImage(sanitizeUrlText(props.text)) )}</p>
      </Holder>
    </React.Fragment>
  )
}; 