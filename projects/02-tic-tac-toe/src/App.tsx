import { useState } from "react"
import confetti from 'canvas-confetti'
import { Square } from "./components/Square"
import { checkWinnerFrom, checkEndGame } from "./logic/board"
import { TURNS } from "./constants"
import type { Board, Winner} from "./constants"
import { WinnerModal } from "./components/WinnerModal"


function App() {

  const [board, setBoard] = useState<Board>(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage);
    return Array(9).fill(null);
  })
    
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    if(turnFromStorage) return JSON.parse(turnFromStorage);
    return TURNS.X;
  })
  const [winner, setWinner] = useState<Winner>(null) // (ganador = "x" u "o", empate = false, o null)

  const updateBoard = (index: number) => {
    // Si hay algo en esa posicion no sobreescribir
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // guardar partida
    window.localStorage.setItem('board', JSON.stringify(newBoard));
    window.localStorage.setItem('turn', JSON.stringify(newTurn));

    //revisar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti()
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset</button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <section>
        <WinnerModal resetGame={resetGame} winner={winner}/>
      </section>
    </main>
  )
}

export default App
