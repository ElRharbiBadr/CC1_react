import axios from 'axios'
import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { contexts } from './context'

export default function APIlist(){
    const[data,setData]=useState([])
    const [page,setPage]=useState(2)
    const {lang} = useContext(contexts)
    let langs = {
        "FR":'id utilisateur',
        "EN":"user id",
        "RU":"ID пользователя"
    }
    useEffect(
        ()=>{
            axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${10} &_page=${page}`).
            then(res=>{return (res.data)}).
            then(data=>{
              if (data.length==0) {
                 setPage(page-1)
              }else{
                return setData(data)
              }
            })
        },  [page] )
    

    const next=()=>{
        setPage(page+1)
        
    }
    const previous=()=>{
        if (page>1) {
            setPage(page-1)
        }
        else if (page==1) {
            setPage(page)
        }
    }
  return (
    <div>
        <ul>
            {data.map((item)=>{
                return <li> {langs[lang]} :{item.userId}<br/>  id:{item.id} <br/>   title: {item.title} <br/></li>
            })}
        </ul>
        <input type='button' value='previous' onClick={previous}/>
        
        <input type='button' value='next' onClick={next}/>
    </div>
  )
}
