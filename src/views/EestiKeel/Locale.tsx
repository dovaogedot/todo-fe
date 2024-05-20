import { useContext } from "react"
import { createContext } from "vm"

type Lang = 'ua' | 'et' | 'ru'

class Locale {
  #lang: Lang = 'ua'

  constructor(lang: Lang = 'ua') {
    this.set(lang)
  }

  set(lang: Lang) {
    this.#lang = lang
  }

  get answerButton() {
    return {
      'ua': 'Показати',
      'et': 'Vaata',
      'ru': 'Показать',
    }[this.#lang]
  }

  get answerPlaceholder() {
    return {
      'ua': 'Перевірити',
      'et': 'Perevirõtõ',
      'ru': 'Проверить',
    }[this.#lang]
  }

  get switchLanguages() {
    return {
      'ua': 'Поміняти мови',
      'et': 'Pominjatõ keeled',
      'ru': 'Поменять языки',
    }[this.#lang]
  }
}

const locale = new Locale()

export default locale
export type { Lang }