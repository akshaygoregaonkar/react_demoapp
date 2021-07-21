import React from 'react'
import Tommy from './Tommy'
export default class Parent extends React.Component{
    constructor(props){
        super(props)
        
    }

    render(){
        return(
            <div>
             <Tommy />   
            </div>
        )
    }
}