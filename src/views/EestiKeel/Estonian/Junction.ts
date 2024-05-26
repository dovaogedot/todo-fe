import { Case, GNumber, Word } from "./Common"

export class Junction extends Word {
  agree(query: Case | GNumber): string {
    return this.word
  }

  constructor(private word: string) {
    super()
  }
}