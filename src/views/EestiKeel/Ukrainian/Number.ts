import { Case, GNumber, Gender, Word } from "./Common"

export class Number {
  static agree(i: number, word: Word, gender: Gender): string {
    if (i > 10 && i < 20) return word.agree(Case.Genitive | GNumber.Plural | gender)
    switch (i % 10) {
      case 0: return word.agree(Case.Genitive | GNumber.Plural | gender)
      case 1: return word.agree(Case.Nominative | GNumber.Singular | gender)
      case 2:
      case 3:
      case 4: return word.agree(Case.Nominative | GNumber.Plural | gender)
      case 5:
      case 6:
      case 7:
      case 8:
      case 9: return word.agree(Case.Genitive | GNumber.Plural | gender)
      default: return word.agree(Case.Genitive | GNumber.Plural | gender)
    }
  }

  static get(i: number, g: Gender): string {
    let result = 'нуль'
    if (i < 10) {
      switch (i) {
        case 0: result = ''; break
        case 1: result = 'один'; break
        case 2: result = 'два'; break
        case 3: result = 'три'; break
        case 4: result = 'чотири'; break
        case 5: result = 'п\'ять'; break
        case 6: result = 'шість'; break
        case 7: result = 'сім'; break
        case 8: result = 'вісім'; break
        case 9: result = 'дев\'ять'; break
        default: result = `${i}`
      }
      return {
        [Gender.Masculine]: result,
        [Gender.Feminine]: i == 1 ? 'одна' : i == 2 ? 'дві' : result,
        [Gender.Neuter]: i == 1 ? 'одне' : result
      }[g]
    } else if (i < 20) {
      return i == 10 ? 'десять' : {
        11: 'оди',
        12: 'два',
        13: 'три',
        14: 'чотир',
        15: 'п\'ят',
        16: 'шіст',
        17: 'сім',
        18: 'вісім',
        19: 'дев\'ят',
      }[i] + 'надцять'
    } else if (i < 100) {
      switch (Math.floor(i / 10)) {
        case 2: result = 'двадцять'; break
        case 3: result = 'тридцять'; break
        case 4: result = 'сорок'; break
        case 5: result = 'п\'ятдесят'; break
        case 6: result = 'шістдесят'; break
        case 7: result = 'сімдесят'; break
        case 8: result = 'вісімдесят'; break
        case 9: result = 'дев\'яносто'; break
        default: result = `${i}`
      }
      return [result, this.get(i % 10, g)].filter(a => a).join(' ')
    } else {
      return `${i}`
    }
  }
}