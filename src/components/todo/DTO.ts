export namespace Dto {
  export type Task = {
    id: string,
    name: string,
    description?: string,
  }

  export type Column = {
    id: string,
    name: string,
    tasks: Task[],
  }

  export type Board = {
    id: string,
    name: string,
    columns: Column[],
  }
}