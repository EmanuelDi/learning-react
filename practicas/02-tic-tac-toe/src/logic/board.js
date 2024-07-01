 import { WINNER_COMBOS } from "../constants.js"
 
 export const checkWinnerFrom = (boardToCheck) => {
  // revisamos las convinaciones ganadoras
  // para ver sio X o O ganó
  for(const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] == boardToCheck[b] &&
      boardToCheck[a] == boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  // si no hay ganador
  return null
}

export const checkEndGame = (newBoard) => {
  // revisamos si hay empate
  // si no hay más espacios vacíos
  // en el tablero
  return newBoard.every((square) => square != null)
}

