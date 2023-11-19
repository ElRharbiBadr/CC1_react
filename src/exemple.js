 import React, { useState } from 'react'
 
 export default function Exemple({text,alertFunction}) {
     let table=["nouali","saad","badar"]
     let [inc,setInc]=useState(0)
     const elment= <h1>{table[inc]}</h1>
     const incf = () => {
      if (inc==table.length) {
        setInc(0);
      }else{
        setInc(inc+1)
      }
      }
      const decf = () => {
        if(inc==-1){
          setInc(table.length-1);
        }else{
          setInc(inc-1)
        }
     }
     
   
           
       
   return (
     <div>
        
          <button onClick={()=>incf(inc+1)}>inc</button>
          <button onClick={()=>decf(inc-1)}>dec</button>
           {elment}
     </div>
   )
 }
 