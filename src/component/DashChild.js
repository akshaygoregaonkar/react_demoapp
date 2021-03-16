import React from 'react'
export default class DashChild extends React.Component {

    constructor(props) {
        super(props)
        this.state = { Item: '',toggle:true }
    }

    // AddDataToParent=()=> {
      
    // }
    AddData = (evt) => {
        this.setState({ Item: evt.target.value })

    }
    render() {
        return (
            <div>
                <button onClick={()=>{this.setState({toggle:!this.state.toggle})}}>Hide /Show</button> <br/>
                {this.state.toggle?<div> 
                <input type="text" onChange={this.AddData} />
                <button onClick={()=>this.props.AddItemChild(this.state.Item)}> Submit</button></div>:<></>
                }
            </div>
        )
    }
}