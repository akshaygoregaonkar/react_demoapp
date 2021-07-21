import React from 'react'
import DataProvider from './ContextApi/DataContex'
import Parent from './Layout/Parent'
// import PersonInfromation from './PersonInformation'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = { toggle: true }
    }
    render() {
        return (
            <div>

                {/* { this.state.toggle && <PersonInfromation text={"hello"}/>}
           <button onClick={()=>this.setState({toggle:!this.state.toggle })}> UnUount</button> */}

                <DataProvider>
                    <Parent />
                </DataProvider>
                {/* <Parent /> */}

            </div>)
    }
}