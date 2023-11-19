import React, { useContext } from 'react'
import { contexts } from './context'

export default function Modeswitch() {
    const {modetoggle,mode} = useContext(contexts);
  return (
              <div>
                <input type="button" onClick={modetoggle} value={mode ? 'dark' : 'light'}/>
              </div>
  )
}
