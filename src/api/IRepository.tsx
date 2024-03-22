interface IEntity {
  id: number
}

interface IRepository<T extends IEntity> {
  get: (entityId: number) => Promise<T | null>
  post: (entity: T) => Promise<T>
  put: (entity: T) => Promise<T>
  delete: (entityId: number) => Promise<void>

  getAll: () => Promise<T[]>
}

export type { IRepository, IEntity }