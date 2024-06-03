import * as Gr from "./Grammar"

type WithOptionalProperties<T> = { [a in keyof T]?: T[a] }
type WithPropertyType<T, K> = { [a in keyof T]: K }

/**
 * @see {@link CaseOverrides}
 */
type NumberOverrides = WithPropertyType<
  WithOptionalProperties<typeof Gr.Number>,
  string>

/**
 * Exceptions from case forming rules.
 * - Nimetav is necessary to provide. 
 * - Omastav and Osastav (both Plural and Singular) should be provided.
 * - others will follow default rules.
 */
type CaseOverrides = WithOptionalProperties<WithPropertyType<typeof Gr.Case, NumberOverrides>>
  & {
    Nimetav: {
      Singular: string
      Plural?: string
    }
  }

const endings: { readonly [a in Gr.Case]: string } = {
  [Gr.Case.Nimetav]: '',
  [Gr.Case.Omastav]: '',
  [Gr.Case.Osastav]: '',
  [Gr.Case.Lühike]: '',
  [Gr.Case.Sisseütlev]: 'sse',
  [Gr.Case.Seesütlev]: 's',
  [Gr.Case.Seestütlev]: 'st',
  [Gr.Case.Alaleütlev]: 'le',
  [Gr.Case.Alalütlev]: 'l',
  [Gr.Case.Alaltütlev]: 'lt',
  [Gr.Case.Saav]: 'ks',
  [Gr.Case.Rajav]: 'ni',
  [Gr.Case.Olev]: 'na',
  [Gr.Case.Ilmaütlev]: 'ta',
  [Gr.Case.Kaasaütlev]: 'ga',
}

function guessOmastav(nimetav: string) {
  if (nimetav.endsWith('ne'))
    return nimetav.slice(0, -2) + 'se'
  if (nimetav.endsWith('aud'))
    return nimetav.slice(0, -3) + 'aua'
  return nimetav
}

function guessOsastav(nimetav: string) {
  if (nimetav.endsWith('ne'))
    return nimetav.slice(0, -2) + 'st'
  if (nimetav.endsWith('aud'))
    return nimetav.slice(0, -3) + 'auda'
  return nimetav
}

function guessPluralOmastav(osastav: string) {
  if (osastav.endsWith('t') || osastav.endsWith('d'))
    return osastav + 'e'
  return osastav + 'de'
}

function guessPluralOsastav(osastav: string) {
  return osastav + 'sid'
}


export function Noun(overrides: CaseOverrides): Gr.Declinable {
  
  const singular = (c: Gr.Case): string => {
    switch (c) {
      case Gr.Case.Nimetav:
        return overrides.Nimetav.Singular
      case Gr.Case.Omastav:
        return overrides.Omastav?.Singular ?? guessOmastav(overrides.Nimetav.Singular)
      case Gr.Case.Osastav:
        return overrides.Osastav?.Singular ?? guessOsastav(overrides.Nimetav.Singular)
      case Gr.Case.Sisseütlev:
        return overrides.Lühike?.Singular ?? singular(Gr.Case.Omastav) + endings[c]
      default:
        return overrides[c]?.Singular ?? singular(Gr.Case.Omastav) + endings[c]
    }
  }

  const plural = (c: Gr.Case): string => {
    switch (c) {
      case Gr.Case.Nimetav:
        return overrides.Nimetav.Plural ?? singular(Gr.Case.Omastav) + 'd'
      case Gr.Case.Omastav:
        return overrides.Omastav?.Plural ?? guessPluralOmastav(singular(Gr.Case.Osastav))
      case Gr.Case.Osastav:
        return overrides.Osastav?.Plural ?? guessPluralOsastav(singular(Gr.Case.Osastav))
      default:
        return overrides[c]?.Plural ?? plural(Gr.Case.Omastav) + endings[c]
    }
  }

  const _decline = (n: Gr.Number): (c: Gr.Case) => string => {
    switch (n) {
      case Gr.Number.Singular: return singular
      case Gr.Number.Plural: return plural
    }
  }

  function decline(declension: Gr.Declension): string {
    const c: Gr.Case = declension.case ?? Gr.Case.Nimetav
    const n: Gr.Number = declension.number ?? Gr.Number.Singular
    return _decline(n)(c)
  }

  return { decline }
}