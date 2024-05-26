import { Adjective } from "./Adjective"
import { Case, GNumber, Gender, Word } from "./Common"
import { Noun } from "./Noun"

export class Combined extends Word {
  agree(query: Gender | Case | GNumber): string {
    return this.words.map(w => w.agree(query)).join(' ')
  }
  
  constructor(private words: Word[]) {
    super(words.filter(w => w.gender)[0].gender)
  }
}