import { Declension, Declinable } from "./Grammar"

export function CombinedNoun(first: string, last: Declinable): Declinable {
  return { 
    decline: (d: Declension): string => first + last.decline(d)
  }
}
