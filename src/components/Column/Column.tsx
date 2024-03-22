import './Column.sass'
import React, { useContext, useEffect, useState } from 'react'
import Task from '../Task/Task'
import ApiContext from '../../store/ApiContext'
import { IColumn, ITask } from '../../api/Types'

interface Props {
  id: number
}

const Column = ({ id }: Props) => {
  const api = useContext(ApiContext)

  const [column, setColumn] = useState<IColumn | null>(null!)
  const [tasks, setTasks] = useState<ITask[]>(null!)

  useEffect(() => {
    const fetchColumn = async () => {
      const column = await api.columns.get(id)
      setColumn(column)
    }

    const fetchTasks = async () => {
      const tasks = (await api.tasks.getAll()).filter(t => t.columnId === id)
      setTasks(tasks)
    }

    fetchColumn()
    fetchTasks()
  }, [])

  const handleClick = async (e: React.MouseEvent) => {
    let task = await api.tasks.post({ id: 0, columnId: 0, name: 'Css', description: '', authorId: 0, assigneeId: 0, dateCreated: Date.now(), dateExpires: new Date(Date.now() + 2).getDate(), priority: 0 })
    setTasks([...tasks, task])
  }

  return (
    <>
      {column === null ?
        <span>Column not found</span>
        :
        <div className="column">
          {/* @ts-ignore: css variable */}
          <div className='column-header' style={{ '--column-color-hover': column.color }}>
            <span>{column.name}</span>
          </div>
          <div className='column-content'>
            {tasks.map(t => <Task key={t.id as React.Key} id={t.id} />)}
          </div>
          <div className='column-add-task'>
            <div onClick={handleClick}>
              +
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Column