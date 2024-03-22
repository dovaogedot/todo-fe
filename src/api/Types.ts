import { IEntity } from "./IRepository"

export interface IUser extends IEntity {
  name: string
}

export interface IBoard extends IEntity {
  name: string
  authorId: number
}

export interface IColumn extends IEntity {
  name: string
  boardId: number
  description: string
  order: number
  color: string
}

export interface ITask extends IEntity {
  name: string
  columnId: number
  description: string
  authorId: number
  assigneeId: number
  dateCreated: number
  dateExpires: number
  priority: number
}