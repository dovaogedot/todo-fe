// @ts-nocheck

const _Number = [
  'Singular',
  'Plural',
] as const
export type Number = typeof _Number[number]
export const Number: { readonly [a in Number]: a }

const _Gender = [
  'Masculine',
  'Feminine',
  'Neuter',
] as const
export type Gender = typeof _Gender[number]
export const Gender: { readonly [a in Gender]: a }

const _Case = [
  'Називний',
  'Родовий',
  'Давальний',
  'Знахідний',
  'Орудний',
  'Місцевий',
  'Кличний',
] as const
export type Case = typeof _Case[number]
export const Case: { readonly [a in Case]: a }

const _DeclensionType = [
  'Hard',
  'Soft',
  'Soft2',
  'Mixed',
] as const
export type DeclensionType = typeof _DeclensionType[number]
export const DeclensionType: { readonly [a in DeclensionType]: a }

export type Declension = {
  case?: Case,
  number?: Number,
  gender?: Gender,
}

export type Declinable = {
  decline: (d: Declension) => string
}

export function freeze(declinable: Declinable, declension: Declension): Declinable {
  const word: string = declinable.decline(declension)
  return { decline: _ => word }
}