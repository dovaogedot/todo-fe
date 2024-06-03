// import { Word, Case, Gender, Number, Declension } from './Grammar'

// export class Adjective extends Word {
//   agree(query: Case | Gender | Number): string {
//     const c: Case = query & (Case.Nominative | Case.Genitive | Case.Dative | Case.Accusative | Case.Instrumental | Case.Locative | Case.Vocative)
//     const g: Gender = query & (Gender.Masculine | Gender.Feminine | Gender.Neuter)
//     const n: Number = query & (Number.Singular | Number.Plural)
//     return this.#root + {
//       [Declension.Hard]: {
//         [Case.Nominative]: {
//           [Number.Singular]: {
//             [Gender.Masculine]: '-ий',
//             [Gender.Feminine]: '-а',
//             [Gender.Neuter]: '-е',
//           }[g],
//           [Number.Plural]: '-і',
//         }[n],
//         [Case.Genitive]: {
//           [Number.Singular]: {
//             [Gender.Masculine]: '-ого',
//             [Gender.Feminine]: '-ої',
//             [Gender.Neuter]: '-ого',
//           }[g],
//           [Number.Plural]: '-их',
//         }[n],
//         [Case.Dative]: {
//           [Number.Singular]: {
//             [Gender.Masculine]: '-ому',
//             [Gender.Feminine]: '-ій',
//             [Gender.Neuter]: '-ому',
//           }[g],
//           [Number.Plural]: '-им',
//         }[n],
//         [Case.Accusative]: {
//           [Number.Singular]: {
//             [Gender.Masculine]: '-ий',
//             [Gender.Feminine]: '-у',
//             [Gender.Neuter]: '-е',
//           }[g],
//           [Number.Plural]: '-і',
//         }[n],
//         [Case.Instrumental]: {
//           [Number.Singular]: {
//             [Gender.Masculine]: '-им',
//             [Gender.Feminine]: '-ою',
//             [Gender.Neuter]: '-им',
//           }[g],
//           [Number.Plural]: '-ими',
//         }[n],
//         [Case.Locative]: {
//           [Number.Singular]: {
//             [Gender.Masculine]: '-ому',
//             [Gender.Feminine]: '-ій',
//             [Gender.Neuter]: '-ому',
//           }[g],
//           [Number.Plural]: '-их',
//         }[n],
//         [Case.Vocative]: {
//           [Number.Singular]: {
//             [Gender.Masculine]: '',
//             [Gender.Feminine]: '',
//             [Gender.Neuter]: '',
//           }[g],
//           [Number.Plural]: '',
//         }[n],
//       }[c],
//       [Declension.Soft]: {
//         [Case.Nominative]: {
//           [Number.Singular]: {
//             [Gender.Masculine]: '-ій',
//             [Gender.Feminine]: '-я',
//             [Gender.Neuter]: '-є',
//           }[g],
//           [Number.Plural]: '-і',
//         }[n],
//         [Case.Genitive]: {
//           [Number.Singular]: {
//             [Gender.Masculine]: '-ього',
//             [Gender.Feminine]: '-ьої',
//             [Gender.Neuter]: '-ього',
//           }[g],
//           [Number.Plural]: '-іх',
//         }[n],
//         [Case.Dative]: {
//           [Number.Singular]: {
//             [Gender.Masculine]: '-ьому',
//             [Gender.Feminine]: '-ій',
//             [Gender.Neuter]: '-ьому',
//           }[g],
//           [Number.Plural]: '-ім',
//         }[n],
//         [Case.Accusative]: {
//           [Number.Singular]: {
//             [Gender.Masculine]: '-ій',
//             [Gender.Feminine]: '-ю',
//             [Gender.Neuter]: '-є',
//           }[g],
//           [Number.Plural]: '-і',
//         }[n],
//         [Case.Instrumental]: {
//           [Number.Singular]: {
//             [Gender.Masculine]: '-ім',
//             [Gender.Feminine]: '-ьою',
//             [Gender.Neuter]: '-ім',
//           }[g],
//           [Number.Plural]: '-іми',
//         }[n],
//         [Case.Locative]: {
//           [Number.Singular]: {
//             [Gender.Masculine]: '-ьому',
//             [Gender.Feminine]: '-ій',
//             [Gender.Neuter]: '-ьому',
//           }[g],
//           [Number.Plural]: '-іх',
//         }[n],
//         [Case.Vocative]: {
//           [Number.Singular]: {
//             [Gender.Masculine]: '',
//             [Gender.Feminine]: '',
//             [Gender.Neuter]: '',
//           }[g],
//           [Number.Plural]: '',
//         }[n],
//       }[c],
//       [Declension.Soft2]: {
//         [Case.Nominative]: {
//           [Number.Singular]: {
//             [Gender.Masculine]: '-їй',
//             [Gender.Feminine]: '-я',
//             [Gender.Neuter]: '-є',
//           }[g],
//           [Number.Plural]: '-ї',
//         }[n],
//         [Case.Genitive]: {
//           [Number.Singular]: {
//             [Gender.Masculine]: '-його',
//             [Gender.Feminine]: '-йої',
//             [Gender.Neuter]: '-його',
//           }[g],
//           [Number.Plural]: '-їх',
//         }[n],
//         [Case.Dative]: {
//           [Number.Singular]: {
//             [Gender.Masculine]: '-йому',
//             [Gender.Feminine]: '-їй',
//             [Gender.Neuter]: '-йому',
//           }[g],
//           [Number.Plural]: '-їм',
//         }[n],
//         [Case.Accusative]: {
//           [Number.Singular]: {
//             [Gender.Masculine]: '-їй',
//             [Gender.Feminine]: '-ю',
//             [Gender.Neuter]: '-є',
//           }[g],
//           [Number.Plural]: '-ї',
//         }[n],
//         [Case.Instrumental]: {
//           [Number.Singular]: {
//             [Gender.Masculine]: '-їм',
//             [Gender.Feminine]: '-йою',
//             [Gender.Neuter]: '-їм',
//           }[g],
//           [Number.Plural]: '-їми',
//         }[n],
//         [Case.Locative]: {
//           [Number.Singular]: {
//             [Gender.Masculine]: '-йому',
//             [Gender.Feminine]: '-їй',
//             [Gender.Neuter]: '-йому',
//           }[g],
//           [Number.Plural]: '-їх',
//         }[n],
//         [Case.Vocative]: {
//           [Number.Singular]: {
//             [Gender.Masculine]: '',
//             [Gender.Feminine]: '',
//             [Gender.Neuter]: '',
//           }[g],
//           [Number.Plural]: '',
//         }[n],
//       }[c],
//       [Declension.Mixed]: {
//         [Case.Nominative]: {
//           [Number.Singular]: {
//             [Gender.Masculine]: '-лиций',
//             [Gender.Feminine]: '-лиця',
//             [Gender.Neuter]: '-лице',
//           }[g],
//           [Number.Plural]: '-лиці',
//         }[n],
//         [Case.Genitive]: {
//           [Number.Singular]: {
//             [Gender.Masculine]: '-лицього',
//             [Gender.Feminine]: '-лицьої',
//             [Gender.Neuter]: '-лицього',
//           }[g],
//           [Number.Plural]: '-лицих',
//         }[n],
//         [Case.Dative]: {
//           [Number.Singular]: {
//             [Gender.Masculine]: '-лицьому',
//             [Gender.Feminine]: '-лицій',
//             [Gender.Neuter]: '-лицьому',
//           }[g],
//           [Number.Plural]: '-лицим',
//         }[n],
//         [Case.Accusative]: {
//           [Number.Singular]: {
//             [Gender.Masculine]: '-лицього',
//             [Gender.Feminine]: '-лицю',
//             [Gender.Neuter]: '-лице',
//           }[g],
//           [Number.Plural]: '-лицих',
//         }[n],
//         [Case.Instrumental]: {
//           [Number.Singular]: {
//             [Gender.Masculine]: '-лицим',
//             [Gender.Feminine]: '-лицьою',
//             [Gender.Neuter]: '-лицим',
//           }[g],
//           [Number.Plural]: '-лицими',
//         }[n],
//         [Case.Locative]: {
//           [Number.Singular]: {
//             [Gender.Masculine]: '-лицьому',
//             [Gender.Feminine]: '-лицій',
//             [Gender.Neuter]: '-лицьому',
//           }[g],
//           [Number.Plural]: '-лицих',
//         }[n],
//         [Case.Vocative]: {
//           [Number.Singular]: {
//             [Gender.Masculine]: '',
//             [Gender.Feminine]: '',
//             [Gender.Neuter]: '',
//           }[g],
//           [Number.Plural]: '',
//         }[n],
//       }[c],
//     }[this.#declension].replace('-', '')
//   }

//   #root: string
//   #declension: Declension 

//   constructor(nominative: string) {
//     super()
//     this.#root = nominative.substring(0, nominative.length - 2)

//     if (nominative.endsWith('ий')) {
//       this.#declension = Declension.Hard
//     } else if (nominative.endsWith('ій')) {
//       this.#declension = Declension.Soft
//     } else if (nominative.endsWith('їй')) {
//       this.#declension = Declension.Soft2
//     } else {
//       this.#root = nominative.substring(0, nominative.length - 5)
//       this.#declension = Declension.Mixed
//     }
//   }

//   get(i: number, gender: Gender): string {
//     if (i > 10 && i < 20) return this.agree(Case.Genitive | Number.Plural | gender)
//     switch (i % 10) {
//       case 0: return this.agree(Case.Genitive | Number.Plural | gender)
//       case 1: return this.agree(Case.Nominative | Number.Singular | gender)
//       case 2:
//       case 3:
//       case 4: return this.agree(Case.Nominative | Number.Plural | gender)
//       case 5:
//       case 6:
//       case 7:
//       case 8:
//       case 9: return this.agree(Case.Genitive | Number.Plural | gender)
//       default: return this.agree(Case.Genitive | Number.Plural | gender)
//     }
//   }
// }
