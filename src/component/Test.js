
import React from 'react';

class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: ['mango', 'apple'],
            temp:""
        }
       
    }
    addText(){
        if(this.state.temp!=0){
    this.setState({list:[...this.state.list,this.state.temp],temp:''})}
    
    }
    deleteItem(index){
        this.setState({ list:[...this.state.list.slice(0,index),...this.state.list.slice(index+1)]})
    }

    render() {

        return (
            <div> 
                <ul>
                    {this.state.list.map((item,index)  => {
                        return <li>{item} <button onClick={()=>{this.deleteItem(index)}}>Delete</button></li>
                    })}            
                </ul>
                <input type="text" value={this.state.temp} onChange={(val)=>{
                this.setState({temp:val.target.value })
                }}></input>
                <button onClick={()=>{
                    this.addText()
                }
                }>submit</button>
                
            </div>
        )
    }

}

export default Test

