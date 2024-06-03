import { ChangeEvent, ReactNode, useState } from "react"
import { TextSize } from "./Text"

import './Input.scss'

interface Props {
  placeholder?: string
  value?: string
  label?: ReactNode
  fontSize?: TextSize
  onChange?: (s: string) => void
}

export default function Input(props: Props) {
  async function handleChange(e: ChangeEvent<HTMLInputElement>) {
    props.onChange?.(e.target.value)
  }

  return (
    <div className='input'>
      {props.label && props.label}
      <input className={`text-${props.fontSize || 'medium'}`}
        value={props.value}
        placeholder={props.placeholder}
        onChange={handleChange} />
    </div>
  )
}