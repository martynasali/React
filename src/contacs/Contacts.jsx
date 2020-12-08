import React, { Component } from 'react'
/*
const Contacts = (props) => {
    return (
        <div>
            <h3>Vardas: {props.name}</h3>
            <p>El. Pastas: {props.email}</p>
        </div>
    )
}
*/
export default

    class Contacts extends Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge
        }
    }
    makeOlder() {
        this.setState({
            age: this.state.age + 20
        })
        console.log(this.state.age)
    }
    render() {
        return (
            <div>
                <h3>vardas: {this.props.vardas}</h3>
                <p>El.Pastas: {this.props.email}</p>
                <p>Amzius: {this.state.age}</p>
                <button onClick={this.makeOlder.bind(this)}>And now true..</button>
            </div>
        )
    }
}

