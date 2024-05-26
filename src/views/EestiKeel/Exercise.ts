import _ from "underscore"
import * as Et from "./Estonian/Estonian"
import * as Ua from "./Ukrainian/Ukrainian"
import { Tag, nouns, adjectives } from "./Translations"

type Exercise = {
  et: string
  ua: string
}

const up = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

function simpleStatement(): Exercise {
  const noun = _.sample(nouns)!
  const et_noun = noun.et
  const ua_noun = noun.ua

  const adj = _.sample(adjectives)!
  const et_adj = adj.et
  const ua_adj = adj.ua

  const num = _.random(1, 99)
  const et_num = Et.Number.get(num)
  const ua_num = Ua.Number.get(num, ua_noun.gender!)

  const et = [
    et_num,
    Et.Number.agree(num, et_adj),
    Et.Number.agree(num, et_noun)
  ].join(' ')

  const ua = [
    ua_num,
    Ua.Number.agree(num, ua_adj, ua_noun.gender!),
    Ua.Number.agree(num, ua_noun, ua_noun.gender!)
  ].join(' ')

  return { et: up(et), ua: up(ua) }
}

export { simpleStatement }
export type { Exercise }
