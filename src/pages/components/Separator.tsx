import { Text as TText, TextSize } from "./Text"
import './Separator.scss'
import { Children } from "react"

interface Props {
  label: React.ReactNode
}

export function Separator(props: Props) {
  return (
    <div className="separator">
      {props.label}
      <div className="border"></div>
    </div>
  )
}