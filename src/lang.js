import React, { useContext } from 'react'
import { contexts } from './context'

export default function Lang() {
    const {lang,langset} = useContext(contexts)
    let langs = {
        "FR":'langue',
        "EN":"language",
        "RU":"язык"
    }
  return (
    <div>
      <h1>{langs[lang]}</h1>
      <button type='button' onClick={()=>langset("FR")}>FR</button>
      <button type='button' onClick={()=>langset("EN")}>EN</button>
      <button type='button' onClick={()=>langset("RU")}>RU</button>
    </div>
  )
}
