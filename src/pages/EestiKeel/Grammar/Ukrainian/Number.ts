// import { Adjective } from "./Adjective"
// import { Case, CaseMask, Number, Gender, Word } from "./Grammar"


// // const digits = [
// //   new Word([['один', 'одна'], ['одного', 'одноі,однієі'], ['одному', 'одніи'], ['один,одного', 'одну'], ['одним', 'одною,однією'], ['одному,однім', 'одніи']], Gender.Masculine)
// // ]

// class Digit extends Word {
//   constructor(private num: number) {
//     super()
//   }

//   agree(query: Case | Number | Gender): string {
//     throw new Error("Method not implemented.")
//   }
// }

// /**
//  * asd
//  * @type complex
//  * @param cases array of 
//  * @returns t
//  */
// const teen = (cases: string[][]) => ({
//   [Case.Nominative]: {
//     [Number.Singular]: {
//       [Gender.Masculine]: cases[0][0],
//       [Gender.Feminine]: cases[0][1],
//       [Gender.Neuter]: cases[0][2],
//     },
//     [Number.Plural]: {
//       [Gender.Masculine]: cases[0][3],
//     },
//   },
//   [Case.Genitive]: {
//     [Number.Singular]: {
//       [Gender.Masculine]: cases[1][0],
//       [Gender.Feminine]: cases[1][1],
//       [Gender.Neuter]: cases[1][2],
//     },
//     [Number.Plural]: {
//       [Gender.Masculine]: cases[1][3],
//     },
//   },
//   [Case.Dative]: {
//     [Number.Singular]: {
//       [Gender.Masculine]: cases[2][0],
//       [Gender.Feminine]: cases[2][1],
//       [Gender.Neuter]: cases[2][2],
//     },
//     [Number.Plural]: {
//       [Gender.Masculine]: cases[2][3],
//     },
//   },
//   [Case.Accusative]: {
//     [Number.Singular]: {
//       [Gender.Masculine]: cases[3][0],
//       [Gender.Feminine]: cases[3][1],
//       [Gender.Neuter]: cases[3][2],
//     },
//     [Number.Plural]: {
//       [Gender.Masculine]: cases[3][3],
//     },
//   },
//   [Case.Instrumental]: {
//     [Number.Singular]: {
//       [Gender.Masculine]: cases[4][0],
//       [Gender.Feminine]: cases[4][1],
//       [Gender.Neuter]: cases[4][2],
//     },
//     [Number.Plural]: {
//       [Gender.Masculine]: cases[4][3],
//     },
//   },
//   [Case.Locative]: {
//     [Number.Singular]: {
//       [Gender.Masculine]: cases[5][0],
//       [Gender.Feminine]: cases[5][1],
//       [Gender.Neuter]: cases[5][2],
//     },
//     [Number.Plural]: {
//       [Gender.Masculine]: cases[5][3],
//     },
//   },
//   [Case.Vocative]: {
//     [Number.Singular]: {
//       [Gender.Masculine]: cases[0][0],
//       [Gender.Feminine]: cases[0][1],
//       [Gender.Neuter]: cases[0][2],
//     },
//     [Number.Plural]: {
//       [Gender.Masculine]: cases[0][3],
//     },
//   }
// })

