import './Select.scss'

type Props = {
  value: string
  values: readonly string[]
  onChange: (s: string) => void
}

export default function Select(props: Props) {
  return (
    <div className='select'>
      <select value={props.value} onChange={e => props.onChange(e.target.value)}>
        {props.values.map((v, i) => (
          <option key={i} value={v}>{v}</option>
        ))}
      </select>
    </div>
  )
}