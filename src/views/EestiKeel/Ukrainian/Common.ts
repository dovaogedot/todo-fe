export enum GNumber {
  Singular = 0,    // Однина
  Plural = 1 << 1, // Множина
}

export enum Gender {
  Masculine = 1 << 2, // Чоловічий
  Feminine = 1 << 3,  // Жіночий
  Neuter = 1 << 4,    // Середній
}

export enum Case {
  Nominative = 1 << 5,   // Називний
  Genitive = 1 << 6,     // Родовий
  Dative = 1 << 7,       // Давальний
  Accusative = 1 << 8,   // Знахідний
  Instrumental = 1 << 9, // Орудний
  Locative = 1 << 10,    // Місцевий
  Vocative = 1 << 11,    // Кличний
}

export enum Declension {
  Hard = 1 << 11,  // -ий 
  Soft = 1 << 12,  // -ій
  Soft2 = 1 << 13, // -їй
  Mixed = 1 << 14, // -лиций
}

export abstract class Word {
  constructor(public gender?: Gender) {}

  abstract agree(query: Case | Gender | GNumber): string

  freeze(query: Case | GNumber | Gender): Word {
    const word = this.agree(query)
    this.agree = (q: Case | GNumber | Gender): string => word
    return this
  }
}

export class CombinedWord extends Word {
  agree(query: Case | Gender | GNumber): string {
    return this.words.map(w => w.agree(query)).join(' ')
  }
  constructor(private words: Word[], gender?: Gender) {
    super(gender)
  }
}

export default { Word, Case, Declension, Gender, GNumber }