import { IRepository } from "./IRepository"
import { IUser, IBoard, IColumn, ITask } from "./Types"

interface ITodoRepository {
  users: IRepository<IUser>
  boards: IRepository<IBoard>
  columns: IRepository<IColumn>
  tasks: IRepository<ITask>
}

export type { ITodoRepository }