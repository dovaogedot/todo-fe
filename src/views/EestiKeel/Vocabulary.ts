import _ from "underscore"
import * as Et from "./Estonian/Estonian"
import * as Ua from "./Ukrainian/Ukrainian"

const nouns: { [a in string]: { et: Et.Noun, ua: Ua.Word }} = {
  book: {
    et: new Et.Noun({ nime: 'raamat', oma: 'raamatu', osa: 'raamatut' }),
    ua: new Ua.Noun([['книга', 'книги'], ['книги', 'книг'], ['книзі', 'книгам'], ['книгу', 'книги'], ['книгою', 'книгами'], ['книзі', 'книгах'], ['книго', 'книги']], Ua.Gender.Feminine),
  }, 
  table: {
    et: new Et.Noun({ nime: 'laud', oma: 'laua', osa: 'lauda' }),
    ua: new Ua.Noun([['стіл', 'столи'], ['стола', 'столів'], ['столу', 'столам'], ['стіл', 'столи'], ['столом', 'столами'], ['столі', 'столах'], ['столе', 'столи']], Ua.Gender.Masculine),
  },
  window: {
    et: new Et.Noun({ nime: 'aken', oma: 'akna', osa: 'akent' }),
    ua: new Ua.Noun([['вікно', 'вікна'], ['вікна', 'вікон'], ['вікну', 'вікнам'], ['вікно', 'вікна'], ['вікном', 'вікнами'], ['вікні', 'вікнах'], ['вікно', 'вікна']], Ua.Gender.Neuter),
  },
  wall: {
    et: new Et.Noun({ nime: 'sein', oma: 'seina', osa: 'seina' }),
    ua: new Ua.Noun([['стіна', 'стіни'], ['стіни', 'стін'], ['стіні', 'стінам'], ['стіну', 'стіни'], ['стіною', 'стінами'], ['стіні', 'стінах'], ['стіно', 'стіни']], Ua.Gender.Feminine),
  },
  lamp: {
    et: new Et.Noun({ nime: 'lamp', oma: 'lambi', osa: 'lampi' }),
    ua: new Ua.Noun([['лампа', 'лампи'], ['лампи', 'ламп'], ['лампі', 'лампам'], ['лампу', 'лампи'], ['лампою', 'лампами'], ['лампі', 'лампах'], ['лампо', 'лампи']], Ua.Gender.Feminine),
  },
  ceiling: {
    et: new Et.Noun({ nime: 'lagi', oma: 'lae', osa: 'lagi' }),
    ua: new Ua.Noun([['стеля', 'стелі'], ['стелі', 'стель'], ['стелі', 'стелям'], ['стелю', 'стелі'], ['стелею', 'стелями'], ['стелі', 'стелях'], ['стеле', 'стелі']], Ua.Gender.Feminine),
  },
  curtain: {
    et: new Et.Noun({ nime: 'kardin', oma: 'kardina', osa: 'kardinat' }),
    ua: new Ua.Noun([['фіранка', 'фіранки'], ['фіранки', 'фіранок'], ['фіранці', 'фіранкам'], ['фіранку', 'фіранки'], ['фіранкою', 'фіранками'], ['фіранці', 'фіранках'], ['фіранко', 'фіранки']], Ua.Gender.Feminine),
  },
  flower: {
    et: new Et.Noun({ nime: 'lill', oma: 'lille', osa: 'lille' }),
    ua: new Ua.Noun([['квітка', 'квітки'], ['квітки', 'квіток'], ['квітці', 'квіткам'], ['квітку', 'квітки'], ['квіткою', 'квітками'], ['квітці', 'квітках'], ['квітко', 'квітки']], Ua.Gender.Feminine),
  },
  shelf: {
    et: new Et.Noun({ nime: 'riiul', oma: 'riiuli', osa: 'riiulit' }),
    ua: new Ua.Noun([['полиця', 'полиці'], ['полиці', 'полиць'], ['полиці', 'полицям'], ['полицю', 'полиці'], ['полицею', 'полицями'], ['полиці', 'полицях'], ['полице', 'полиці']], Ua.Gender.Feminine),
  },
  center: {
    et: new Et.Noun({ nime: 'keskus', oma: 'keskuse', osa: 'keskust' }),
    ua: new Ua.Noun([['центр', 'центри'], ['центру', 'центрів'], ['центру', 'центрам'], ['центр', 'центри'], ['центром', 'центрами'], ['центрі', 'центрах'], ['центре', 'центри']], Ua.Gender.Masculine),
  },
  poster: {
    et: new Et.Noun({ nime: 'plakat', oma: 'plakati', osa: 'plakatit' }),
    ua: new Ua.Noun([['плакат', 'плакати'], ['плаката', 'плакатів'], ['плакату', 'плакатам'], ['плакат', 'плакати'], ['плакатом', 'плакатами'], ['плакаті', 'плакатах'], ['плакате', 'плакати']], Ua.Gender.Masculine),
  },
  guitar: {
    et: new Et.Noun({ nime: 'kitarr', oma: 'kitarri', osa: 'kitarri' }),
    ua: new Ua.Noun([['гітара', 'гітари'], ['гітари', 'гітар'], ['гітарі', 'гітарам'], ['гітару', 'гітари'], ['гітарою', 'гітарами'], ['гітарі', 'гітарах'], ['гітаро', 'гітари']], Ua.Gender.Feminine),
  },
  floor: {
    et: new Et.Noun({ nime: 'põrand', oma: 'põranda', osa: 'põrandat' }),
    ua: new Ua.Noun([['підлога', ''], ['підлоги', ''], ['підлозі', ''], ['підлогу', ''], ['підлогою', ''], ['підлозі', ''], ['підлого', '']], Ua.Gender.Feminine),
  },
  carpet: {
    et: new Et.Noun({ nime: 'vaip', oma: 'vaiba', osa: 'vaipa' }),
    ua: new Ua.Noun([['килим', 'килими'], ['килима', 'килимів'], ['килиму', 'килимам'], ['килим', 'килими'], ['килимом', 'килимами'], ['килимі', 'килимах'], ['килиме', 'килими']], Ua.Gender.Masculine ),
  },
  bed: {
    et: new Et.Noun({ nime: 'voodi', oma: 'voodi', osa: 'voodit' }),
    ua: new Ua.Noun([['ліжко', 'ліжка'], ['ліжка', 'ліжок'], ['ліжкові,ліжку', 'ліжкам'], ['ліжко', 'ліжка'], ['ліжком', 'ліжками'], ['ліжку', 'ліжках'], ['ліжко', 'ліжка']], Ua.Gender.Neuter),
  },
  pillow: {
    et: new Et.Noun({ nime: 'padi', oma: 'padja', osa: 'patja' }),
    ua: new Ua.Noun([['подушка', 'подушки'], ['подушки', 'подушок'], ['подушці', 'подушкам'], ['подушку', 'подушки'], ['подушкою', 'подушками'], ['подушці', 'подушках'], ['подушко', 'подушки']], Ua.Gender.Feminine),
  },
  blanket: {
    et: new Et.Noun({ nime: 'tekk', oma: 'teki', osa: 'tekki' }),
    ua: new Ua.Noun([['ковдра', 'ковдри'], ['ковдри', 'ковдр'], ['ковдрі', 'ковдрам'], ['ковдру', 'ковдри'], ['ковдрою', 'ковдрами'], ['ковдрі', 'ковдрах'], ['ковдро', 'ковдри']], Ua.Gender.Feminine),
  },
  tablecloth: {
    et: new Et.Noun({ nime: 'lina', oma: 'lina', osa: 'lina' }),
    ua: new Ua.Noun([['скатертина', 'скатертини'], ['скатертини', 'скатертин'], ['скатертині', 'скатертинам'], ['скатертину', 'скатертини'], ['скатертиною', 'скатертинами'], ['скатертині', 'скатертинах'], ['скатертино', 'скатертини']], Ua.Gender.Feminine),
  },
  chair: {
    et: new Et.Noun({ nime: 'tool', oma: 'tooli', osa: 'tooli' }),
    ua: new Ua.Noun([['стілець', 'стільці'], ['стільця', 'стільців'], ['стільцю', 'стільцям'], ['стілець', 'стільці'], ['стільцем', 'стільцями'], ['стільці', 'стільцях'], ['стільцю', 'стільці']], Ua.Gender.Masculine),
  },
  computer: {
    et: new Et.Noun({ nime: 'arvuti', oma: 'arvuti', osa: 'arvutit' }),
    ua: new Ua.Noun([['комп\'ютер', 'комп\'ютери'], ['комп\'ютера', 'комп\'ютерів'], ['комп\'ютерові,комп\'ютеру', 'комп\'ютерам'], ['комп\'ютер', 'комп\'ютери'], ['комп\'ютером', 'комп\'ютерами'], ['комп\'ютері', 'комп\'ютерах'], ['комп\'ютере', 'комп\'ютери']], Ua.Gender.Masculine),
  },
}

