enum State {
  Closed, Opened, Flagged
}

interface Props {
  value: number
  state: State
  actionCallback: () => void
}

const Cell = ({ value, state, actionCallback }: Props) => {

  return (
    <div className={`flex-center cell ${{
      [State.Closed]: 'closed',
      [State.Opened]: `opened value-${value < 9 ? value : 'X'}`,
      [State.Flagged]: 'flagged',
    }[state]}`}
      onMouseDown={() => {}}
      onContextMenu={e => e.preventDefault()}>
    </div>
  )
}

export default Cell