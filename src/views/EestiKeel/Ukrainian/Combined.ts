import { Adjective } from "./Adjective"
import { Case, GNumber, Gender, Word } from "./Common"
import { Noun } from "./Noun"

export class Combined extends Word {
  agree(query: Gender | Case | GNumber): string {
    return this.adj.agree(query) + ' ' + this.noun.agree(query)
  }
  
  constructor(private adj: Adjective, private noun: Noun) {
    super(noun.gender)
  }
}