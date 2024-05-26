export enum Case {
  Nimetav = 0,
  Omastav = 1 << 1,
  Osastav = 1 << 2,
  Luhike = 1 << 3,
  Sisseutlev = 1 << 4,
  Seesutlev = 1 << 5,
  Seestutlev = 1 << 6,
  Alaleutlev = 1 << 7,
  Alalutlev = 1 << 8,
  Alaltutlev = 1 << 9,
  Saav = 1 << 10,
  Rajav = 1 << 11,
  Olev = 1 << 12,
  Ilmautlev = 1 << 13,
  Kaasautlev = 1 << 14,
}

export enum GNumber {
  Singular = 1 << 15,
  Plural = 1 << 16,
}

export abstract class Word {
  abstract agree(query: Case | GNumber): string
}