// import { Word, Case, Number, Gender } from "./Grammar"

// export class Noun extends Word {
//   agree(query: Case | Number | Gender): string {
//     const c: Case = (query & (Case.Nominative | Case.Genitive | Case.Dative | Case.Accusative | Case.Instrumental | Case.Locative | Case.Vocative)) || Case.Nominative
//     const n: Number = (query & (Number.Singular | Number.Plural)) || Number.Singular
//     return {
//       [Case.Nominative]: {
//         [Number.Singular]: this.cases[0][0],
//         [Number.Plural]: this.cases[0][1],
//       }[n],
//       [Case.Genitive]: {
//         [Number.Singular]: this.cases[1][0],
//         [Number.Plural]: this.cases[1][1],
//       }[n],
//       [Case.Dative]: {
//         [Number.Singular]: this.cases[2][0],
//         [Number.Plural]: this.cases[2][1],
//       }[n],
//       [Case.Accusative]: {
//         [Number.Singular]: this.cases[3][0],
//         [Number.Plural]: this.cases[3][1],
//       }[n],
//       [Case.Instrumental]: {
//         [Number.Singular]: this.cases[4][0],
//         [Number.Plural]: this.cases[4][1],
//       }[n],
//       [Case.Locative]: {
//         [Number.Singular]: this.cases[5][0],
//         [Number.Plural]: this.cases[5][1],
//       }[n],
//       [Case.Vocative]: {
//         [Number.Singular]: this.cases[6][0],
//         [Number.Plural]: this.cases[6][1],
//       }[n],
//     }[c]
//   }

//   constructor(private cases: string[][], public gender: Gender) {
//     super(gender)
//     for (let c of this.cases) {
//       if (!c[1]) {
//         c[1] = c[0]
//       } else if (!c[0]) {
//         c[0] = c[1]
//       }
//     }
//   }
// }