import "./App.css";
import useGame from "./hooks/useGame";

function App() {
  const { board, playerAction, winner, isGameOver } = useGame();
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      
      {isGameOver ? (
        <>
        <h2>Game Over</h2>
        {winner ? (<p>The winner is <strong>{winner}</strong></p>) : (<p>It was a draw</p>)}
        
        <button onClick={() => window.location.reload()}>Play again</button>
        </>
      ):(
        board.map((currentBoard, currentBoardIndex) => (
          <div className="board" key={currentBoardIndex}>
            {currentBoard.map((cell, cellIndex) => (
              <div key={cellIndex} className="cell" onClick={() => playerAction(currentBoardIndex, cellIndex)}>{cell}</div>
            ))}
          </div>
        ))
      ) }
    </div>
  );
}

export default App;
