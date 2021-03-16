
import React from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'
export default class CondionalRender extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: true
        }
    }

    render() {
        return (
            <div>
                <h1> Condional Rendering</h1>

                {this.state.toggle ? <ChildA /> : <ChildB />}
                <div>
                    <label>childA</label>
                    <input type="radio" checked={this.state.toggle === true} name='toggle' onClick={() => this.setState({ toggle: true })} ></input>

                </div>
                <div>
                    <label>childB</label>
                    <input type="radio" checked={this.state.toggle === false} name="toggle" onClick={() => this.setState({ toggle: false })} ></input>

                </div>

            </div>
        )
    }
}