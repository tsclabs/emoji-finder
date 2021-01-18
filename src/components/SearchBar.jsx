import React from 'react'

export default props => {
  let inputTimer = undefined;

  const onInput = e => {
    clearTimeout(inputTimer);

    inputTimer = setTimeout(() => {
      const emojiList = document.getElementById('emoji-list');
      
      if (e.target.value) {
        emojiList.querySelectorAll(`li:not([data-keywords*="${e.target.value}"])`)
          .forEach(el => el.style.display = 'none');
        
        emojiList.querySelectorAll(`li[data-keywords*="${e.target.value}"]`)
          .forEach(el => el.style.display = 'initial');
      } else {
        emojiList.querySelectorAll('li')
          .forEach(el => el.style.display = 'initial');
      }
    }, 500);
  };

  return (
    <input type="text" name="search-emoji" placeholder="Search emoji..." onInput={onInput}/>
  )
}