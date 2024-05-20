import { useEffect, useState } from "react"
import { Exercise, Sentence, generateRandomItems } from "./Vocabulary"


export default function EestiKeel() {
  const [enteredAnswer, setEnteredAnswer] = useState('')
  const [sentence, setSentence] = useState<Exercise>({ et: [], ua: []})

  useEffect(() => {
    doMore()
  }, [])

  function doMore() {
    setSentence(generateRandomItems())
    setEnteredAnswer('')
  }

  return (
    <div className="eestikeel flex-center flex-column">
      <div className="question">
        <span>{sentence.et.join(' ')}</span>
      </div>
      <div className="actions">
        <button onClick={() => setEnteredAnswer(sentence.ua.join(' '))}>{ enteredAnswer == '' ? 'Показати відповідь' : 'Перевірити' }</button>
        <button onClick={doMore}>Ще</button>
      </div>
      <div className="answer">
        <input type="text"
          value={enteredAnswer}
          onChange={e => setEnteredAnswer(e.target.value)}
          placeholder='Пишіть відповідь сюди...'>
        </input>
      </div>
    </div>
  )
}