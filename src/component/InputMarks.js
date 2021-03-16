import React from 'react'
import OutputMarks from "./OutputMarks";
export default class InputMarks extends React.Component {
    constructor(props) {
        super(props)
        this.state = { MarkList: [], sub: '', marks: 0,errFlag:false}
    }
    Add = () => {
        if (this.state.MarkList.length >=5) {
            this.setState({errFlag:true})
          }
          else{
          this.setState({ MarkList: [...this.state.MarkList, { Subject: this.state.sub, Marks: this.state.marks }], sub: '', marks: '' })
        }
    }
    render() {
        return (
            <div>
                <label> Subject</label> <input type="text" value={this.state.Subject} onChange={(evt) => {this.setState({ sub: evt.target.value }) }} /><br></br>
                <label> Marks</label><input type="number" value={this.state.Marks} onChange={(evt) => { this.setState({ marks: evt.target.value }) }} /><br></br>
                <button onClick={() => { this.Add() }}> Add</button>
                {this.state.errFlag?<div> Dont Exceed More Than 5</div>:<></>}
                <OutputMarks Student={this.state.MarkList} />
            </div>
        )
    }
}