import { useState } from "react";
//https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/pause
//See this documentation to add more functionalities
function App() {
  const [ourText, setOurText] = useState("");
  const msg = new SpeechSynthesisUtterance();

  const speechHandler = (msg) => {
    msg.text = ourText;
    window.speechSynthesis.speak(msg);
  };
  const speechStopHandler = () => {
    window.speechSynthesis.cancel();
  };

  return (
    <div className="App">
      <h1>React Text to Speech App</h1>
      <input
        type="text"
        value={ourText}
        placeholder="Enter Text"
        onChange={(e) => setOurText(e.target.value)}
      />
      <button onClick={() => speechHandler(msg)}>SPEAK</button>
      <button onClick={() => speechStopHandler()}>Stop</button>
    </div>
  );
}

export default App;
