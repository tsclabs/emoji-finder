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
  resize: both;
  overflow: auto;
  max-width: 100%;
  max-height: 300px;
  box-sizing: border-box;

  img.emojione {
    max-width: 18px;
    transform: translateY(2px);
  }

  p {
    margin: 0;
  } 
`;

export default props => {
  return (
    <React.Fragment>
      <label style={{ marginBottom: 8 }}>Message Result</label>
      
      <Holder className="message-emojify">
        <p>{parseHtml( EmojiEngine.shortnameToImage(sanitizeUrlText(props.text)) )}</p>
      </Holder>
    </React.Fragment>
  )
}; 