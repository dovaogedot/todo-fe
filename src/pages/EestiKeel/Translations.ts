// import * as Etg from './Estonian/Estonian'
// import * as Uag from './Ukrainian/Ukrainian'

// import * as Et from './Estonian/Vocabulary'
// import * as Ua from './Ukrainian/Vocabulary'

// enum Tag {
//   color, home, physical, abstract, location
// }

// const nouns: { et: Etg.Noun, ua: Uag.Word, tags: Tag[] }[] = [
//   {
//     et: Et.nouns.prügikast,
//     ua: new Uag.Combined([Ua.nouns.корзина, Ua.junctions.для, Ua.nouns.сміття.freeze(Uag.Case.Genitive)]),
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.raamat,
//     ua: Ua.nouns.книга,
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.laud,
//     ua: Ua.nouns.стіл,
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.aken,
//     ua: Ua.nouns.вікно,
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.sein,
//     ua: Ua.nouns.стіна,
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.lamp,
//     ua: Ua.nouns.лампа,
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.lagi,
//     ua: Ua.nouns.стеля,
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.kardin,
//     ua: Ua.nouns.фіранка,
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.lill,
//     ua: Ua.nouns.квітка,
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.riiul,
//     ua: Ua.nouns.полиця,
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.keskus,
//     ua: Ua.nouns.центр,
//     tags: [Tag.abstract, Tag.location]
//   }, {
//     et: Et.nouns.plakat,
//     ua: Ua.nouns.плакат,
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.kitarr,
//     ua: Ua.nouns.гітара,
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.põrand,
//     ua: Ua.nouns.підлога,
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.vaip,
//     ua: Ua.nouns.килим,
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.voodi,
//     ua: Ua.nouns.ліжко,
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.padi,
//     ua: Ua.nouns.подушка,
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.tekk,
//     ua: Ua.nouns.ковдра,
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.põrand,
//     ua: Ua.nouns.підлога,
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.lina,
//     ua: Ua.nouns.скатертина,
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.tool,
//     ua: Ua.nouns.стілець,
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.arvuti,
//     ua: Ua.nouns.компютер,
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.kast,
//     ua: Ua.nouns.корзина,
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.nagi,
//     ua: Ua.nouns.вішалка,
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.kapp,
//     ua: Ua.nouns.шафа,
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.peegel,
//     ua: Ua.nouns.дзеркало,
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.uks,
//     ua: Ua.nouns.двері,
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.tumba,
//     ua: Ua.nouns.пуф,
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.õpik,
//     ua: Ua.nouns.підручник,
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.prügi,
//     ua: Ua.nouns.сміття,
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.seinalamp,
//     ua: Ua.nouns.бра,
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.põrandalamp,
//     ua: Ua.nouns.торшер,
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.laelamp,
//     ua: Ua.nouns.люстра,
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.taskulamp,
//     ua: Ua.nouns.ліхтарик,
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.laualamp,
//     ua: new Uag.Combined([Ua.adjectives.настільний, Ua.nouns.лампа]),
//     tags: [Tag.home, Tag.physical]
//   }, {
//     et: Et.nouns.muusikakeskus,
//     ua: new Uag.Combined([Ua.adjectives.музикальний, Ua.nouns.центр]),
//     tags: [Tag.home, Tag.physical]
//   }
// ]

// const adjectives: { et: Etg.Adjective, ua: Uag.Adjective, tags: Tag[] }[] = [
//   {
//     et: Et.adjectives.valge,
//     ua: Ua.adjectives.білий,
//     tags: [Tag.color]
//   }, {
//     et: Et.adjectives.must,
//     ua: Ua.adjectives.чорний,
//     tags: [Tag.color]
//   }, {
//     et: Et.adjectives.punane,
//     ua: Ua.adjectives.червоний,
//     tags: [Tag.color]
//   }, {
//     et: Et.adjectives.roheline,
//     ua: Ua.adjectives.зелений,
//     tags: [Tag.color]
//   }, {
//     et: Et.adjectives.sinine,
//     ua: Ua.adjectives.синій,
//     tags: [Tag.color]
//   }, {
//     et: Et.adjectives.oranž,
//     ua: Ua.adjectives.помаранчевий,
//     tags: [Tag.color]
//   }, {
//     et: Et.adjectives.kollane,
//     ua: Ua.adjectives.жовтий,
//     tags: [Tag.color]
//   }, {
//     et: Et.adjectives.lilla,
//     ua: Ua.adjectives.фіолетовий,
//     tags: [Tag.color]
//   }, {
//     et: Et.adjectives.hall,
//     ua: Ua.adjectives.сірий,
//     tags: [Tag.color]
//   }, {
//     et: Et.adjectives.hõbedane,
//     ua: Ua.adjectives.срібний,
//     tags: [Tag.color]
//   }, {
//     et: Et.adjectives.beež,
//     ua: Ua.adjectives.бежевий,
//     tags: [Tag.color]
//   }, {
//     et: Et.adjectives.pruuni,
//     ua: Ua.adjectives.коричневий,
//     tags: [Tag.color]
//   }, {
//     et: Et.adjectives.kuldne,
//     ua: Ua.adjectives.золотий,
//     tags: [Tag.color]
//   }, {
//     et: Et.adjectives.roosa,
//     ua: Ua.adjectives.рожевий,
//     tags: [Tag.color]
//   }, {
//     et: Et.adjectives.hele,
//     ua: Ua.adjectives.світлий,
//     tags: [Tag.color]
//   }, {
//     et: Et.adjectives.tume,
//     ua: Ua.adjectives.темний,
//     tags: [Tag.color]
//   },
// ]

// export { Tag, nouns, adjectives }

// /*
// // @ts-ignore
// function translate(word, src, dest) {
//   function decipher(code: string) {
//     return code.split(',').map(p => {
//       const word = `select word from Word where id=${p_id}`
//       if (p.endsWith('?')) {
//         return new Word[dest](word)
//       } else if (p.endsWith('!')) {
//         const casee = `select word from Declension where id = ${p} `
//         return new Word[dest](word).freeze(casee)
//       } else {
//         return new Word[dest](word)
//       }
//     }).join(' ')
//   }

//   return decipher(`select id_word_${dest} from Translation where id_word_${src}=(select id from Word where word = ${word})`)
// }
// */