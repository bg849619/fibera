import React, {Component} from 'react';

class Spec extends Component {

    constructor(props){
        super(props);
        this.state = {search: ""};
    }

    handleChange(e){
        this.setState({
            search: e.target.value
        })
    }

    render(){
        return (
            <div>
                <button>+</button>
                <input type="text" value={this.state.search} onChange={this.handleChange.bind(this)}/>
                <table>
                    <thead>
                    <tr><th>Name</th><th>ID</th></tr>
                    </thead>
                    <tbody>
                    {this.props.cableSpec.filter(spec => (spec.name.includes(this.state.search) || (spec.name && spec.name.includes(this.state.search)) || spec.id.toString().includes(this.state.search))).map(spec => (
                    <tr><td>{spec.name}</td><td>{spec.id}</td></tr>))}
                    </tbody>
                </table>
                <table>
                    <thead>
                    <tr><th>Name</th><th>ID</th><th>#Outputs</th></tr>
                    </thead>
                    <tbody>
                    {this.props.splitterSpec.filter(spec => (spec.name.includes(this.state.search) || (spec.name && spec.name.includes(this.state.search)) || spec.id.toString().includes(this.state.search))).map(spec => (
                    <tr><td>{spec.name}</td><td>{spec.id}</td><td>{spec.outputs.length}</td></tr>))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Spec;