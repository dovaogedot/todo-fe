import { Case, GNumber } from "./Common"

abstract class Word {
  abstract agree(query: Case | GNumber): string
}

export class Noun extends Word {
  #cases: {
    nime: string,
    oma: string,
    osa: string,
    luhike?: string,
    omaPl: string,
    osaPl: string,
  } = {
    nime: '',
    oma: '',
    osa: '',
    luhike: undefined,
    omaPl: '',
    osaPl: ''
  }

  constructor(cases: {
    nime: string,
    oma?: string,
    osa?: string,
    luhike?: string,
    omaPl?: string,
    osaPl?: string,
  }) {
    super()
    this.#cases.nime = cases.nime
    this.#cases.oma = cases.oma || this.#tryOma()
    this.#cases.osa = cases.osa || this.#tryOsa()
    this.#cases.luhike = cases.luhike
    this.#cases.omaPl = cases.omaPl || this.#tryOmaPl()
    this.#cases.osaPl = cases.osaPl || this.#tryOsaPl()
  }

  agree(query: Case | GNumber): string {
    const c = (query & (Case.Nimetav | Case.Omastav | Case.Osastav | Case.Sisseutlev | Case.Seesutlev | Case.Seestutlev | Case.Alaleutlev | Case.Alalutlev | Case.Alaltutlev | Case.Saav | Case.Rajav | Case.Olev | Case.Ilmautlev | Case.Kaasautlev)) || Case.Nimetav
    const n = (query & (GNumber.Singular | GNumber.Plural)) || GNumber.Singular
    const oma = n == GNumber.Singular ? this.#cases.oma : this.#cases.omaPl
    
    switch (c) {
      case Case.Nimetav:
        return n == GNumber.Singular ? this.#cases.nime : this.#cases.oma + 'd'
      case Case.Omastav:
        return n == GNumber.Singular ? this.#cases.oma : this.#cases.omaPl
      case Case.Osastav:
        return n == GNumber.Singular ? this.#cases.osa : this.#cases.osaPl
      case Case.Sisseutlev:
        return this.#cases.luhike || oma + this.#ending(c)
      default:
        return this.#ending(c)
    }
  }

  #tryOmaPl() {
    if (this.#cases.osa.endsWith('t')) return this.#cases.osa + 'te'
    if (this.#cases.osa.endsWith('d')) return this.#cases.osa + 'de'
    return this.#cases.osa + 'de'
  }

  #tryOsaPl() {
    return this.#cases.osa + 'sid'
  }

  #tryOma() {
    if (this.#cases.nime.endsWith('ne')) return this.#cases.nime.substring(0, this.#cases.nime.length - 2) + 'se'
    return this.#cases.nime
  }

  #tryOsa() {
    if (this.#cases.nime.endsWith('ne')) return this.#cases.nime.substring(0, this.#cases.nime.length - 2) + 'st'
    return this.#cases.nime
  }

  get(i: number): string {
    return i == 1 ? this.#cases.nime : this.#cases.osa
  }

  #ending(c: Case): string {
    return {
      [Case.Nimetav]: '',
      [Case.Omastav]: '',
      [Case.Osastav]: '',
      [Case.Luhike]: '',
      [Case.Sisseutlev]: 'sse',
      [Case.Seesutlev]: 's',
      [Case.Seestutlev]: 'st',
      [Case.Alaleutlev]: 'le',
      [Case.Alalutlev]: 'l',
      [Case.Alaltutlev]: 'lt',
      [Case.Saav]: 'ks',
      [Case.Rajav]: 'ni',
      [Case.Olev]: 'na',
      [Case.Ilmautlev]: 'ga',
      [Case.Kaasautlev]: 'ta'
    }[c]
  }
}

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

export class Adjective extends Noun {}

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

export default { Word, Adjective, Noun, Number, Case }