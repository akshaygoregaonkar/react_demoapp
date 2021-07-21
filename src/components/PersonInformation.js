
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import MyCustomComp from './MyCustomComp'
export default function PersonInfromation(props){
    const [personInfo,setPersonInfo]=useState({name:'Akshay',age:24})
    const[temp,setTemp]=useState('')
    const[userInformation,setUserInformation]=useState([])
    const[timer,setTimer]=useState(0)
//     useEffect(()=>{
//         console.log("use effect called for every state")
//     }) //called for every state change


//     useEffect(()=>{
//         console.log("use effect called when personInfo state change")
//     },[personInfo]) //called when personInfo state change 

// useEffect(()=>{
//         console.log("use effect called either PersonInfo or temp or both changes")
//     },[personInfo,temp]) //called when personInfo or temp or any of two state changes


//     useEffect(()=>{
//     console.log('useEffect call for componentDidMount')    
//     },[]) //not subcribe to any state componetDidMount 

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then(Response=>setUserInformation(Response.data)).catch(error=>{
console.log('somthing went wrong',error)
    })
    
},[])


useEffect(()=>{
    const temp=setInterval(()=>{
        setTimer(count=>count+1)
    },1000)
    return ()=>{
console.log('Unmount is called')
        clearInterval(temp)
    }

},[])

    return(
        <div>
            Person Information:{props.text}
            {timer}
            <div>
            Name: {personInfo.name}
            </div>
          <div>
          age: {personInfo.age}
          </div>
         
          <input value={temp} onChange={(e)=> setTemp(e.target.value)}/>
          <button onClick={()=>{setPersonInfo({...personInfo,name:temp}); setTemp('')}}>Update</button>
          <MyCustomComp userInformation={userInformation}/>
        </div>
    )
}