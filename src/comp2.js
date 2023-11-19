import React, { useState } from 'react'
import './bootstrap/css/bootstrap.min.css';
import './calc.css';

export default function Comp2() {
    const [result,setresult] = useState("")
    const ecrire = (e)=>{
        setresult(result+e.target.value)
    }
    const supprimer = ()=>{
        setresult(result.slice(0,result.length-1))
    }
    const C = (e)=>{
        setresult("")
    }
    const calc = ()=> {
        try{
             setresult(eval(result))
        }catch{
            setresult("error ! invalid execition")
        }
        
    }
    let Random=()=>{
          let p1=document.getElementById("P1");
          let p2=document.getElementById("P2");
          let rand=Math.floor(Math.random()*200-100);
          let tab=["+","-","/","x"];
          let randTab=Math.floor(Math.random()*3);
           
          p1.innerText=rand;
          p2.innerText=tab[randTab];

    }
    
   
   
    
  return (
    <div id='ch1'>
 
     <div id='all' > 
     <p>CASIO</p>    
    <input id='in1'  type="text" value={result}/><br/>
     
        <input id='b1' className="btn btn-dark m-1 " type="button" value="1" onClick={(e)=>ecrire(e)}/>
        <input id='b1' className="btn btn-dark m-1" type="button" value="2" onClick={(e)=>ecrire(e)}/>
        <input id='b1' className="btn btn-dark m-1" type="button" value="3" onClick={(e)=>ecrire(e)}/>
        <input id='b1' className="btn btn-warning m-1" type="button" value="C" onClick={()=>C()}/><br/>
        <input id='b1' className="btn btn-dark m-1" type="button" value="4" onClick={(e)=>ecrire(e)}/>
        <input id='b1' className="btn btn-dark m-1" type="button" value="5" onClick={(e)=>ecrire(e)}/>
        <input id='b1' className="btn btn-dark m-1" type="button" value="6" onClick={(e)=>ecrire(e)}/>
        <input id='b1' className="btn btn-dark m-1" type="button" value="+" onClick={(e)=>ecrire(e)}/><br/> 
        <input id='b1' className="btn btn-dark m-1"type="button" value="7" onClick={(e)=>ecrire(e)}/>
        <input id='b1' className="btn btn-dark m-1"type="button" value="8" onClick={(e)=>ecrire(e)}/>
        <input id='b1' className="btn btn-dark m-1" type="button" value="9" onClick={(e)=>ecrire(e)}/>
        <input id='b1' className="btn btn-dark m-1" type="button" value="-" onClick={(e)=>ecrire(e)}/><br/>
        
        
        <input  id='b1' className="btn btn-dark m-1" type="button" value="." onClick={(e)=>ecrire(e)}/>
        <input id='b1' className="btn btn-dark m-1" type="button" value="0" onClick={(e)=>ecrire(e)}/>
        <input id='b1' className="btn btn-success m-1 " type="button" value="=" onClick={()=>calc()}/>
        <input  id='b1' className="btn btn-dark m-1" type="button" value="*" onClick={(e)=>ecrire(e)}/><br/> 
        
        
        <input id='b1' className="btn btn-dark m-1" type="button" value="(" onClick={(e)=>ecrire(e)}/>
        <input id='b1' className="btn btn-dark m-1 " type="button" value=")" onClick={(e)=>ecrire(e)}/>
        <input id='b1' className="btn btn-danger m-1" type="button" value="sup" onClick={()=>supprimer()}/>
        <input id='b1' className="btn btn-dark m-1" type="button" value="/" onClick={(e)=>ecrire(e)}/><br/>
        
        
        </div>  
        

    </div>
  )
}

