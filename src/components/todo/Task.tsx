import './Task.sass'
import { Dto } from './Dto'

interface Props {
  task: Dto.Task
}

const Task = ({ task }: Props) => {
  return (
    <div className="task flex-center">
      <div className="header">
        {task.name}
      </div>
      <div className="description">
        {task.description}
      </div>
    </div>
  )
}

export default Task