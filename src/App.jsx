import React from 'react'
import AppNav from './components/AppNav.jsx'
import MessageComposer from './components/MsgComposer.jsx'
import EmojiList from './components/EmojiList.jsx'

export default function App() {
  return (
    <React.Fragment>
      <AppNav/>

      <div className="container" style={{ paddingTop: 80 }}>
        <MessageComposer />

        <EmojiList />
      </div>

      <footer>
        <p style={{ textAlign: 'center', width: '100%' }}>
          Emoji<strong>Finder</strong> made with ❤️ by TSC Development Team
        </p>
      </footer>
    </React.Fragment>
  )
}
