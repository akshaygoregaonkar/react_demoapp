import React,{useEffect,useState,useContext} from 'react'
import axios  from 'axios'
import { DataContex } from './ContexApi/DataContex'
export default function UserManegement (props) {
     //const[userInfo,setUserInfo]=useState([])
//      useEffect(()=>{
// axios.get('https://jsonplaceholder.typicode.com/users').then(res=>setUserInfo(res.data))
//      },[])

const DataApp= useContext(DataContex)
 const{data,setData}=DataApp

 var handleClick = (id)=>{
     console.log(props.history)
     props.history.push(`/edituser/${id}`)
    }
     return(
        <div >
           
{data.map((item,index) => {
                    return (
                        <div style={{padding:'20px',
                            margin:'10px',
                            border:' 2px solid black',
                            float:'left'
                            
                        }} key={index}>
                            
            
                         <div> Name: {item.name}</div>
                         <div> Email: {item.email}</div>
                         <div> Street Address: {item.address.street}</div> 
                         <button onClick={()=>handleClick(item.id)}> Edit</button>
                        </div>)
                })}
            
        </div>
    )

}


