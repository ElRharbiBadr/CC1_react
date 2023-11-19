import React, { useContext, useState } from 'react'
import { contexts } from '../../../../context'

export default function Todolist() {
    const {lang} = useContext(contexts)
    let langs = {
        "FR":['ajouter tache',"ajouter","suprimmer","completer"],
        "EN":["add task","add","delete","complete"],
        "RU":["добавить задачу","добавлять","удалить","полный"]
    }

    const [toDo, settoDo]=useState(
    [
        {txt:"film",completed:false},
        {txt:"football",completed:false},
        {txt:"watching",completed:false}
    ])

    const [newval, setnewval]=useState("")

    const ajouter = ()=>{
        let newarr = [...toDo]
        newarr.push({txt:newval,completed:false})
        settoDo(newarr)
        setnewval("")
    }

    const changevalue= (e)=>{
        setnewval(e.target.value)
    }

    const supp = (x)=>{
        toDo.splice(x,1)
        let newTbale=[...toDo]
        settoDo(newTbale)
    }

    const completelist = (x)=>{
        let table =[...toDo];
        table[x].completed=!table[x].completed;
        settoDo(table);
    }
    
  return (
    <div>
        {langs[lang][0]}:<input type="text" value={newval} onChange={(e)=>changevalue(e) }/> 
        <input type="button" value={langs[lang][1]} onClick={ajouter}/>
        <br/><br/>
        <ul>{
            toDo.map((element,x)=>{
                let pstyle =  element.completed ? {textDecorationLine:"line-through"} : {textDecorationLine:"none"};
                return (<li key={x} id={x}><p style={pstyle}>{element.txt}</p><input type='button' onClick={()=>supp(x)} value={langs[lang][2]}/>
                <input type='button' value={langs[lang][3]} onClick={()=>completelist(x)}/></li>)
            })
        }
        </ul>
    </div>
  )
}
