import "./App.css";
import useGame from "./hooks/useGame";

function App() {
  const { board } = useGame();
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      {board.map((currentBoard) => (
        <div className="board">
          {currentBoard.map((cell) => (
            <div className="cell">{cell}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
