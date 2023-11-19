import React, { createContext, useState } from 'react'

export let contexts = createContext()

export default function Context({children}) {
    const [mode,modeset]= useState(false);
    const [lang,langset]= useState("EN");

    const modetoggle = ()=>{
        modeset(!mode);
    }
    if(mode){
        document.body.style.backgroundColor="black"
        document.body.style.color="white"
    }else{
        document.body.style.backgroundColor="white"
        document.body.style.color="black"
    }

  return (
    <contexts.Provider value={{mode,modetoggle,lang,langset}}>
      {children}
    </contexts.Provider>
  )
}
