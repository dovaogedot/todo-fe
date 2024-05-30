// import { useQuery } from "@apollo/client"
// import { gql } from "../__generated__/gql"
import './Todo.sass'
import { useState } from "react"
import Board from "../components/todo/Board"
import { Dto } from '../components/todo/Dto'

const Todo = () => {
  // const { loading, data } = useQuery(gql(`#graphql
  //   query Boards {
  //     boards {
  //       id
  //       name
  //     }
  //   }
  // `))

  const boards: Dto.Board[] = [
    {
      id: '0',
      name: 'Programming',
      columns: [
        {
          id: '0',
          name: 'To Do',
          tasks: [
            { id: '0', name: 'UI' },
            { id: '1', name: 'Styles' },
            { id: '2', name: 'Content' },
          ]
        }, {
          id: '1',
          name: 'In Progress',
          tasks: [
            { id: '3', name: 'Routing' },
            { id: '4', name: 'Refactoring' },
          ]
        }, {
          id: '2',
          name: 'Done',
          tasks: [
            { id: '5', name: 'Open VS Code' }
          ]
        }
      ]
    },
    {
      id: '1',
      name: 'Groceries',
      columns: []
    }
  ]

  const [selectedBoard, setSelectedBoard] = useState(0)

  async function handleClick(id: number) {
    setSelectedBoard(id)
  }

  return (
    <div className="todo">
      <div className="header">
        {
          boards.map((b, i) => (
            <div key={b.name}
              className={`board-name${i == selectedBoard ? ' selected' : ''}`}
              onClick={() => handleClick(i)}
            >{b.name}</div>
          ))
        }
      </div>
      <div className="content">
        <Board board={boards[selectedBoard]} />
      </div>
    </div>
  )
}

export default Todo