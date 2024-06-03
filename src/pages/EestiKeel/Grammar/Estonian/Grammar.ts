const _Case = [
  'Nimetav',
  'Omastav',
  'Osastav',
  'Lühike',
  'Sisseütlev',
  'Seesütlev',
  'Seestütlev',
  'Alaleütlev',
  'Alalütlev',
  'Alaltütlev',
  'Saav',
  'Rajav',
  'Olev',
  'Ilmaütlev',
  'Kaasaütlev',
] as const
export type Case = typeof _Case[number]
export const Case = Object.fromEntries(_Case.map(k => { return [k, k] })) as { readonly [a in Case]: a }

const _Number = [
  'Singular',
  'Plural',
] as const
export type Number = typeof _Number[number]
export const Number = Object.fromEntries(_Number.map(k => { return [k, k] })) as { readonly [a in Number]: a }

export type Declension = {
  case?: Case,
  number?: Number,
}

export type Declinable = {
  decline: (d: Declension) => string
}

export function freeze(declinable: Declinable, declension: Declension): Declinable {
  const word: string = declinable.decline(declension)
  return { decline: _ => word }
}