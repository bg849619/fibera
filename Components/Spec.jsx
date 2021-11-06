import React, {Component} from 'react';

class Spec extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <table>
                    <tr><th>Name</th><th>ID</th></tr>
                    {this.props.cableSpecs.map(spec => (
                    <tr><td>{spec.name}</td><td>{spec.id}</td></tr>))}
                </table>
            </div>
        )
    }
}

export default Spec;