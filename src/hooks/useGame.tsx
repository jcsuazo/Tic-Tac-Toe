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
return {winner, setWinner,board, isGameOver, setBoard, setGame, currentPlayer, setCurrentPlayer};
}

export default useGame;