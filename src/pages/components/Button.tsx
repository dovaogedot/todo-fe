import { ReactNode } from "react"
import './Button.scss'

export type ButtonType = 'accept' | 'decline'

interface Props {
  label?: ReactNode
  type?: ButtonType
  onClick?: () => void
}

export function Button(props: Props) {
  return (
    <button className={props.type} onClick={props.onClick}>{props.label}</button>
  )
}