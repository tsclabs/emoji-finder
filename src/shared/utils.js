import { useEffect } from 'react'

export function sanitizeUrlText (text) {
  return decodeURIComponent(text.startsWith('#') ? text.substr(1, text.length) : text);
};

export function copyToClipboard (str) {
  function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
  
    document.body.removeChild(textArea);
  }

  function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    
    navigator.clipboard.writeText(text);
  }

  return copyTextToClipboard(str);
}

export function onClickOutside(ref, cb) {
  useEffect(() => {
    const handleClickOutside = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        cb(e);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ ref ]);
}  