import emojis from 'emoji.json';
import {useState} from "react";
import EmojiResults from "./EmojiResults";
import EmojiSearch from "./EmojiSearch";

const testEmojis = [
  {
    "codes": "1F600",
    "char": "😀",
    "name": "grinning face",
    "category": "Smileys & Emotion (face-smiling)",
    "group": "Smileys & Emotion",
    "subgroup": "face-smiling"
  }, {
    "codes": "1F603",
    "char": "😃",
    "name": "grinning face with big eyes",
    "category": "Smileys & Emotion (face-smiling)",
    "group": "Smileys & Emotion",
    "subgroup": "face-smiling"
  }, {
    "codes": "1F604",
    "char": "😄",
    "name": "grinning face with smiling eyes",
    "category": "Smileys & Emotion (face-smiling)",
    "group": "Smileys & Emotion",
    "subgroup": "face-smiling"
  }, {
    "codes": "1F601",
    "char": "😁",
    "name": "beaming face with smiling eyes",
    "category": "Smileys & Emotion (face-smiling)",
    "group": "Smileys & Emotion",
    "subgroup": "face-smiling"
  }, {
    "codes": "1F606",
    "char": "😆",
    "name": "grinning squinting face",
    "category": "Smileys & Emotion (face-smiling)",
    "group": "Smileys & Emotion",
    "subgroup": "face-smiling"
  }, {
    "codes": "1F605",
    "char": "😅",
    "name": "grinning face with sweat",
    "category": "Smileys & Emotion (face-smiling)",
    "group": "Smileys & Emotion",
    "subgroup": "face-smiling"
  }
]

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
