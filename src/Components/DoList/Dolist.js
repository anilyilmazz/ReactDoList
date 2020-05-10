import React, { Component } from 'react'
import Adddo from '../AddDo/Adddo'
import Do from '../Do/Do'

export default class Dolist extends Component {

    state = {
        Dolist: []
    }

    handleDo = (value, id) => {
        var newList = [...this.state.Dolist, { value: value, id: id }];
        this.setState({
            Dolist: newList
        })
    }

    removeDo = (id) => {
        var newList = this.state.Dolist.filter(x => x.id !== id)
        this.setState({
            Dolist: newList
        })
    }

    clearList = () =>{
        this.setState({
            Dolist : []
        })
    }

    render() {
        return (
            <div>
                <button onClick = {this.clearList}>Clear List</button>
                <Adddo handleDo={this.handleDo}></Adddo>
                <table>
                    <thead>
                        <tr>
                            <th>Value</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Dolist.map(x =>
                            <Do key={x.id} object={x} removeDo={() => this.removeDo(x.id)}></Do>
                        )}
                    </tbody>
                </table>

            </div>
        )
    }
}
