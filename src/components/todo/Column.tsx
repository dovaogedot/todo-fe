import Task from "./Task"
import './Column.sass'
import { Dto } from "./Dto"
import { useState } from "react"

interface Props {
  column: Dto.Column
}

const Column = ({ column }: Props) => {
  return (
    <div className="column flex-center">
      <div className="header">
        {column.name}
      </div>
      <div className="tasks">
        {column.tasks.map((t, i) => (
          <Task task={t} key={i} />
        ))}
      </div>
    </div>
  )
}

export default Column