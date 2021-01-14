import React from 'react'
import EmojiOne from 'emojione'
import styled from 'styled-components'
import parseHtml from 'html-react-parser'
import { sanitizeUrlText } from '../shared/utils.js'

const Holder = styled.div`
  padding: 10px;
  border-radius: 4px;
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
    <Holder className="message-emojify">
      <p>{parseHtml( EmojiOne.shortnameToImage(sanitizeUrlText(props.text)) )}</p>
    </Holder>
  )
}; 