import React from 'react'
import ChildCompLife from "./ChildCompLife";
import ErrorBoundary from './ErrorBoundary'
export default class ComponentLifeCycle extends React.Component{
    constructor(props){
        super(props)
        this.state={count:3,toggle:true}
        
    }


    render(){
        return(
            <div>
                {/* <h3> Component Life Cycle</h3> */}
                <ErrorBoundary>
                < ChildCompLife counter={this.state.count}/>
                </ErrorBoundary>
             {/* { this.state.toggle && < ChildCompLife Counter={this.state.count}/>} */}
                 <button onClick={()=>{this.setState({count:this.state.count+1})}}> Increase</button>
                 <button onClick={()=>{this.setState({toggle:!this.state.toggle})}}> Show / Hide</button>
            </div>
        )
    }
}