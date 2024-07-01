import { useState } from "react"
import confetti from 'canvas-confetti'

import { Board } from "./components/Board.jsx"
import { WinnerModal } from "./components/WinnerModal.jsx"
import { ResetButton } from "./components/ResetButton.jsx"
import { TurnIndicator } from "./components/TurnIndicator.jsx"

import { TURNS } from './constants.js'
import { checkWinnerFrom, checkEndGame } from "./logic/board.js"




function App() {
  //const board = Array(9).fill(null)
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }
  
  

  const updateBoard = (index) => {
    // no actualizamos posicion si ya tiene algo o hay ganador
    if(board[index] || winner) {
      return
    }
    // Actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    
    // Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O: TURNS.X
    setTurn(newTurn)

    // Verificar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if  (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <ResetButton onClick={resetGame}></ResetButton>

      <Board board={ board } updateBoard={updateBoard}></Board>

      <TurnIndicator turn={turn}></TurnIndicator>

      <WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>
    </main>
  )
}

export default App
