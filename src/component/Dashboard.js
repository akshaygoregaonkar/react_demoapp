import React from 'react';
import './Dashboard.css'
import DashChild from './DashChild'
export default class Dashbord extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfNames: ["Akshay", "Varun", "chinmay", "kiran", "bunty", "shubham"]
            ,
            checkList: [], displayList: []

        }
    }
AddtoListOfNames=(ChildData)=>{
    this.setState({listOfNames:[...this.state.listOfNames,ChildData]})
}

    handleClick = () => {
        console.log(this.state.checkList)
        this.setState({ displayList: this.state.checkList })
        // console.log(this.state.displayList)
    }

    changeEvent = (evt) => {
        //console.log(evt.target.checked)
        if (evt.target.checked === true) {
            this.setState({ checkList: [...this.state.checkList, evt.target.value] })
            console.log(this.state.checkList)
        }
        else if (evt.target.checked === false) {
            var array = [...this.state.checkList]// make seprate copy of arr

            var newarr=array.filter((item) => {
                if (item != evt.target.value) { return true }
                return false
            })
            this.setState({checkList:newarr})

            // var index = array.indexOf(evt.target.value)
            // if (index !== -1) {
            //     array.splice(index, 1)
            //     this.setState({ checkList: array })
            // }
        }
    }
    deleteItem=(index)=>{
        this.setState({listOfNames:[...this.state.listOfNames.slice(0,index),...this.state.listOfNames.slice(index+1)]})
    }
    render() {
        return (
            <div>

                <div className="split right">
                    <h2>Right</h2>
                    <ol>
                        {this.state.displayList.map((item) => { return <li> {item} </li> })}

                        {/* {this.state.displayList.map((item)=>{})} */}
                    </ol>

                </div>
                <div className="split left">
                    <h2>Left</h2>

                    <ol>
                        {this.state.listOfNames.map((item, index) => {
                            return <li> <input type="checkbox" value={item} onChange={this.changeEvent} />
                                {item} <button onClick={()=>{ this.deleteItem(index)}}> Delete</button></li>
                        })}
                    </ol>
                    <button onClick={() => this.handleClick()}> Add / remove</button>
                    <DashChild  AddItemChild={this.AddtoListOfNames} />
                </div>
        
            </div>
        )
    }

} 