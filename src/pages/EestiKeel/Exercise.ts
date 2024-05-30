import _ from "underscore"
import * as Et from "./Estonian/Estonian"
import * as Ua from "./Ukrainian/Ukrainian"
import { Tag, nouns, adjectives } from "./Translations"
import { ExecException } from "child_process"

type Exercise = {
  et: string
  ua: string
}

/**
 * Makes the first letter of the string uppercase.
 * 
 * @param s - Input string
 * @returns Input string with uppercase first letter 
 */
const up = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

/**
 * Generates a statement consisting of an cardinal number, an adjective and a noun.
 * 
 * @returns `Exercise` object
 * @see {@link Exercise | Exercise}
 */
function cardinalStatement(): Exercise {
  const noun = _.sample(nouns)!
  const et_noun = noun.et
  const ua_noun = noun.ua

  const adj = _.sample(adjectives)!
  const et_adj = adj.et
  const ua_adj = adj.ua

  const num = _.random(1, 99)
  const et_num = Et.Cardinal.get(num)
  const ua_num = Ua.Cardinal.get(num, ua_noun.gender!)

  const et = [
    et_num,
    Et.Cardinal.agree(num, et_adj),
    Et.Cardinal.agree(num, et_noun)
  ].join(' ')

  const ua = [
    ua_num,
    Ua.Cardinal.agree(num, ua_adj, ua_noun.gender!),
    Ua.Cardinal.agree(num, ua_noun, ua_noun.gender!)
  ].join(' ')

  return { et: up(et), ua: up(ua) }
}

function ordinalStatement(): Exercise {
  throw new Error('Not implemented')
}

export { cardinalStatement }
export type { Exercise }
