import React, {Component} from 'react';

class Spec extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <table>
                    <thead>
                    <tr><th>Name</th><th>ID</th></tr>
                    </thead>
                    <tbody>
                    {this.props.cableSpec.map(spec => (
                    <tr><td>{spec.name}</td><td>{spec.id}</td></tr>))}
                    </tbody>
                </table>
                <table>
                    <thead>
                    <tr><th>Name</th><th>ID</th><th>#Outputs</th></tr>
                    </thead>
                    <tbody>
                    {this.props.splitterSpec.map(spec => (
                    <tr><td>{spec.name}</td><td>{spec.id}</td><td>{spec.outputs.length}</td></tr>))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Spec;