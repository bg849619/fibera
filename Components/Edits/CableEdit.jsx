import React, {Component} from 'react';
import { render } from 'react-dom';
import{GlobalContext} from '../GlobalContext.js';
class CableEdit extends component{
    static contextType = GlobalContext;
    constructor(props){
        super(props);
        this.state = this.props.value;
    }


    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){
        return(
            <div>
                <h2>{this.state.name}</h2>
                <h2>{this.state.type}</h2>
                <input type="text" value={this.state.name} name="name" onChange={this.handleChange.bind(this)} />
                <select value={this.state.placment} name="placement" onChange={this.handleChange.bind(this)}>
                    <option value="aerial">Aerial</option>
                    <option value="pedestal">Pedestal</option>
                    <option value="ground">Ground</option>
                </select>
                <button onClick={this.props.onSubmit}>Save</button>
            </div>
     )
    }
}

export default CableEdit;