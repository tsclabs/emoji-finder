import React from 'react'
import styled from 'styled-components'
import { sanitizeUrlText } from '../shared/utils.js'

const Holder = styled.div`
  textarea {
    z-index: 50;
    width: 100%;
    min-height: 100px;
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
      <label htmlFor="text">Compose message</label>
      <textarea name="text" value={sanitizeUrlText(props.text)} onChange={handleTextChange} style={{ resize: 'none' }}></textarea>
    </Holder>
  )
}