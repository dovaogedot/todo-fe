import { Word as EtWord } from './Estonian/Estonian'
import { Word as UaWord, Combined, Case } from './Ukrainian/Ukrainian'

import * as Et from './Estonian/Vocabulary'
import * as Ua from './Ukrainian/Vocabulary'

enum Tag {
  noun, adjective, verb, color, home
}

const translations: { et: EtWord, ua: UaWord, tags: Tag[] }[] = [
  {
    et: Et.nouns.prügikast,
    ua: new Combined([Ua.nouns.корзина, Ua.junctions.для, Ua.nouns.сміття.freeze(Case.Genitive)]),
    tags: [Tag.noun, Tag.home]
  }, {
    et: Et.nouns.raamat,
    ua: Ua.nouns.книга,
    tags: [Tag.noun, Tag.home]
  }, {
    et: Et.nouns.laud,
    ua: Ua.nouns.стіл,
    tags: [Tag.noun, Tag.home]
  }, {
    et: Et.adjectives.valge,
    ua: Ua.adjectives.білий,
    tags: [Tag.adjective, Tag.color]
  }, {
    et: Et.adjectives.must,
    ua: Ua.adjectives.чорний,
    tags: [Tag.adjective, Tag.color]
  }
]

export { Tag, translations }

/*
// @ts-ignore
function translate(word, src, dest) {
  function decipher(code: string) {
    return code.split(',').map(p => {
      const word = `select word from Word where id=${p_id}`
      if (p.endsWith('?')) {
        return new Word[dest](word)
      } else if (p.endsWith('!')) {
        const casee = `select word from Declension where id = ${p} `
        return new Word[dest](word).freeze(casee)
      } else {
        return new Word[dest](word)
      }
    }).join(' ')
  }

  return decipher(`select id_word_${dest} from Translation where id_word_${src}=(select id from Word where word = ${word})`)
}
*/