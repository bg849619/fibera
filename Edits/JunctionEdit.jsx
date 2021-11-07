import React, {Component} from 'react';

class JunctionEdit extends Component {

    constructor(props){
        super(props);
        this.state=this.props.value;
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        return(
            <div>
                <h2>{this.state.name}</h2>
                <h4>{this.state.type}</h4>
                <input type="text" value={this.state.name} name="name" onChange={this.handleChange.bind(this)} />
                <input type="text" value={this.state.placement} name="placement" onChange={this.handleChange.bind(this)} />
                <button onClick={this.props.onSubmit}>Save</button>
            </div>
        )
    }
}

export default JunctionEdit;