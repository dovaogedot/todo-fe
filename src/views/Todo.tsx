import { useQuery } from "@apollo/client"
import { gql } from "../__generated__/gql"
import './Todo.sass'
import { useState } from "react"
import Board from "../components/Board"

const Todo = () => {
  const { loading, data } = useQuery(gql(`#graphql
    query Boards {
      boards {
        id
        name
      }
    }
  `))

  const [selectedBoard, setSelectedBoard] = useState(0)

  async function handleClick(id: number) {
    setSelectedBoard(id)
  }

  return (
    <div className="todo">
      <div className="header">
        {
          loading
            ?
            <p>Loading...</p>
            :
            data?.boards.map((b, i) => (
              <div key={b.name}
                className={`board-name${i == selectedBoard ? ' selected' : ''}`}
                onClick={() => handleClick(i)}
              >{b.name}</div>
            ))
        }
      </div>
      <div className="content">
        <Board id={data?.boards[selectedBoard].id!} />
      </div>
    </div>
  )
}

export default Todo