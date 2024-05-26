import { Word, Case, Gender, GNumber, Declension } from './Common'

export class Adjective extends Word {
  agree(query: Case | Gender | GNumber): string {
    const c = query & (Case.Nominative | Case.Genitive | Case.Dative | Case.Accusative | Case.Instrumental | Case.Locative | Case.Vocative)
    const g = query & (Gender.Masculine | Gender.Feminine | Gender.Neuter)
    const n = query & (GNumber.Singular | GNumber.Plural)
    return this.#root + {
      [Declension.Hard]: {
        [Case.Nominative]: {
          [GNumber.Singular]: {
            [Gender.Masculine]: '-ий',
            [Gender.Feminine]: '-а',
            [Gender.Neuter]: '-е',
          }[g],
          [GNumber.Plural]: '-і',
        }[n],
        [Case.Genitive]: {
          [GNumber.Singular]: {
            [Gender.Masculine]: '-ого',
            [Gender.Feminine]: '-ої',
            [Gender.Neuter]: '-ого',
          }[g],
          [GNumber.Plural]: '-их',
        }[n],
        [Case.Dative]: {
          [GNumber.Singular]: {
            [Gender.Masculine]: '-ому',
            [Gender.Feminine]: '-ій',
            [Gender.Neuter]: '-ому',
          }[g],
          [GNumber.Plural]: '-им',
        }[n],
        [Case.Accusative]: {
          [GNumber.Singular]: {
            [Gender.Masculine]: '-ий',
            [Gender.Feminine]: '-у',
            [Gender.Neuter]: '-е',
          }[g],
          [GNumber.Plural]: '-і',
        }[n],
        [Case.Instrumental]: {
          [GNumber.Singular]: {
            [Gender.Masculine]: '-им',
            [Gender.Feminine]: '-ою',
            [Gender.Neuter]: '-им',
          }[g],
          [GNumber.Plural]: '-ими',
        }[n],
        [Case.Locative]: {
          [GNumber.Singular]: {
            [Gender.Masculine]: '-ому',
            [Gender.Feminine]: '-ій',
            [Gender.Neuter]: '-ому',
          }[g],
          [GNumber.Plural]: '-их',
        }[n],
        [Case.Vocative]: {
          [GNumber.Singular]: {
            [Gender.Masculine]: '',
            [Gender.Feminine]: '',
            [Gender.Neuter]: '',
          }[g],
          [GNumber.Plural]: '',
        }[n],
      }[c],
      [Declension.Soft]: {
        [Case.Nominative]: {
          [GNumber.Singular]: {
            [Gender.Masculine]: '-ій',
            [Gender.Feminine]: '-я',
            [Gender.Neuter]: '-є',
          }[g],
          [GNumber.Plural]: '-і',
        }[n],
        [Case.Genitive]: {
          [GNumber.Singular]: {
            [Gender.Masculine]: '-ього',
            [Gender.Feminine]: '-ьої',
            [Gender.Neuter]: '-ього',
          }[g],
          [GNumber.Plural]: '-іх',
        }[n],
        [Case.Dative]: {
          [GNumber.Singular]: {
            [Gender.Masculine]: '-ьому',
            [Gender.Feminine]: '-ій',
            [Gender.Neuter]: '-ьому',
          }[g],
          [GNumber.Plural]: '-ім',
        }[n],
        [Case.Accusative]: {
          [GNumber.Singular]: {
            [Gender.Masculine]: '-ій',
            [Gender.Feminine]: '-ю',
            [Gender.Neuter]: '-є',
          }[g],
          [GNumber.Plural]: '-і',
        }[n],
        [Case.Instrumental]: {
          [GNumber.Singular]: {
            [Gender.Masculine]: '-ім',
            [Gender.Feminine]: '-ьою',
            [Gender.Neuter]: '-ім',
          }[g],
          [GNumber.Plural]: '-іми',
        }[n],
        [Case.Locative]: {
          [GNumber.Singular]: {
            [Gender.Masculine]: '-ьому',
            [Gender.Feminine]: '-ій',
            [Gender.Neuter]: '-ьому',
          }[g],
          [GNumber.Plural]: '-іх',
        }[n],
        [Case.Vocative]: {
          [GNumber.Singular]: {
            [Gender.Masculine]: '',
            [Gender.Feminine]: '',
            [Gender.Neuter]: '',
          }[g],
          [GNumber.Plural]: '',
        }[n],
      }[c],
      [Declension.Soft2]: {
        [Case.Nominative]: {
          [GNumber.Singular]: {
            [Gender.Masculine]: '-їй',
            [Gender.Feminine]: '-я',
            [Gender.Neuter]: '-є',
          }[g],
          [GNumber.Plural]: '-ї',
        }[n],
        [Case.Genitive]: {
          [GNumber.Singular]: {
            [Gender.Masculine]: '-його',
            [Gender.Feminine]: '-йої',
            [Gender.Neuter]: '-його',
          }[g],
          [GNumber.Plural]: '-їх',
        }[n],
        [Case.Dative]: {
          [GNumber.Singular]: {
            [Gender.Masculine]: '-йому',
            [Gender.Feminine]: '-їй',
            [Gender.Neuter]: '-йому',
          }[g],
          [GNumber.Plural]: '-їм',
        }[n],
        [Case.Accusative]: {
          [GNumber.Singular]: {
            [Gender.Masculine]: '-їй',
            [Gender.Feminine]: '-ю',
            [Gender.Neuter]: '-є',
          }[g],
          [GNumber.Plural]: '-ї',
        }[n],
        [Case.Instrumental]: {
          [GNumber.Singular]: {
            [Gender.Masculine]: '-їм',
            [Gender.Feminine]: '-йою',
            [Gender.Neuter]: '-їм',
          }[g],
          [GNumber.Plural]: '-їми',
        }[n],
        [Case.Locative]: {
          [GNumber.Singular]: {
            [Gender.Masculine]: '-йому',
            [Gender.Feminine]: '-їй',
            [Gender.Neuter]: '-йому',
          }[g],
          [GNumber.Plural]: '-їх',
        }[n],
        [Case.Vocative]: {
          [GNumber.Singular]: {
            [Gender.Masculine]: '',
            [Gender.Feminine]: '',
            [Gender.Neuter]: '',
          }[g],
          [GNumber.Plural]: '',
        }[n],
      }[c],
      [Declension.Mixed]: {
        [Case.Nominative]: {
          [GNumber.Singular]: {
            [Gender.Masculine]: '-лиций',
            [Gender.Feminine]: '-лиця',
            [Gender.Neuter]: '-лице',
          }[g],
          [GNumber.Plural]: '-лиці',
        }[n],
        [Case.Genitive]: {
          [GNumber.Singular]: {
            [Gender.Masculine]: '-лицього',
            [Gender.Feminine]: '-лицьої',
            [Gender.Neuter]: '-лицього',
          }[g],
          [GNumber.Plural]: '-лицих',
        }[n],
        [Case.Dative]: {
          [GNumber.Singular]: {
            [Gender.Masculine]: '-лицьому',
            [Gender.Feminine]: '-лицій',
            [Gender.Neuter]: '-лицьому',
          }[g],
          [GNumber.Plural]: '-лицим',
        }[n],
        [Case.Accusative]: {
          [GNumber.Singular]: {
            [Gender.Masculine]: '-лицього',
            [Gender.Feminine]: '-лицю',
            [Gender.Neuter]: '-лице',
          }[g],
          [GNumber.Plural]: '-лицих',
        }[n],
        [Case.Instrumental]: {
          [GNumber.Singular]: {
            [Gender.Masculine]: '-лицим',
            [Gender.Feminine]: '-лицьою',
            [Gender.Neuter]: '-лицим',
          }[g],
          [GNumber.Plural]: '-лицими',
        }[n],
        [Case.Locative]: {
          [GNumber.Singular]: {
            [Gender.Masculine]: '-лицьому',
            [Gender.Feminine]: '-лицій',
            [Gender.Neuter]: '-лицьому',
          }[g],
          [GNumber.Plural]: '-лицих',
        }[n],
        [Case.Vocative]: {
          [GNumber.Singular]: {
            [Gender.Masculine]: '',
            [Gender.Feminine]: '',
            [Gender.Neuter]: '',
          }[g],
          [GNumber.Plural]: '',
        }[n],
      }[c],
    }[this.#declension]!.replace('-', '')
  }

  #root: string
  #declension: Declension 

  constructor(nominative: string) {
    super()
    this.#root = nominative.substring(0, nominative.length - 2)

    if (nominative.endsWith('ий')) {
      this.#declension = Declension.Hard
    } else if (nominative.endsWith('ій')) {
      this.#declension = Declension.Soft
    } else if (nominative.endsWith('їй')) {
      this.#declension = Declension.Soft2
    } else {
      this.#root = nominative.substring(0, nominative.length - 5)
      this.#declension = Declension.Mixed
    }
  }

  get(i: number, gender: Gender): string {
    if (i > 10 && i < 20) return this.agree(Case.Genitive | GNumber.Plural | gender)
    switch (i % 10) {
      case 0: return this.agree(Case.Genitive | GNumber.Plural | gender)
      case 1: return this.agree(Case.Nominative | GNumber.Singular | gender)
      case 2:
      case 3:
      case 4: return this.agree(Case.Nominative | GNumber.Plural | gender)
      case 5:
      case 6:
      case 7:
      case 8:
      case 9: return this.agree(Case.Genitive | GNumber.Plural | gender)
      default: return this.agree(Case.Genitive | GNumber.Plural | gender)
    }
  }
}
