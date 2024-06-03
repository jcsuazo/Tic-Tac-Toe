import "./App.css";
import useGame from "./hooks/useGame";

function App() {
  const { board, playerAction } = useGame();
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      {board.map((currentBoard, currentBoardIndex) => (
        <div className="board" key={currentBoardIndex}>
          {currentBoard.map((cell, cellIndex) => (
            <div key={cellIndex} className="cell" onClick={() => playerAction(currentBoardIndex, cellIndex)}>{cell}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
