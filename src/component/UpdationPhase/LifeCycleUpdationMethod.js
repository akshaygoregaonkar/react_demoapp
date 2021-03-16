import React from "react";
import ChildCompLife from './ChildCompLife'
export default class LifeCycleUpdationMethod extends React.Component{
    constructor(Props){
        super(Props)
        this.state={}
}

render(){
    return(
        <div>
           Inside The Parent 
          <ChildCompLife/>  
        </div>
    )
}
    }
    