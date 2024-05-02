import { useQuery } from "@apollo/client"
import { gql } from "../__generated__/gql"
import './Task.sass'

interface Props {
  id: string
}

const Task = ({ id }: Props) => {
  const { loading, data } = useQuery(
    gql(`#graphql
      query Task($id: ID!) {
        task(id: $id) {
          name
          description
          date_created
          tags {
            name
          }
        }
      }
    `),
    { variables: { id }}
  )

  return (
    <div className="task flex-center">
      <div className="header">
        {data?.task?.name}
      </div>
      <div className="description">
        {data?.task?.description}
      </div>
    </div>
  )
}

export default Task