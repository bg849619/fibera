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
                <tr><th>Name</th><th>ID</th></tr>
                </thead>
                <tbody>
                {this.props.networkComponents.map(networkComponent => (
                <tr><td>{networkComponent.id}</td><td>{networkComponent.type}</td></tr>))}
                </tbody>
                </table> 
            </div>
        )
    }
}
export default NetworkList;