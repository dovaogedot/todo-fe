import _ from "underscore"

type Gender = 'm' | 'f' | 'n'

class EtWord {
  constructor(public nime: string, public oma: string, public osa: string) { }

  num(i: number): string {
    return i == 1 ? this.nime : this.osa
  }
}

function uaNumber(i: number, g: Gender): string {
  let result = 'нуль'
  if (i < 10) {
    switch (i) {
      case 1: result = 'один'; break
      case 2: result = 'два'; break
      case 3: result = 'три'; break
      case 4: result = 'чотири'; break
      case 5: result = 'п\'ять'; break
      case 6: result = 'шість'; break
      case 7: result = 'сім'; break
      case 8: result = 'вісім'; break
      case 9: result = 'дев\'ять'; break
      default: result = `${i}`
    }
    return {
      'm': result,
      'f': i == 1 ? 'одна' : i == 2 ? 'дві' : result,
      'n': i == 1 ? 'одне' : result
    }[g]
  } else if (i < 100) {
    switch (Math.floor(i / 10)) {
      case 1: result = 'десять'; break
      case 2: result = 'двадцять'; break
      case 3: result = 'тридцять'; break
      case 4: result = 'сорок'; break
      case 5: result = 'п\'ятдесят'; break
      case 6: result = 'шістдесят'; break
      case 7: result = 'сімдесят'; break
      case 8: result = 'вісімдесят'; break
      case 9: result = 'дев\'яносто'; break
      default: result = `${i}`
    }
    return result + ' ' + uaNumber(i % 10, g)
  } else {
    return `${i}`
  }
}

function etNumber(i: number): string {
  let result = 'нуль'
  if (i < 10) {
    switch (i) {
      case 1: result = 'üks'; break
      case 2: result = 'kaks'; break
      case 3: result = 'kolm'; break
      case 4: result = 'neli'; break
      case 5: result = 'viis'; break
      case 6: result = 'kuus'; break
      case 7: result = 'seitse'; break
      case 8: result = 'kaheksa'; break
      case 9: result = 'üheksa'; break
      default: result = `${i}`
    }
    return result
  } else if (i < 100) {
    switch (Math.floor(i / 10)) {
      case 1: result = 'kümme'; break
      case 2: result = 'kakskümmend'; break
      case 3: result = 'kolmkümmend'; break
      case 4: result = 'nelikümmend'; break
      case 5: result = 'viiskümmend'; break
      case 6: result = 'kuuskümmend'; break
      case 7: result = 'seitsekümmend'; break
      case 8: result = 'kaheksakümmend'; break
      case 9: result = 'üheksakümmend'; break
      default: result = `${i}`
    }
    return result + ' ' + etNumber(i % 10)
  } else {
    return `${i}`
  }
}

class UaAdj {
  constructor(private ones: { m: string, f: string, n: string }, private two: string, private five: string) {}

  num(i: number, gender: Gender): string {
    switch (i % 10) {
      case 1: return this.ones[gender]
      case 2:
      case 3:
      case 4: return this.two
      case 5:
      case 6:
      case 7:
      case 8:
      case 9: return this.five
      default: return this.ones[gender]
    }
  }
}

class UaNoun {
  constructor(private one: string, private two: string, private five: string, public gender: Gender) {}
  
  num(i: number): string {
    switch (i % 10) {
      case 1: return this.one
      case 2:
      case 3:
      case 4: return this.two
      case 5:
      case 6:
      case 7:
      case 8:
      case 9: return this.five
      default: return this.one
    }
  }
}

type Vocabulary<UaWord> = {
  et: EtWord,
  ua: UaWord,
}[]


const nouns: Vocabulary<UaNoun> = [
  { 
    et: new EtWord('raamat', 'raamatu', 'raamatut'),
    ua: new UaNoun('книжка', 'книжки', 'книжок', 'f'),
  }, {
    et: new EtWord('laud', 'laua', 'lauda'),
    ua: new UaNoun('стіл', 'столи', 'столів', 'm'),
  }, {
    et: new EtWord('aken', 'akna', 'akent'),
    ua: new UaNoun('вікно', 'вікна', 'вікон', 'n'),
  }
]

const adjectives: Vocabulary<UaAdj> = [
  {
    et: new EtWord('punane', 'punase', 'punast'),
    ua: new UaAdj({'m': 'червоний', 'f': 'червона', 'n': 'червоне'}, 'червоні', 'червоних'),
  }, {
    et: new EtWord('roheline', 'rohelise', 'rohelist'),
    ua: new UaAdj({'m': 'зелений', 'f': 'зелена', 'n': 'зелене'}, 'зелені', 'зелених'),
  }
]
type Token = EtWord | UaNoun | UaAdj | string
type Sentence = Token[]
type Exercise = {
  et: Sentence,
  ua: Sentence,
}


function generateRandomItems(): Exercise {
  const noun = _.sample(nouns)!
  const adj = _.sample(adjectives)!
  const number = _.random(1, 99)

  const et: string[] = [etNumber(number), adj.et.num(number), noun.et.num(number)]
  const ua = [uaNumber(number, noun.ua.gender), adj.ua.num(number, noun.ua.gender), noun.ua.num(number)]

  return { et, ua }
}


export { generateRandomItems }
export type { Sentence, Exercise }