import React, {useEffect} from 'react';
import emojis from 'emoji.json'

function EmojiSearch({changeEmojis}) {
  const filterEmojis = inputText => {
    const inputPrepared = inputText.toLowerCase()
    const newEmojis = emojis.filter(emoji =>
      emoji.name.toLowerCase().includes(inputPrepared) ||
      emoji.category.toLowerCase().includes(inputPrepared))
    changeEmojis(newEmojis.slice(0,20))
  }

  useEffect(() => {
    filterEmojis("")
  },[])

  return (
    <>
      <input placeholder="Search for emojis..." type="text" onChange={e => filterEmojis(e.target.value)}/>
    </>
  )
}

export default EmojiSearch;