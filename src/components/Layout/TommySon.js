import React from 'react'
import { DataContex } from '../ContextApi/DataContex'

export default class TommySon extends React.Component{
    constructor(props){
        super(props)
        this.state={
            temp:''
        }
    }

    render(){
        //console.log(this.context)
        const{state,another,setState,setAnother}=this.context
        return(
            <div>
                
                {/* <div>shown fro Parent (Name) :{this.context?.state?.name}</div> 
             <div>shown fro Parent (age) :{this.context?.state?.age}</div> */}
             <div>shown fro Parent (Name) :{another.name}</div> 
             <div>shown fro Parent (age) :{state.age}</div>


<input type="text" onChange={(e)=>this.setState({temp:e.target.value})}/>
             <button onClick={()=>setAnother({...another,name:this.state.temp})}> Update</button>

            </div>
        )
    }
}

TommySon.contextType=DataContex