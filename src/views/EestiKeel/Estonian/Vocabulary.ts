import * as Et from "./Estonian"

export const junctions = {
  ja: new Et.Junction('ja'),
  jaoks: new Et.Junction('jaoks'),
}

const simplenouns = {
  raamat: new Et.Noun({ nime: 'raamat', oma: 'raamatu', osa: 'raamatut' }),
  laud: new Et.Noun({ nime: 'laud', oma: 'laua', osa: 'lauda' }),
  aken: new Et.Noun({ nime: 'aken', oma: 'akna', osa: 'akent' }),
  sein: new Et.Noun({ nime: 'sein', oma: 'seina', osa: 'seina' }),
  lamp: new Et.Noun({ nime: 'lamp', oma: 'lambi', osa: 'lampi' }),
  lagi: new Et.Noun({ nime: 'lagi', oma: 'lae', osa: 'lage' }),
  kardin: new Et.Noun({ nime: 'kardin', oma: 'kardina', osa: 'kardinat' }),
  lill: new Et.Noun({ nime: 'lill', oma: 'lille', osa: 'lille' }),
  riiul: new Et.Noun({ nime: 'riiul', oma: 'riiuli', osa: 'riiulit' }),
  keskus: new Et.Noun({ nime: 'keskus', oma: 'keskuse', osa: 'keskust' }),
  plakat: new Et.Noun({ nime: 'plakat', oma: 'plakati', osa: 'plakatit' }),
  kitarr: new Et.Noun({ nime: 'kitarr', oma: 'kitarri', osa: 'kitarri' }),
  põrand: new Et.Noun({ nime: 'põrand', oma: 'põranda', osa: 'põrandat' }),
  vaip: new Et.Noun({ nime: 'vaip', oma: 'vaiba', osa: 'vaipa' }),
  voodi: new Et.Noun({ nime: 'voodi', oma: 'voodi', osa: 'voodit' }),
  padi: new Et.Noun({ nime: 'padi', oma: 'padja', osa: 'patja' }),
  tekk: new Et.Noun({ nime: 'tekk', oma: 'teki', osa: 'tekki' }),
  lina: new Et.Noun({ nime: 'lina', oma: 'lina', osa: 'lina' }),
  tool: new Et.Noun({ nime: 'tool', oma: 'tooli', osa: 'tooli' }),
  arvuti: new Et.Noun({ nime: 'arvuti', oma: 'arvuti', osa: 'arvutit' }),
  kast: new Et.Noun({ nime: 'kast', oma: 'kasti', osa: 'kasti' }),
  nagi: new Et.Noun({ nime: 'nagi', oma: 'nagi', osa: 'nagi' }),
  kapp: new Et.Noun({ nime: 'kapp', oma: 'kapi', osa: 'kappi' }),
  peegel: new Et.Noun({ nime: 'peegel', oma: 'peegli', osa: 'peeglit' }),
  uks: new Et.Noun({ nime: 'uks', oma: 'ukse', osa: 'ust' }),
  tumba: new Et.Noun({ nime: 'tumba', oma: 'tumba', osa: 'tumbat' }),
  õpik: new Et.Noun({ nime: 'õpik', oma: 'õpiku', osa: 'õpikut' }),
  prügi: new Et.Noun({ nime: 'prügi' }),
}

const combinednouns = {
  muusikakeskus: new Et.CombinedNoun('muusika', simplenouns.keskus),
  prügikast: new Et.CombinedNoun('prügi', simplenouns.kast),
  laelamp: new Et.CombinedNoun('lae', simplenouns.lamp),
  seinalamp: new Et.CombinedNoun('seina', simplenouns.lamp),
  laualamp: new Et.CombinedNoun('laua', simplenouns.lamp),
  põrandalamp: new Et.CombinedNoun('põranda', simplenouns.lamp),
  taskulamp: new Et.CombinedNoun('tasku', simplenouns.lamp),
}

export const nouns = {
  ...simplenouns,
  ...combinednouns,
}

export const adjectives = {
  punane: new Et.Adjective({ nime: 'punane' }),
  roheline: new Et.Adjective({ nime: 'roheline' }),
  sinine: new Et.Adjective({ nime: 'sinine' }),
  valge: new Et.Adjective({ nime: 'valge', oma: 'valge', osa: 'valget' }),
  must: new Et.Adjective({ nime: 'must', oma: 'musta', osa: 'musta' }),
  oranž: new Et.Adjective({ nime: 'oranž', oma: 'oranži', osa: 'oranži' }),
  kollane: new Et.Adjective({ nime: 'kollane' }),
  lilla: new Et.Adjective({ nime: 'lilla', oma: 'lilla', osa: 'lillat' }),
  hall: new Et.Adjective({ nime: 'hall', oma: 'halli', osa: 'halli' }),
  hõbedane: new Et.Adjective({ nime: 'hõbedane' }),
  beež: new Et.Adjective({ nime: 'beež', oma: 'beeži', osa: 'beeži' }),
  pruuni: new Et.Adjective({ nime: 'pruun', oma: 'pruuni', osa: 'pruuni' }),
  kuldne: new Et.Adjective({ nime: 'kuldne', osa: 'kuldset' }),
  roosa: new Et.Adjective({ nime: 'roosa', oma: 'roosa', osa: 'roosat' }),
  hele: new Et.Adjective({ nime: 'hele', oma: 'heleda', osa: 'heledat' }),
  tume: new Et.Adjective({ nime: 'tume', oma: 'tumeda', osa: 'tumedat' }),
}