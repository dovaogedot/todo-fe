import { Word, Case, GNumber, Gender } from "./Common"

export class Noun extends Word {
  agree(query: Case | GNumber | Gender): string {
    const c = (query & (Case.Nominative | Case.Genitive | Case.Dative | Case.Accusative | Case.Instrumental | Case.Locative | Case.Vocative)) || Case.Nominative
    const n = (query & (GNumber.Singular | GNumber.Plural)) || GNumber.Singular
    return {
      [Case.Nominative]: {
        [GNumber.Singular]: this.cases[0][0],
        [GNumber.Plural]: this.cases[0][1],
      }[n],
      [Case.Genitive]: {
        [GNumber.Singular]: this.cases[1][0],
        [GNumber.Plural]: this.cases[1][1],
      }[n],
      [Case.Dative]: {
        [GNumber.Singular]: this.cases[2][0],
        [GNumber.Plural]: this.cases[2][1],
      }[n],
      [Case.Accusative]: {
        [GNumber.Singular]: this.cases[3][0],
        [GNumber.Plural]: this.cases[3][1],
      }[n],
      [Case.Instrumental]: {
        [GNumber.Singular]: this.cases[4][0],
        [GNumber.Plural]: this.cases[4][1],
      }[n],
      [Case.Locative]: {
        [GNumber.Singular]: this.cases[5][0],
        [GNumber.Plural]: this.cases[5][1],
      }[n],
      [Case.Vocative]: {
        [GNumber.Singular]: this.cases[6][0],
        [GNumber.Plural]: this.cases[6][1],
      }[n],
    }[c]!
  }

  constructor(private cases: string[][], public gender: Gender) {
    super(gender)
    for (let c of this.cases) {
      if (!c[1]) {
        c[1] = c[0]
      } else if (!c[0]) {
        c[0] = c[1]
      }
    }
  }
}