import { Case, GNumber, Word } from "./Common"
import { Noun } from "./Noun"


export class CombinedNoun extends Noun {
  agree(query: Case | GNumber): string {
    return this.first + this.last.agree(query)
  }
  constructor(private first: string, private last: Word) {
    super({
      nime: first + last.agree(Case.Nimetav),
      oma: first + last.agree(Case.Omastav),
      osa: first + last.agree(Case.Osastav),
      luhike: first + last.agree(Case.Luhike),
      omaPl: first + last.agree(Case.Omastav | GNumber.Plural),
      osaPl: first + last.agree(Case.Osastav | GNumber.Plural),
    })
  }
}
