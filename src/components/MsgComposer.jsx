import React, { useState } from 'react'
import MsgStats from './MsgStats.jsx'
import MsgTextArea from './MsgTextArea.jsx'
import TextEmojify from './MsgTextEmojify.jsx'

export default function App() {
  const [ text, setText ] = useState(window.location.hash.replace('#/', '') || 'Hello World :smile:');

  return (
    <div className="message-composer" style={{ paddingBottom: 28 }}>
      <MsgTextArea text={text} setText={setText} />
      <TextEmojify text={text} />
      <MsgStats text={text} />
    </div>
  )
}
