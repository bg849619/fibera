import React, {Component} from 'react';
class NetworkList extends Component{
    constructor(props){
        super(props);
        this.state = {search:""};
    }
    handleChange(e){
        this.setState({
            search:e.target.value
        })
    }
    render(){
        return(
            <div>
                <button>+</button>
                <input type="text" value={this.state.search} onChange={this.handleChange.bind(this)}/> 
                <table>
                <thead>
                <tr><th>ID</th><th>Type</th><th>Name</th><th>Placement</th></tr>
                </thead>
                <tbody>
                {this.props.networkComponents.filter(component => (component.id.toString().includes(this.state.search) || (component.name && component.name.includes(this.state.search)))).map(networkComponent => (
                <tr><td>{networkComponent.id}</td><td>{networkComponent.type}</td><td>{networkComponent.name}</td><td>{networkComponent.placement}</td></tr>))}
                </tbody>
                </table> 
            </div>
        )
    }
}
export default NetworkList;