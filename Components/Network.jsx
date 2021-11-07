import React, {Component} from 'react';
import {Route, Link, Switch, useParams} from 'react-router-dom';

import NetworkList from './NetworkList.jsx';
import NetworkMap from './NetworkMap.jsx';

import ComponentEdit from './Edits/ComponentEdit.jsx';

class Network extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
        <div>
            <div className="networkNav">
                <Link to='/network/list'>List</Link>
                <Link to='/network'>Map</Link>
            </div>

            <Switch>
                <Route path="/network/list">
                    <NetworkList networkComponents={this.props.network} />
                </Route>
                <Route path="/edit/:id">
                    <ComponentEdit />
                </Route>
                <Route path="/network">
                    <NetworkMap networkComponents={this.props.network} />
                </Route>
            </Switch>
        </div>
        );
    }
}

export default Network;