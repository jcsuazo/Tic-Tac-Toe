import { useState } from "react";

function useGame() {
  const [isGameOver, setGame] = useState(false)
  const [winner, setWinner] = useState<null | string>(null)
  const [currentPlayer, setCurrentPlayer] = useState('X')
  const [attempsLeft, setAttempsLeft] = useState(8);
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ])

  function checkWinner(cellIndex: number, currentBoardRowIndex: number, winner: string) {
    board[currentBoardRowIndex][cellIndex] = winner;
    setBoard(board)
    setAttempsLeft(attempsLeft => attempsLeft - 1);
    const condition1 = board[currentBoardRowIndex][0] === winner && board[currentBoardRowIndex][1] === winner && board[currentBoardRowIndex][2] === winner
    const condition2 = board[0][cellIndex] === winner && board[1][cellIndex] === winner && board[2][cellIndex] === winner
    const condition3 = board[0][0] === winner && board[1][1] === winner && board[2][2] === winner
    const condition4 = board[0][2] === winner && board[1][1] === winner && board[2][0] === winner
    
    if ( condition1 || condition2 || condition3 || condition4){
      setGame(true);
      setWinner(winner);
      return;
    } else if (attempsLeft <= 0) {
      setGame(true);
      setWinner(null);
      return;
    }
  }
  function playerAction(currentBoardRowIndex: number, cellIndex: number) {
    if (isGameOver || board[currentBoardRowIndex][cellIndex] !== '') {
      return;
    }
    checkWinner(cellIndex, currentBoardRowIndex, currentPlayer);

    if (currentPlayer === 'X') {
      setCurrentPlayer('O');
    } else {
      setCurrentPlayer('X');
    }
  }
return {winner, board, isGameOver, currentPlayer, playerAction};
}

export default useGame;