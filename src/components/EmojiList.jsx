import React from 'react'
import EmojiEngine from '../shared/emoji-engine.js'
import LazyLoad from 'react-lazyload';
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
  return (
    <Holder className="emoji-list">
      <label>Emoji List</label>

      <p className="text-muted">
        <strong>Click</strong> on the emoji to copy its code to your clipboard
      </p>

      <ul>
        {emojiListObj.map((item, index) => {
          const emoji = EmojiEngine.shortnameToImage(`:${item.shortname}:`);
          
          return (
            <LazyLoad width={100} height={100} key={index}>
              <li>
                <span className="item-img">{ parseHtml(emoji) }</span>
                <span className="item-name">{ item.shortname }</span>
              </li>
            </LazyLoad>
          );
        })}
      </ul>
    </Holder>    
  )
}