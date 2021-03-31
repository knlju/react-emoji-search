import {useState} from "react";
import EmojiResults from "./EmojiResults";
import EmojiSearch from "./EmojiSearch";

function App() {

  const [displayedEmojis, setDisplayedEmojis] = useState([])

  return (
    <div className="container main-container">
      <h1>😹 Emoji Search 😹</h1>
      <EmojiSearch changeEmojis={setDisplayedEmojis} />
      <EmojiResults emojis={displayedEmojis}/>
    </div>
  );
}

export default App;
