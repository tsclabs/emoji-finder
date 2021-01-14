import React from 'react'
import EmojiOne from 'emojione'
import styled from 'styled-components'
import parseHtml from 'html-react-parser'
import emojiListObj from '../shared/emoji-list.js'

const Holder = styled.div`
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    li {
      margin: 6px;
      padding: 4px;
      cursor: pointer;
      transition: 100ms;
      border-radius: 4px;
      img {
        display: block;
      }
      &:hover {
        background-color: #eeeeee;
      }
    }
  }

  .text-muted {
    color: #888888;
    font-size: 12px;
  }
`;

export default () => {
  return (
    <Holder className="emoji-list">
      <label>Emoji List</label>

      <p className="text-muted">
        <strong>Click</strong> on the emoji to add to copy its code to the clipboard
      </p>

      <ul>
        {emojiListObj.map((item, index) => {
          const emoji = EmojiOne.shortnameToImage(`:${item.shortname}:`);
          const emojiExists = emoji !== `:${item.shortname}:`; 

          return emojiExists ? <li key={index}>{ parseHtml(emoji) }</li> : false;
        })}
      </ul>
    </Holder>    
  )
}