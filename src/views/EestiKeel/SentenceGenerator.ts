import { Lang } from "./Locale"

type Concatenation = 'ja' | 'ning'

class Word {}

class Caseable extends Word {}
class Noun extends Caseable {}
class Adjective extends Caseable {}

class Declensionable extends Word {}
class Verb extends Declensionable {}

enum GramNumber { single, plural }
enum Person { first, second, third }
enum Gender { masculine, feminine, neuter }

class EestiCaseable extends Caseable {
  nime: string = ''
  oma: string = ''
  osa: string = ''
  alale: string = this.oma + 'le'
  alal: string = this.oma + 'l'
  alalt: string = this.oma + 'lt'
  sisseluhike: string = this.oma
  sisse: string = this.oma + 'sse'
  sees: string = this.oma + 's'
  sest: string = this.oma + 'st'

  constructor(nime: string, oma: string, osa: string) {
    super()
    this.nime = nime
    this.oma = oma
    this.osa = osa
  }
}

class EestiDeclensionable extends Declensionable {
  root: string = ''
  ma: string = this.root + 'ma'
  da: string = this.root + 'da'

  #forms: {
    [GramNumber.single]: { [Person.first]: string, [Person.second]: string, [Person.third]: string },
    [GramNumber.plural]: { [Person.first]: string, [Person.second]: string, [Person.third]: string },
  } = {
    [GramNumber.single]: {
      [Person.first]: this.root + 'n',
      [Person.second]: this.root + 'd',
      [Person.third]: this.root + 'b',
    },
    [GramNumber.plural]: {
      [Person.first]: this.root + 'me',
      [Person.second]: this.root + 'te',
      [Person.third]: this.root + 'vad',
    }
  }

  constructor(root: string, da: string | undefined, ma: string | undefined) {
    super()
    this.root = root
    if (da)
      this.da = da
    if (ma)
      this.ma = ma
  }

  get(target: any, value: GramNumber) {
    return this.#forms[value]
  }
}

class UkrainianCaseable extends Caseable {
  root: string = ''
  get nominative(): { [GramNumber.single]: string, [GramNumber.plural]: string } {
    return {
      [Gender.masculine]: {
        [GramNumber.single]: this.root,
        [GramNumber.plural]: this.root + 'и',
      },
      [Gender.feminine]: {
        [GramNumber.single]: this.root + 'а',
        [GramNumber.plural]: this.root + 'и',
      },
      [Gender.neuter]: {
        [GramNumber.single]: this.root + 'o',
        [GramNumber.plural]: this.root + 'а',
      }
    }[this.gender]
  }
  genitive: string = ''
  dative: string = ''
  accusative: string = ''
  instrumental: string = ''
  locative: string = ''
  vocative: string = ''
  gender: Gender = Gender.neuter
}

type DictionaryEntry<T extends Word> = {
  lang: Lang,
  word: T
}[]

type Dictionary<T extends Word> = DictionaryEntry<T>[]

const NounDictionary: Dictionary<Noun> = [
  [
    { lang: 'et', word: new EestiCaseable('laud', 'laua', 'lauda'), },
  ], [
    { lang: 'et', word: new EestiCaseable('raamat', 'raamatu', 'raamatut') },
  ], [
    { lang: 'et', word: new EestiCaseable('padi', 'padja', 'patja') },
  ],
]

const adjectives: Adjective[] = [
  
]

class Generator {
  generate() {
    
  }
}