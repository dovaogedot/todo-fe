import { Case, GNumber, Gender, Word } from "./Common"

export class Junction extends Word {
  agree(query: Gender | Case | GNumber): string {
    return this.word
  }

  constructor(private word: string) {
    super()
  }
}