import { useEffect, useState } from "react"
import { random } from "underscore"
import './Field.sass'
import './Cell'

interface Props {
  width: number
  height: number
  mines: number
}

enum CellState {
  Closed, Opened, Flagged
}

interface ICell {
  value: number
  state: CellState
}

const Field = ({ width, height, mines }: Props) => {
  const clear: ICell[][] = Array(height).fill(false).map(r => Array(width).fill(false).map(_ => ({ value: 0, state: CellState.Closed })))

  const [field, setField] = useState<ICell[][]>(clear)
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    reset()
  }, [])

  function reset() {
    let f = [...clear]

    let planted_mines = 0

    do {
      let r = random(height - 1)
      let c = random(width - 1)

      if (f[r][c].value < 9) {
        planted_mines++
        f[r][c].value = 9

        for (let i = r - 1; i < r + 2; i++) {
          if (i < 0 || i == height) continue
          for (let j = c - 1; j < c + 2; j++) {
            if (j < 0 || j == width) continue
            f[i][j].value++
          }
        }

      }

    } while (planted_mines < mines)

    setField([...f])
    setGameOver(false)
  }

  function floodOpen(row: number, col: number) {
    field[row][col].state = CellState.Opened

    for (let i = row - 1; i < row + 2; i++) {
      if (i < 0 || i == height) continue
      for (let j = col - 1; j < col + 2; j++) {
        if (j < 0 || j == width) continue

        if (field[i][j].state & (CellState.Opened | CellState.Flagged)) continue

        if (field[i][j].value > 0 && field[i][j].value < 9) {
          field[i][j].state = CellState.Opened
          continue
        }

        if (field[i][j].value == 0) {
          floodOpen(i, j)
        }
      }
    }
  }

  function endGame() {
    setField([...field.map(r => r.map(c => ({
      value: c.value,
      state: c.value > 8 ? CellState.Opened : c.state
    })))])
    setGameOver(true)
  }

  function handleCellClick(row: number, col: number, button: number) {
    if (gameOver) {
      return
    }

    if (button == 2) {
      if (field[row][col].state == CellState.Closed) {
        field[row][col].state = CellState.Flagged
      } else if (field[row][col].state == CellState.Flagged) {
        field[row][col].state = CellState.Closed
      }
      setField([...field])
      return
    }

    if (field[row][col].state == CellState.Flagged) {
      return
    }

    if (field[row][col].value > 8) {
      field[row][col].state = CellState.Opened
      endGame()
      return
    }

    if (field[row][col].value == 0) {
      floodOpen(row, col)
    } else {
      if (field[row][col].state != CellState.Opened) {
        field[row][col].state = CellState.Opened
      } else if (field[row][col].state == CellState.Opened) {
        let flags = 0

        for (let i = row - 1; i < row + 2; i++) {
          if (i < 0 || i == height) continue
          for (let j = col - 1; j < col + 2; j++) {
            if (j < 0 || j == width) continue
            
            console.log(field[row][col].state)
            if (field[row][col].state == CellState.Flagged) {
              flags++
            }
          }
        }
        
        if (flags == field[row][col].value) {
          for (let i = row - 1; i < row + 2; i++) {
            if (i < 0 || i == height) continue
            for (let j = col - 1; j < col + 2; j++) {
              if (j < 0 || j == width) continue

              if (field[row][col].state != CellState.Flagged) {
                if (field[row][col].value > 8) {
                  endGame()
                }
                field[row][col].state = CellState.Opened
              }
            }
          }
        }

      }
    }

    setField([...field])
  }

  return (
    <div className="flex-center flex-column minesweeper">
      <div className="flex-center flex-row header">
        <div className="counter bombs"></div>
        <div className="flex-center new-game" onMouseDown={reset}></div>
        <div className="counter time"></div>
      </div>
      <div className="minefield flex-column">
        {field.map((row, ri) => (
          <div className="row flex-row" key={`row-${ri}`}>
            {row.map((c, ci) => (
              <div className={`cell flex-center ${({
                [CellState.Closed]: 'closed',
                [CellState.Opened]: `opened value-${c.value < 9 ? c.value : 'X'}`,
                [CellState.Flagged]: 'flagged',
              })[c.state]}`}
                onMouseDown={(e) => handleCellClick(ri, ci, e.button)}
                onContextMenu={(e) => e.preventDefault()}
                key={`row-${ri}-col-${ci}`}></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Field