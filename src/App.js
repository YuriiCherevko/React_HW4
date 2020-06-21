import React from "react";
import "./App.css";
import Stickers from "./Stickers/Stickers";
class App extends React.Component {
  render() {
    return (
      <>
        <header className="App-header">Stickers App</header>
        <Stickers />
      </>
    );
  }
}

export default App;
