import React from 'react';

function EmojiResults({emojis}) {

  const copyToClipboard = (emoji) => {
    // TODO: show a message when you've copied successfully
    navigator.clipboard.writeText(emoji.char)
  }

  return (
    <div className="emoji-results">
      {
        emojis.map(emoji => (
          <div key={emoji.codes} className="emoji" onClick={() => copyToClipboard(emoji.char)}>
            {emoji.char} {emoji.name}
          </div>
        ))
      }
    </div>
  );
}

export default EmojiResults;