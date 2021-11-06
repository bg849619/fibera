import React, {Component} from 'react';
import {Route, Link, useParams} from 'react-router-dom';

import NetworkList from './NetworkList.jsx';
import NetworkMap from './NetworkMap.jsx';

class Network extends Component {
    constructor(props){
        super(props);
    }

    render() {
        <div>
            <div className="networkNav">
                <Link to='./list'>List</Link>
                <Link to='./'>Map</Link>
            </div>

            <Switch>
                <Route path="./list">
                    <NetworkList networkComponents={this.props.network} />
                </Route>
                <Route path="./">
                    <NetworkMap networkComponents={this.props.network} />
                </Route>
            </Switch>
        </div>
    }
}

export default Network;