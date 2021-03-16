import React from 'react';
export default class ChildCompLife extends React.Component {
    constructor(props) {
        super(props)
        this.state = { MyCounter:this.props.counter, timer:0}

    }

    // componentDidMount(){
    //     //called only once in Mounting phase  like for making server call
    //   this.IntervalRef=setInterval(() => {
    //         this.setState({timer:this.state.timer+1})
    //     }, 1000);
    // }

    static getDerivedStateFromProps(props, state){
        //this=> undefined
        if(props.counter!=state.MyCounter){
            return{
                MyCounter:props.counter
            }
        }
        return null
    }
shouldComponentUpdate(nextpros,nextstate){
    if(this.props.counter!=nextpros.counter){
        return false
    }
    return true
}

    // componentWillUnmount(){
    //     clearInterval(this.IntervalRef)
    // }
    render() {
        return (
            <div>
                Child Comp Life
                {console.log(this.props.counter)}
               {/* {console.log(this.state.MyCounter)} */}
                <div> Counter Value: {this.state.MyCounter}</div>
                {/* <div>{this.state.timer}</div> */}

            </div>
        )
    }
}