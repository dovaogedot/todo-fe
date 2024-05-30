export enum Number {
  Singular = 0,    // Однина
  Plural = 1 << 1, // Множина
}
export const GNumberMask = Number.Singular | Number.Plural

export enum Gender {
  Masculine = 1 << 2, // Чоловічий
  Feminine = 1 << 3,  // Жіночий
  Neuter = 1 << 4,    // Середній
}
export const GenderMask = Gender.Masculine | Gender.Feminine | Gender.Neuter

export enum Case {
  Nominative = 1 << 5,   // Називний
  Genitive = 1 << 6,     // Родовий
  Dative = 1 << 7,       // Давальний
  Accusative = 1 << 8,   // Знахідний
  Instrumental = 1 << 9, // Орудний
  Locative = 1 << 10,    // Місцевий
  Vocative = 1 << 11,    // Кличний
}
export const CaseMask = Case.Nominative | Case.Genitive | Case.Dative | Case.Accusative | Case.Instrumental | Case.Locative | Case.Vocative

export enum Declension {
  Hard = 1 << 11,  // -ий 
  Soft = 1 << 12,  // -ій
  Soft2 = 1 << 13, // -їй
  Mixed = 1 << 14, // -лиций
}
export const DeclensionMask = Declension.Hard || Declension.Soft || Declension.Soft2 || Declension.Mixed

export abstract class Word {
  constructor(public gender?: Gender) {}

  abstract agree(query: Case | Gender | Number): string

  freeze(query: Case | Number | Gender): Word {
    const word = this.agree(query)
    this.agree = (q: Case | Number | Gender): string => word
    return this
  }
}

export class CombinedWord extends Word {
  agree(query: Case | Gender | Number): string {
    return this.words.map(w => w.agree(query)).join(' ')
  }
  constructor(private words: Word[], gender?: Gender) {
    super(gender)
  }
}
