import './Text.scss'

export type TextSize = 'big' | 'medium' | 'small'
export type TextWeight = 'light' | 'semibold' | 'bold'

interface Props {
  children?: string | number | undefined
  size?: TextSize
  weight?: TextWeight
}

export function Text(props: Props) {
  return (
    <div className={[props.size || 'small', props.weight || 'light'].filter(t => t).map(t => 'text-' + t).join(' ')}>{props.children}</div>
  )
}