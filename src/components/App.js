import React, { useState } from "react";
import DarkModeWrapper from "./DarkModeWrapper";
import Header from "./Header";
import TweetsContainer from "./TweetsContainer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  function onDarkMode() {
    setDarkMode ((darkMode)=>!darkMode)
  }



  return (
    <DarkModeWrapper darkMode={darkMode}>
      <Header onDarkMode={onDarkMode} darkMode={darkMode} />
      <TweetsContainer />
    </DarkModeWrapper>
  );
}

export default App;
