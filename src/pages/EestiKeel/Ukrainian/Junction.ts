import { Case, Number, Gender, Word } from "./Grammar"

export class Junction extends Word {
  agree(query: Gender | Case | Number): string {
    return this.word
  }

  constructor(private word: string) {
    super()
  }
}