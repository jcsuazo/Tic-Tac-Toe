import { useState } from "react";

function useGame() {
  const [isGameOver, setGame] = useState(false)
  const [winner, setWinner] = useState(null)
  const [currentPlayer, setCurrentPlayer] = useState('X')
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ])
  function playerAction(currentBoardIndex: number, cellIndex: number) {
    if (isGameOver) {
      return;
    }
    board[currentBoardIndex][cellIndex] = currentPlayer

    setBoard(board)
    if (currentPlayer === 'X') {
      setCurrentPlayer('O');
    } else {
      setCurrentPlayer('X');
    }
  }
return {winner, board, isGameOver, currentPlayer, playerAction};
}

export default useGame;