const adjectives: { et: Et.Adjective, ua: Ua.Adjective }[] = [
  {
    et: new Et.Adjective({ nime: 'punane' }),
    ua: new Ua.Adjective('червоний'),
  }, {
    et: new Et.Adjective({ nime: 'roheline' }),
    ua: new Ua.Adjective('зелений'),
  }, {
    et: new Et.Adjective({ nime: 'sinine' }),
    ua: new Ua.Adjective('синій'),
  }, {
    et: new Et.Adjective({ nime: 'valge', oma: 'valge', osa: 'valget' }),
    ua: new Ua.Adjective('білий'),
  }, {
    et: new Et.Adjective({ nime: 'must', oma: 'musta', osa: 'musta' }),
    ua: new Ua.Adjective('чорний'),
  }, {
    et: new Et.Adjective({ nime: 'oranž', oma: 'oranži', osa: 'oranži' }),
    ua: new Ua.Adjective('помаранчевий'),
  }, {
    et: new Et.Adjective({ nime: 'kollane' }),
    ua: new Ua.Adjective('жовтий'),
  }, {
    et: new Et.Adjective({ nime: 'lilla', oma: 'lilla', osa: 'lillat' }),
    ua: new Ua.Adjective('фіолетовий'),
  }, {
    et: new Et.Adjective({ nime: 'hall', oma: 'halli', osa: 'halli' }),
    ua: new Ua.Adjective('сірий'),
  }, {
    et: new Et.Adjective({ nime: 'hõbedane' }),
    ua: new Ua.Adjective('срібний'),
  }, {
    et: new Et.Adjective({ nime: 'beež', oma: 'beeži', osa: 'beeži' }),
    ua: new Ua.Adjective('бежевий'),
  }, {
    et: new Et.Adjective({ nime: 'pruun', oma: 'pruuni', osa: 'pruuni' }),
    ua: new Ua.Adjective('коричневий'),
  }, {
    et: new Et.Adjective({ nime: 'kuldne', osa: 'kuldset' }),
    ua: new Ua.Adjective('золотий'),
  }, {
    et: new Et.Adjective({ nime: 'roosa', oma: 'roosa', osa: 'roosat' }),
    ua: new Ua.Adjective('рожевий'),
  }, {
    et: new Et.Adjective({ nime: 'hele', oma: 'heleda', osa: 'heledat' }),
    ua: new Ua.Adjective('світлий'),
  }, {
    et: new Et.Adjective({ nime: 'tume', oma: 'tumeda', osa: 'tumedat' }),
    ua: new Ua.Adjective('темний'),
  },
]

type Exercise = {
  et: string,
  ua: string,
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