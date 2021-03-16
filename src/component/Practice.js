import React from 'react';
import ChildPractice from './ChildPractice';
import ChildTwo from './ChildTwo';
export default class Practice extends React.Component{
    constructor(props){
        super(props)
        this.state=({ListItems:["Akshay","Varun"]})
    }

    AddData=(ChildData)=>{
        this.setState({ListItems:[...this.state.ListItems,ChildData]})

    }

    render(){
        return(
            <div>
                <h1> Inside the ChildPractice</h1>
                <ChildPractice List={this.state.ListItems}/>
                <ChildTwo ParentCallback={this.AddData}/>

            </div>
        )
    }
}