import React from 'react';

function EmojiResults({emojis}) {
  return (
    <div className="emoji-results">
      {
        emojis.map(emoji => (
          <div key={emoji.codes} className="emoji">
            {emoji.char} {emoji.name}
          </div>
        ))
      }
    </div>
  );
}

export default EmojiResults;