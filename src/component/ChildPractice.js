import React from "react";
export default class ChildPractice extends React.Component{
    constructor(props){
        super(props)
    }

    

    render(){
        return(
            <div>
                <h1> Inside Practice</h1>
                {this.props.List.map((item)=>{ return<li>{item}</li>})}
            </div>
        )
    }
}