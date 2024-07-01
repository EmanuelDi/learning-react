// Board.jsx
import { Square } from './Square.jsx'

export function Board ({ board, updateBoard }) { // Desestructuramos las props aquí
  return (
    <section className='game'>
      {
      board.map((square, index) => {
        return (
          <Square
            key={index}
            index={index}
            updateBoard={updateBoard}
          >
            {square}
          </Square>
        )
      })
    }
    </section>
  )
}
