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
`;

export default props => {
  return (
    <React.Fragment>
      <label>Message Result</label>
      
      <Holder className="message-emojify">
        <p>{parseHtml( EmojiEngine.shortnameToImage(sanitizeUrlText(props.text)) )}</p>
      </Holder>
    </React.Fragment>
  )
}; 