import React from 'react'
import{ useState } from 'react'
import { v4 as uuidv4 } from "uuid";


export default function Comp3() {
  const [array,setarray] = useState([
    {nom : "akbib", prenom: "saad"},
    {nom : "alamiya", prenom: "nouali"},
    {nom : "char9i", prenom: "badar"}
  ])
  return (
    <div>
      <table style={{width:"100%",height:"400px" ,border: "1px solid black"}}>
        <thead>

          <tr>
          <th>nom</th>
          <th>prenom</th>
          
          
          </tr>
        </thead>
        <tbody>
          {array.map((e,id)=>{
             return <tr key={uuidv4()} >
             <td style={{border: "1px solid black"}} >{e.nom}</td>
             <td style={{border: "1px solid black"}}>{e.prenom}</td>
             </tr>
          })}
        </tbody>
      </table>

    </div>
  )
}
