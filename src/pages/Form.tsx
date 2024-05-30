import { useReducer } from "react"

type Feedback = {
  name: string
  email: string
  message: string
}

type Action = {
  field: string
  value: string
}

const defaultFeedback: Feedback = {
  name: '',
  email: '',
  message: ''
}

export default function Form() {
  const reducer = (state: Feedback, action: Action) => ({
    ...state,
    [action.field]: action.value
  })
  const initialState = defaultFeedback

  const [state, dispatch] = useReducer(reducer, initialState)

  const update = (field: string, value: string) => dispatch({ field, value })

  function submit() {
    alert(`${state.name}, ${state.email}: ${state.message}`)

    update('name', '')
    update('email', '')
    update('message', '')
  }

  return (
    <div className="form">
      <input type="text" value={state.name} onChange={e => update('name', e.target.value)} />
      <input type="text" value={state.email} onChange={e => update('email', e.target.value)} />
      <input type="text" value={state.message} onChange={e => update('message', e.target.value)} />
      <button onClick={submit}>Submit</button>
    </div>
  )
}