// const teens = [
//   undefined,
//   teen([
//     ['один', 'одна', 'одне', 'одні'],
//     ['одного', 'однієї', 'одного', 'одних'],
//     ['одному', 'одній', 'одному', 'одним'],
//     ['одного', 'одну', 'одне', 'одних'],
//     ['одним', 'однією', 'одним', 'одними'],
//     ['одному', 'одній', 'одному', 'одних'],
//   ]),
//   teen([
//     ['один', 'одна', 'одне', 'одні'],
//     ['одного', 'однієї', 'одного', 'одних'],
//     ['одному', 'одній', 'одному', 'одним'],
//     ['одного', 'одну', 'одне', 'одних'],
//     ['одним', 'однією', 'одним', 'одними'],
//     ['одному', 'одній', 'одному', 'одних'],
//   ]),
//   teen([
//     ['один', 'одна', 'одне', 'одні'],
//     ['одного', 'однієї', 'одного', 'одних'],
//     ['одному', 'одній', 'одному', 'одним'],
//     ['одного', 'одну', 'одне', 'одних'],
//     ['одним', 'однією', 'одним', 'одними'],
//     ['одному', 'одній', 'одному', 'одних'],
//   ]),
//   teen([
//     ['один', 'одна', 'одне', 'одні'],
//     ['одного', 'однієї', 'одного', 'одних'],
//     ['одному', 'одній', 'одному', 'одним'],
//     ['одного', 'одну', 'одне', 'одних'],
//     ['одним', 'однією', 'одним', 'одними'],
//     ['одному', 'одній', 'одному', 'одних'],
//   ]),
//   teen([
//     ['один', 'одна', 'одне', 'одні'],
//     ['одного', 'однієї', 'одного', 'одних'],
//     ['одному', 'одній', 'одному', 'одним'],
//     ['одного', 'одну', 'одне', 'одних'],
//     ['одним', 'однією', 'одним', 'одними'],
//     ['одному', 'одній', 'одному', 'одних'],
//   ]),
//   teen([
//     ['один', 'одна', 'одне', 'одні'],
//     ['одного', 'однієї', 'одного', 'одних'],
//     ['одному', 'одній', 'одному', 'одним'],
//     ['одного', 'одну', 'одне', 'одних'],
//     ['одним', 'однією', 'одним', 'одними'],
//     ['одному', 'одній', 'одному', 'одних'],
//   ]),
//   teen([
//     ['один', 'одна', 'одне', 'одні'],
//     ['одного', 'однієї', 'одного', 'одних'],
//     ['одному', 'одній', 'одному', 'одним'],
//     ['одного', 'одну', 'одне', 'одних'],
//     ['одним', 'однією', 'одним', 'одними'],
//     ['одному', 'одній', 'одному', 'одних'],
//   ]),
//   teen([
//     ['один', 'одна', 'одне', 'одні'],
//     ['одного', 'однієї', 'одного', 'одних'],
//     ['одному', 'одній', 'одному', 'одним'],
//     ['одного', 'одну', 'одне', 'одних'],
//     ['одним', 'однією', 'одним', 'одними'],
//     ['одному', 'одній', 'одному', 'одних'],
//   ]),
//   teen([
//     ['один', 'одна', 'одне', 'одні'],
//     ['одного', 'однієї', 'одного', 'одних'],
//     ['одному', 'одній', 'одному', 'одним'],
//     ['одного', 'одну', 'одне', 'одних'],
//     ['одним', 'однією', 'одним', 'одними'],
//     ['одному', 'одній', 'одному', 'одних'],
//   ]),
// ]

// // .normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace("'", "\\'")

// class Ordinal extends Word {
//   constructor(private num: number) {
//     super() 
//   }

//   agree(query: Gender | Case | Number): string {
//     const c: Case = (query & CaseMask) || Case.Nominative
//     return [
//       {
//         2: {
//           [Case.Nominative]: 'двадцять',
//           [Case.Genitive]: 'двадцяти',
//           [Case.Dative]: 'двадцятьом',
//           [Case.Accusative]: 'двадцять',
//           [Case.Instrumental]: 'двадцятьми',
//           [Case.Locative]: 'двадцятьох',
//           [Case.Vocative]: 'двадцять',
//         }[c],
//         3: {
//           [Case.Nominative]: 'тридцять',
//           [Case.Genitive]: 'тридцяти',
//           [Case.Dative]: 'тридцятьом',
//           [Case.Accusative]: 'тридцять',
//           [Case.Instrumental]: 'тридцятьми',
//           [Case.Locative]: 'тридцятьох',
//           [Case.Vocative]: 'тридцять',
//         }[c],
//         4: {
//           [Case.Nominative]: 'сорок',
//           [Case.Genitive]: 'сорока',
//           [Case.Dative]: 'сорока',
//           [Case.Accusative]: 'сорок',
//           [Case.Instrumental]: 'сорок',
//           [Case.Locative]: 'сорока',
//           [Case.Vocative]: 'сорок',
//         }[c],
//         5: {
//           [Case.Nominative]: 'п\ятдесят',
//           [Case.Genitive]: 'п\ятдесяти',
//           [Case.Dative]: 'п\ятдесятьом',
//           [Case.Accusative]: 'п\ятдесят',
//           [Case.Instrumental]: 'п\ятдесятьма',
//           [Case.Locative]: 'п\ятдесятьох',
//           [Case.Vocative]: 'п\ятдесят',
//         }[c],
//         6: {
//           [Case.Nominative]: 'шістдесят',
//           [Case.Genitive]: 'шістдесяти',
//           [Case.Dative]: 'шістдесятьом',
//           [Case.Accusative]: 'шістдесят',
//           [Case.Instrumental]: 'шістдесятьма',
//           [Case.Locative]: 'шістдесятьох',
//           [Case.Vocative]: 'шістдесят',
//         }[c],
//         7: {
//           [Case.Nominative]: 'сімдесят',
//           [Case.Genitive]: 'сімдесяти',
//           [Case.Dative]: 'сімдесятьом',
//           [Case.Accusative]: 'сімдесят',
//           [Case.Instrumental]: 'сімдесятьма',
//           [Case.Locative]: 'сімдесятьох',
//           [Case.Vocative]: 'сімдесят',
//         }[c],
//         8: {
//           [Case.Nominative]: 'вісімдесят',
//           [Case.Genitive]: 'вісімдесяти',
//           [Case.Dative]: 'вісімдесятьом',
//           [Case.Accusative]: 'вісімдесят',
//           [Case.Instrumental]: 'вісімдесятьма',
//           [Case.Locative]: 'вісімдесятьох',
//           [Case.Vocative]: 'вісімдесят',
//         }[c],
//         9: {
//           [Case.Nominative]: 'дев\'яносто',
//           [Case.Genitive]: 'дев\'яноста',
//           [Case.Dative]: 'дев\'яноста',
//           [Case.Accusative]: 'дев\'яносто',
//           [Case.Instrumental]: 'дев\'яноста',
//           [Case.Locative]: 'дев\'яносто',
//           [Case.Vocative]: 'дев\'яносто',
//         }[c],
//       }[Math.floor(this.num / 10)]
//       ,
//       (this.num < 20 && this.num > 9) 
//       ? this.num == 10 
//         ? 'десять' 
//         : {
//           11: 'оди',
//           12: 'два',
//           13: 'три',
//           14: 'чотир',
//           15: 'п\'ят',
//           16: 'шіст',
//           17: 'сім',
//           18: 'вісім',
//           19: 'дев\'ят',
//         }[this.num] + {
//           [Case.Nominative]: 'надцять',
//           [Case.Genitive]: 'надцяти',
//           [Case.Dative]: 'надцятьом',
//           [Case.Accusative]: 'надцять',
//           [Case.Instrumental]: 'надцятьми',
//           [Case.Locative]: 'надцятьох',
//           [Case.Vocative]: 'надцять',
//         }[c]
//       : {
//         0: '',
//         1: 'один',
//         2: 'два',
//         3: 'три',
//         4: 'чотири',
//         5: 'п\'ять',
//         6: 'шість',
//         7: 'сім',
//         8: 'вісім',
//         9: 'дев\'ять'
//       }[this.num % 10]
//     ].join(' ')
//   }
// }

