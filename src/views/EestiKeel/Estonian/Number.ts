import { Case, Word } from "./Common"


export class Number {
  static agree(i: number, word: Word): string {
    return i == 1 ? word.agree(Case.Nimetav) : word.agree(Case.Osastav)
  }

  static get(i: number): string {
    if (i < 10) {
      switch (i) {
        case 0: return ''
        case 1: return 'üks'
        case 2: return 'kaks'
        case 3: return 'kolm'
        case 4: return 'neli'
        case 5: return 'viis'
        case 6: return 'kuus'
        case 7: return 'seitse'
        case 8: return 'kaheksa'
        case 9: return 'üheksa'
        default: return `${i}`
      }
    } else if (i < 20) {
      return i == 10
        ? 'kümme'
        : Number.get(Math.floor(i % 10)) + 'teist'
    } else if (i < 100) {
      return [Number.get(Math.floor(i / 10)) + 'kümmend', Number.get(i % 10)].filter(a => a).join(' ')
    } else {
      return `${i}`
    }
  }
}
