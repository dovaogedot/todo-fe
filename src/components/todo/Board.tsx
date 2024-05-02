import Column from "./Column"
import './Board.sass'
import { Dto } from "./dto"

interface Props {
  board: Dto.Board
}

const Board = ({ board }: Props) => {
  return (
    <div className="board flex-center">
      {board.columns.map((c, i) => (
        <Column column={c} key={i}/>
      ))}
    </div>
  )
}

export default Board