// export class Cardinal {
//   static agree(i: number, word: Word, gender: Gender): string {
//     if (i > 10 && i < 20) return word.agree(Case.Genitive | Number.Plural | gender)
//     switch (i % 10) {
//       case 0: return word.agree(Case.Genitive | Number.Plural | gender)
//       case 1: return word.agree(Case.Nominative | Number.Singular | gender)
//       case 2:
//       case 3:
//       case 4: return word.agree(Case.Nominative | Number.Plural | gender)
//       case 5:
//       case 6:
//       case 7:
//       case 8:
//       case 9: return word.agree(Case.Genitive | Number.Plural | gender)
//       default: return word.agree(Case.Genitive | Number.Plural | gender)
//     }
//   }

//   static get(i: number, g: Gender): string {
//     let result = 'нуль'
//     if (i < 10) {
//       switch (i) {
//         case 0: result = ''; break
//         case 1: result = 'один'; break
//         case 2: result = 'два'; break
//         case 3: result = 'три'; break
//         case 4: result = 'чотири'; break
//         case 5: result = 'п\'ять'; break
//         case 6: result = 'шість'; break
//         case 7: result = 'сім'; break
//         case 8: result = 'вісім'; break
//         case 9: result = 'дев\'ять'; break
//         default: result = `${i}`
//       }
//       return {
//         [Gender.Masculine]: result,
//         [Gender.Feminine]: i == 1 ? 'одна' : i == 2 ? 'дві' : result,
//         [Gender.Neuter]: i == 1 ? 'одне' : result
//       }[g]
//     } else if (i < 20) {
//       return i == 10 ? 'десять' : {
//         11: 'оди',
//         12: 'два',
//         13: 'три',
//         14: 'чотир',
//         15: 'п\'ят',
//         16: 'шіст',
//         17: 'сім',
//         18: 'вісім',
//         19: 'дев\'ят',
//       }[i] + 'надцять'
//     } else if (i < 100) {
//       switch (Math.floor(i / 10)) {
//         case 2: result = 'двадцять'; break
//         case 3: result = 'тридцять'; break
//         case 4: result = 'сорок'; break
//         case 5: result = 'п\'ятдесят'; break
//         case 6: result = 'шістдесят'; break
//         case 7: result = 'сімдесят'; break
//         case 8: result = 'вісімдесят'; break
//         case 9: result = 'дев\'яносто'; break
//         default: result = `${i}`
//       }
//       return [result, this.get(i % 10, g)].filter(a => a).join(' ')
//     } else {
//       return `${i}`
//     }
//   }
// }