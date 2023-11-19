import React, { useState } from 'react'

export default function Calcul() {
  const [numbre1,setNumbre1]=useState(0)
  const [numbre2,setNumbre2]=useState(0)
  const [rameze,setRamze]=useState("")
 
 const CalcuTotal=()=>{
  const ramez=document.getElementById("select")
  const input=document.getElementById("input")
    if (ramez.value=="+") {
      let sum=parseFloat(numbre1)+parseFloat(numbre2)
      input.value=sum
    }
    else if (ramez.value=="-") {
      let moin=parseFloat(numbre1)-parseFloat(numbre2)
      input.value=moin
    }
     else if (ramez.value=="*") {
      let fois=parseFloat(numbre1)*parseFloat(numbre2)
      input.value=fois
    }
    else if (ramez.value=="/") {
       if (numbre2!=0) {
        let kisma=parseFloat(numbre1)/parseFloat(numbre2)
        input.value=kisma
       }
       else(
         alert("ra9em tani khes ykon kikhalef 0")
       )
    }

    // switch (ramez.value) {
    //   case '+':
    //     let sum=parseFloat(numbre1)+parseFloat(numbre2)
    //     input.value=sum
    //     break;

    //     case '-':
    //     let moin=parseFloat(numbre1)-parseFloat(numbre2)
    //     input.value=moin
    //     break;

    //     case '*':
    //     let fois=parseFloat(numbre1)*parseFloat(numbre2)
    //     input.value=fois
    //     break;

    //     case '/':
    //       if (numbre2!=0) {
    //         let kisma=parseFloat(numbre1)/parseFloat(numbre2)
    //         input.value=kisma
    //         }
    //       else(
    //         alert("ra9em tani khes ykon kikhalef 0"))
    //     break;
    //   default:
    //     break;
    // }
    let h1=document.querySelector("h1")
    if (input.value>0) {
     
     h1.innerHTML="Nouali 3alamiya"
     h1.style.color="red";
      
    }
    else if (input.value==0) {
      
      h1.innerHTML="Badar"
      h1.style.color="blue";
       
     }
     else{
      
      h1.innerHTML="Saad "
      h1.style.color="black";
     }

 }
 
  const calucl=()=>{
 
    
  }
  const Calcul1=(e)=>{
    setNumbre1(e.target.value)
  }
  const Calcul2=(e)=>{
    setNumbre2(e.target.value)
  }

  return (
    <div>
      <h1></h1>
       numbre1: <input type='number'onChange={(e)=>Calcul1(e)} /><br></br>
       numbre2: <input type='number'onChange={(e)=>Calcul2(e)} /><br></br>
       <select id='select'>
        <option value='*'>X</option>
        <option value='+'>+</option>
        <option value='-'>-</option>
        <option value='/'>/</option>
       </select><br/>
       <button onClick={CalcuTotal}>Calcul</button><br/><br/>
       result:<input type='text' id="input"></input>

       
    </div>
  )
     
  
}
