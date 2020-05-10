import React, { Component } from 'react'

export default class Adddo extends Component {
    state = {
        id : 1,
        value : ''
    }

    handeSubmit = event =>{
        event.preventDefault();
        this.props.handleDo(this.state.value,this.state.id);
        this.setState({
            id: this.state.id + 1,
            value : ''
        })
    }
    handleValue = (event) =>{
        this.setState({
            value : event.target.value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit ={this.handeSubmit}>
                    <input name= "do" value = {this.state.value} onChange = {this.handleValue}></input>&nbsp;
                    <input type ="submit" value="Add Do"></input>
                </form>
            </div>
        )
    }
}
