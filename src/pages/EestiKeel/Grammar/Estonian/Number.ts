import * as Gr from "./Grammar"
import { Noun } from "./Noun"

function Cardinal(): Gr.Declinable {
  function decline(declension: Gr.Declension): string {
    throw Error('not implemented')
  }

  return { decline }
}