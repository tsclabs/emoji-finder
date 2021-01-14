export function sanitizeUrlText (text) {
  return decodeURIComponent(text.startsWith('#') ? text.substr(1, text.length) : text);
};