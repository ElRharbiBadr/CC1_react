import React, { useRef } from 'react'

export default function UseRef() {
    const reff=useRef([])
    const addColor=useRef()
    const add=(e)=>{
          reff.current.push(e)
        
    }
 
   
    
    const ajouter=()=>{
       
        for (let index = 0; index < reff.current.length; index++) {    
             if (reff.current[index].checked==true) {
                addColor.current.innerText=reff.current[index].value
                addColor.current.style.color=`${reff.current[index].value}`
                
             }
        }
        console.log(addColor)
 
       
    }
   


  return (
    <div>
        choisir les color: <br/>
        <input ref={add} type="checkbox" value={"red"}/>red
        <input ref={add} type="checkbox" value={"blue"}/>blue
        <input ref={add} type="checkbox" value={"black"}/>black
        <input ref={add} type="checkbox" value={"gray"}/>gray<br/>
        <button onClick={ajouter}>Ajouter</button>
        
        <div ref={addColor}> 

        </div>
    </div>
    
  )
}
