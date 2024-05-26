import React, { ChangeEvent, ChangeEventHandler, useEffect, useRef, useState } from "react"
import { Exercise, simpleStatement } from "./Vocabulary"
import './EestiKeel.scss'
import _ from "underscore"

export default function EestiKeel() {
  const [enteredAnswer, setEnteredAnswer] = useState('')
  const [sentence, setSentence] = useState<Exercise>({ et: '', ua: '' })
  const inputRef = useRef<HTMLInputElement>(null)
  const [mode, setMode] = useState<boolean>(true)

  useEffect(() => {
    doMore()
  }, [])

  function doMore() {
    setSentence(simpleStatement())
    setEnteredAnswer('')
    inputRef.current!.focus()
  }

  function onAnswerChanged(e: ChangeEvent<HTMLInputElement>) {
    setEnteredAnswer(e.target.value)
  }

  function handleAnswerClick() {
    inputRef.current!.focus()
  }

  function handleWordClick(i: number) {

  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key == 'Enter') {
      doMore()
    }
  }

  function swapLanguages() {
    setMode(!mode)
  }

  return (
    <div className="eestikeel flex-center flex-column" onKeyDown={handleKeyDown}>
      <div className="question">
        <span>{mode ? sentence.ua : sentence.et}</span>
      </div>
      <div className="actions">
        <button className="swap" onClick={swapLanguages}>Навпаки</button>
        <button className="check" onClick={() => setEnteredAnswer(mode ? sentence.et : sentence.ua)}>{enteredAnswer == '' ? 'Показати відповідь' : 'Перевірити'}</button>
        <button className="more" onClick={doMore}>Ще</button>
      </div>
      <div className="answer" onClick={handleAnswerClick}>
        {enteredAnswer
          ?
          enteredAnswer.trim().split(' ').filter(w => w).map((w, i) => (
            <>
              <span key={i} className={'word ' + ((mode ? sentence.et : sentence.ua).split(' ')[i].toLowerCase() == w.toLowerCase() ? 'correct' : 'wrong')} onClick={() => handleWordClick(i)}>{w}</span>
            </>
          ))
          :
          <span className="placeholder">_</span>
        }
      </div>
      <input type="text"
        ref={inputRef}
        size={0}
        value={enteredAnswer}
        onChange={onAnswerChanged}>
      </input>
    </div>
  )
}