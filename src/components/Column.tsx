import { useQuery } from "@apollo/client"
import { gql } from "../__generated__/gql"
import Task from "./Task"
import './Column.sass'

interface Props {
  id: string
}

const Column = ({ id }: Props) => {
  const { loading, data } = useQuery(
    gql(`#graphql
      query Column($id: ID!) {
        column(id: $id) {
          name
          tasks {
            id
          }
        }
      }
    `),
    { variables: { id } }
  )

  return (
    <div className="column flex-center">
      <div className="header">
        {data?.column?.name}
      </div>
      <div className="tasks">
        {data?.column?.tasks.map((t, i) => (
          <Task id={t.id} key={i}/>
        ))}
      </div>
    </div>
  )
}

export default Column