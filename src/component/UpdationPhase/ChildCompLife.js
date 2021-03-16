import React from "react";
export default class ChildCompLife extends React.Component {
    constructor(Props) {
        super(Props)
        this.state = { ChatList: ['hi', 'hello', 'bye'], timer: 0 }
        this.ChatRef = React.createRef()

    }

    componentDidMount() {
        this.IntervalRef = setInterval(() => {
            this.setState({ ChatList: [...this.state.ChatList, `Howdy ${this.state.timer}`], timer: this.state.timer + 1 })
        }, 500);
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (this.state.ChatList.length > prevState.ChatList.length && this.ChatRef.current) {
            const heightDiv = this.ChatRef.current.scrollHeight
            return heightDiv
        }
        return null
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot != null) {
            this.ChatRef.current.scrollTop = snapshot
        }

    }
    render() {
        return (
            <div>
                ChildCompLife
                <div ref={this.ChatRef} style={{ height: '150px', width: '20%', overflow: 'scroll' }}>
                    {this.state.ChatList.map((item, index) =>
                        <div key={index}>
                            {item}
                        </div>
                    )}
                </div>


            </div>
        )
    }
}
