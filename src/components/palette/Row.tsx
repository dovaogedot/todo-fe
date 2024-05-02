import { Dispatch, SetStateAction, useEffect, useState } from "react"
import './Row.sass'

interface Props {
  amount: number
  direction?: boolean
}


// input: r,g,b in [0,1], out: h,s,v in [0,1]
// @ts-ignore
function rgb2hsv(r,g,b): number[3] {
  let v=Math.max(r,g,b), c=v-Math.min(r,g,b);
  let h= c && ((v==r) ? (g-b)/c : ((v==g) ? 2+(b-r)/c : 4+(r-g)/c)); 
  return [(h<0?h+6:h)/60, v&&c/v, v];
}

// input: h,s,v in [0,1] - output: r,g,b in [0,1]
// @ts-ignore
function hsv2rgb(h,s,v): number[3]
{            
  h *=360
  // @ts-ignore
  let f= (n,k=(n+h/60)%6) => v - v*s*Math.max( Math.min(k,4-k,1), 0);     
  return [f(5),f(3),f(1)];       
}  

export default function Row({ amount, direction = false }: Props) {
  const [base, setBase] = useState('223344')
  const [contrast, setContrast] = useState(0.1)
  const [saturation, setSaturation] = useState(0.1)
  const [color, setColor] = useState(0.1)



  function setProperty(setter: Dispatch<SetStateAction<any>>, value: any) {
    setter(value);
  }

  function hexToDec(val: string): number {
    return parseInt(val, 16);
  }
  
  function decToHex(val: number): string {
    return Math.round(255 * val).toString(16)
  }

  function parseHex(val: string): number[] {
    const r = hexToDec(val.slice(0, 2))
    const g = hexToDec(val.slice(2, 4))
    const b = hexToDec(val.slice(4, 6))
    return [r, g, b]
  }

  function getColor(value: number): string {
    const [r, g, b] = parseHex(base)
    const [h, s, v] = rgb2hsv(r/255., g/255., b/255.)

    const nh = h + (color * value) % 1
    const ns = s + (saturation * value) % 1
    const nv = v + (contrast * value) % 1

    const [hr, hg, hb] = hsv2rgb(nh, ns, nv)
    return `#${decToHex(hr)}${decToHex(hr)}${decToHex(hb)}`
  }

  let settings = (
    <div className="settings">
      <span className="label">Base</span>
      <input type="text" value={base} onChange={(e) => setProperty(setBase, e.target.value)}></input>
      <span className="label">Contrast</span>
      <input type="text" value={contrast} onChange={(e) => setProperty(setContrast, e.target.value)}></input>
      <span className="label">Saturation</span>
      <input type="text" value={saturation} onChange={(e) => setProperty(setSaturation, e.target.value)}></input>
      <span className="label">Color</span>
      <input type="text" value={color} onChange={(e) => setProperty(setColor, e.target.value)}></input>
    </div>
  )

  let colors = (
    <div className="colors">
      {Array(amount).fill(0).map((_, i) => (
        <div key={i} className="color" style={{backgroundColor: getColor(i / (amount - 1) * 2 - 1)}}>{getColor(i / (amount - 1) * 2 - 1)}</div>
      ))}
    </div>
  )

  return (
    <div className="row flex-row">
      {direction ? (
        <>
          {settings}
          {colors}
        </>
      ) : (
        <>
          {colors}
          {settings}
        </>
      )}
    </div>
  )
}