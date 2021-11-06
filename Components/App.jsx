import React, {Component} from 'react';
import {hot} from 'react-hot-loader/root';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Hello'
        }
    }

    handleClick = () => {
        this.setState({
            title: 'World'
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.handleClick}>Do stuff</button>
            </div>
        );
    }
}

export default hot(App);