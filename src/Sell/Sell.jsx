import React, { Component } from 'react';
export default class Sell extends Component {

    constructor(props) {
        super()
        this.state = {
            message: "parduodu knyga"
        }
    }
    clickHandler() {
        this.setState({
            message: "pardaviau"
        })
        console.log(this);
    }
    render() {

        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)}>spausk</button>
            </div>
        )
    }
}