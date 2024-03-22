import './Task.sass'
import { useContext, useState } from "react"
import CrapRepositoryContext from "../../store/ApiContext"

interface Props {
  id: number
}

const Task = ({ id }: Props) => {
  const repository = useContext(CrapRepositoryContext)

  const [task, setTask] = useState(repository.tasks.get(id))
  if (!task) {
    return <span>Task not found</span>
  }

  return (
    <div className="task">
      <div className="content">
        <span>{task.name}</span>
      </div>
      <div className="options">
        <div className="delete">X</div>
      </div>
    </div>
  )
}

export default Task