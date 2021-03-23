import "./App.css";
import BowlingGame from "./BowlingGame/BowlingGame";
import BowlingGameContainer from "./components/BowlingGameContainer/BowlingGameContainer";

function App() {
  const initialBowlingGame = new BowlingGame();
  for (let i = 1; i <= 9; i++) {
    initialBowlingGame.openFrame(0, 0);
  }

  return (
    <div className="App">
      <div>
        <h1>The Bowling Game</h1>
        <BowlingGameContainer initialBowlingGame={initialBowlingGame} />
      </div>
    </div>
  );
}

export default App;
