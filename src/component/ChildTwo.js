import React from 'react';
export default class ChildTwo extends React.Component{
    constructor(props){
        super(props)
        this.state={temp:''}

    }
    AddParentData=()=>{
      this.props.ParentCallback(this.state.temp)
    }
    render(){
        return( <div>
            <input type="text" value={this.state.temp} onChange={(evt)=>{this.setState({temp:evt.target.value})}}></input>
            <button  onClick={()=>this.AddParentData()}> ADD Data</button>
        </div>)
    }
}