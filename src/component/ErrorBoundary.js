import React from 'react'

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
        
    }
    static getDerivedStateFromError(error) {
        console.log( "error massage :",error)
        return{
            hasError: true
        }
    }
    render() {
        return this.state.hasError ? <div style={{color:'red'}}> Dude the Component Faild </div> :this.props.children
    }

}