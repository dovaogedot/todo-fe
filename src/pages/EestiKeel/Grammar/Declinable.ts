import { Case } from "./Combined"

export type IDeclined = {
  case: Case
  word: IDeclinable
}

export type IDeclinable = {
  decline: (c?: Case) => string
}