import React, {Component} from 'react';
class NetworkList extends Component{
    constructor(props){
    super(props);
    }
    render(){
        return(
            <div>
                <table>
                <thead>
                <tr><th>ID</th><th>Type</th><th>Name</th><th>Placement</th></tr>
                </thead>
                <tbody>
                {this.props.networkComponents.map(networkComponent => (
                <tr><td>{networkComponent.id}</td><td>{networkComponent.type}</td><td>{networkComponent.name}</td><td>{networkComponent.placement}</td></tr>))}
                </tbody>
                </table> 
            </div>
        )
    }
}
export default NetworkList;