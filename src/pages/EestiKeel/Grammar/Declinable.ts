import { Case, Gender, Number } from "./Combined"

export type IDeclined = {
  case: Case
  word: IDeclinable
}

export type Declension = {
  case?: Case
  number?: Number
  gender?: Gender
}

export type IDeclinable = {
  decline: (d: Declension) => string
  freeze: (d: Declension) => void
}