import logo from "./logo.svg";
import GameMain from "./GameMain";
import Control from "./Control";
import "./App.scss";
import BocBai from "./BocBai";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}

        <GameMain />
        <Control />
      </header>
    </div>
  );
}

export default App;
