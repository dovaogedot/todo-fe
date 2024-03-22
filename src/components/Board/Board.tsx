import './Board.sass'
import React, { useContext, useEffect, useState } from 'react'
import { useImmer } from 'use-immer'
import Column from '../Column/Column'
import ApiContext from '../../store/ApiContext'
import { IColumn } from '../../api/Types'

interface Props {
  id: number
}

const Board = ({id}: Props) => {
  const api = useContext(ApiContext)
  const [columns, setColumns] = useState<IColumn[]>(null!)

  useEffect(() => {
    const fetchColumns = async () => {
      const columns = await api.columns.getAll()
      setColumns(columns)
    }
    fetchColumns()
  }, [])

  return (
    <div className="board">
      {columns.length === 0 && <span>No columns in this board</span>}
      {columns.map(c => <Column key={c.id as React.Key} id={c.id} />)}
    </div>
  )
}

export default Board