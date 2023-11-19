import React, { useState } from 'react'
import image1 from "./image/image1.jpg"
import image2 from "./image/image2.jpg"
import image3 from "./image/image3.jpg"
import image4 from "./image/image4.jpg"
import image5 from "./image/image5.jpg"
import icon from'./image/icone.png'


export default function Compimg () {
    const [incDec,setIncDec]=useState(0)
    const tableImages=[image1,image2,image3,image4,image5]
    const increment=()=>{
      if(incDec==tableImages.length-1){
        setIncDec(0);
      }else{
        setIncDec(incDec+1);
      }
    }
    const decrement=()=>{
      if(incDec==0){
        setIncDec(tableImages.length-1);
      }else{
        setIncDec(incDec-1);
      }
    }
  return (
    <div id='cont'>
         <h1 id='hh1'>  {incDec+1}</h1>
         <img src={tableImages[incDec]}/>
          
          <img   id='btn1' onClick={()=> increment()} src={icon}/>
        
         <img id='btn2'   onClick={()=> decrement()}  src={icon}/>
        
    </div>
  )
}
