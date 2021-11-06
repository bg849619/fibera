import React, {Component} from 'react';
class NetworkList extends Component{
    constructor(props){
    super(props);
    }
    render(){
        return(
            <div>
                <table>
                <tr><th>Name</th><th>ID</th></tr>
                {this.props.networkComponents.map(networkComponent => (
                <tr><td>{networkComponent.id}</td><td>{networkComponent.type}</td></tr>))}
                </table> 
            </div>
        )
    }
}
export default NetworkList;