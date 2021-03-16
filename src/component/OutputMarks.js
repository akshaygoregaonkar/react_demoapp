import React from 'react';
export default class OutputMarks extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div>
                <h5>under the Output </h5>
                <ol>
                    {this.props.Student.map((item) => { return <li>{`${item.Subject} - ${item.Marks}`}</li> })}
                </ol>
            </div>
        )
    }
}