import { Case, Number, Word } from "./Grammar"

export class Junction extends Word {
  agree(query: Case | Number): string {
    return this.word
  }

  constructor(private word: string) {
    super()
  }
}