import { Case, Number, Word } from "./Grammar"
import { Noun } from "./Noun"


export class CombinedNoun extends Noun {
  constructor(private first: string, private last: Word) {
    super({
      nime: first + last.agree(Case.Nimetav),
      oma: first + last.agree(Case.Omastav),
      osa: first + last.agree(Case.Osastav),
      luhike: first + last.agree(Case.Luhike),
      omaPl: first + last.agree(Case.Omastav | Number.Plural),
      osaPl: first + last.agree(Case.Osastav | Number.Plural),
    })
  }
  
  agree(query: Case | Number): string {
    return this.first + this.last.agree(query)
  }
}
