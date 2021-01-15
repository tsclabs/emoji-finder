import React from 'react'
import EmojiEngine from '../shared/emoji-engine.js'
import styled from 'styled-components'
import parseHtml from 'html-react-parser'
import emojiListObj from '../shared/emoji-list.js'
import { copyToClipboard } from '../shared/utils.js'
import { useToasts } from 'react-toast-notifications'

const Holder = styled.div`
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    li {
      margin: 6px;
      width: 100px;
      padding: 4px;
      cursor: pointer;
      transition: 100ms;
      border-radius: 4px;
      text-align: center;
      
      img {
        display: block;
      }

      span {
        display: block;
        width: 100%;
        font-size: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        
        &.item-name {
          word-break: break-all;
          padding: 2px 0;
        }
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
  const { addToast } = useToasts();

  const sendToClipboard = str => {
    copyToClipboard(str);

    addToast(`Emoji code copied: "${str}"`, { 
      autoDismiss: true,
      appearance: 'success'
    });
  };

  return (
    <Holder className="emoji-list">
      <label>Emoji List</label>

      <p className="text-muted">
        {emojiListObj.length} emojis available. <strong>Click</strong> on the emoji to copy its code to clipboard
      </p>

      <ul>
        {emojiListObj.map((item, index) => {
          const emoji = EmojiEngine.shortnameToImage(`:${item.shortname}:`);
          
          return (
            <li onClick={() => sendToClipboard(`:${item.shortname}:`)} key={index}>
              <span className="item-img">{ parseHtml(emoji) }</span>
              <span className="item-name">{ item.shortname }</span>
            </li>
          );
        })}
      </ul>
    </Holder>    
  )
}