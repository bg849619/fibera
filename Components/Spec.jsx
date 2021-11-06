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
            </div>
        )
    }
}

export default Spec;