import React, { Component } from 'react'

export default class Do extends Component {
    render() {
        var propsObj = this.props.object;
        return (
            <tr>
                <td>{propsObj.value}</td>
                <td><button onClick={this.props.removeDo}>X</button></td>
            </tr>
        )
    }
}
