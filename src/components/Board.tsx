import { useQuery } from "@apollo/client"
import { gql } from "../__generated__/gql"
import Column from "./Column"
import './Board.sass'

interface Props {
  id: string
}

const Board = ({ id }: Props) => {
  const { loading, data } = useQuery(
    gql(`#graphql
      query Columns($id: ID!) {
        board(id: $id) {
          name
          columns {
            id
          }
        }
      }
    `),
    { variables: { id: id } }
  )

  return (
    <div className="board flex-center">
      {data?.board?.columns.map((c, i) => (
        <Column id={c.id} key={i}/>
      ))}
    </div>
  )
}

export default Board