import { Noun } from "../Noun"
import * as Gr from "../Grammar"
import { CombinedNoun } from "../CombinedNoun"


describe('noun', () => {
  describe('guesses', () => {
    const laud = Noun({ Nimetav: { Singular: 'laud' } })
    const naine = Noun({ Nimetav: { Singular: 'naine' } })
    const kapp = Noun({ Nimetav: { Singular: 'kapp' } })

    test('omastav', () => {
      expect(laud.decline({ case: Gr.Case.Omastav })).toBe('laua')
      expect(naine.decline({ case: Gr.Case.Omastav })).toBe('naise')
      expect(kapp.decline({ case: Gr.Case.Omastav })).toBe('kapp')
    })

    test('osastav', () => {
      expect(laud.decline({ case: Gr.Case.Osastav })).toBe('lauda')
      expect(naine.decline({ case: Gr.Case.Osastav })).toBe('naist')
      expect(kapp.decline({ case: Gr.Case.Osastav })).toBe('kapp')
    })

    test('plural omastav', () => {
      expect(laud.decline({ case: Gr.Case.Omastav, number: Gr.Number.Plural })).toBe('laudade')
      expect(naine.decline({ case: Gr.Case.Omastav, number: Gr.Number.Plural })).toBe('naiste')
    })

    test('plural osastav', () => {
      expect(laud.decline({ case: Gr.Case.Osastav, number: Gr.Number.Plural })).toBe('laudasid')
    })
  })

  test('freezes', () => {
    const laud = Noun({ Nimetav: { Singular: 'laud' } })
    const frozen = Gr.freeze(laud, { case: Gr.Case.Omastav })

    Object.keys(Gr.Case).forEach(c => {
      expect(frozen.decline({ case: c as Gr.Case })).toBe('laua')
    })
  })

  test('overrides', () => {
    const laud = Noun({
      Nimetav: { Singular: 'laud' },
      Omastav: { Plural: 'punane' },
      Alaleütlev: { Plural: 'hiir' },
    })

    expect(laud.decline({ number: Gr.Number.Singular })).toBe('laud')
    expect(laud.decline({ number: Gr.Number.Plural })).toBe('lauad')
    expect(laud.decline({ case: Gr.Case.Omastav, number: Gr.Number.Plural })).toBe('punane')
    expect(laud.decline({ case: Gr.Case.Rajav, number: Gr.Number.Plural })).toBe('punaneni')
    expect(laud.decline({ case: Gr.Case.Alaleütlev, number: Gr.Number.Plural })).toBe('hiir')
    expect(laud.decline({ case: Gr.Case.Alaleütlev, number: Gr.Number.Singular })).toBe('lauale')
    expect(laud.decline({ case: Gr.Case.Sisseütlev, number: Gr.Number.Singular })).toBe('lauasse')

    const laud2 = Noun({
      Nimetav: { Singular: 'laud' },
      Lühike: { Singular: 'vesi', Plural: 'vesi' }
    })
  
    expect(laud2.decline({ case: Gr.Case.Sisseütlev })).toBe('vesi')
  })

  test('combined', () => {
    const lane = Noun({ Nimetav: { Singular: 'lane' } })
    const noun = CombinedNoun('õpi', lane)

    expect(noun.decline({ case: Gr.Case.Omastav })).toBe('õpilase')
    expect(noun.decline({ case: Gr.Case.Osastav })).toBe('õpilast')
    expect(noun.decline({ case: Gr.Case.Sisseütlev, number: Gr.Number.Plural })).toBe('õpilastesse')
  })
})