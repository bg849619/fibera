import React, {Component} from 'react';
import { Switch , HashRouter, Route, Link} from 'react-router-dom';

import Network from './Network.jsx';
import Spec from './Spec.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    handleFile = (event) => {
        if(event.target.files.length > 0){
            const reader = new FileReader();
            reader.onload = (e) => {
                this.setState({
                    data: JSON.parse(e.target.result)
                });
            }
            reader.readAsText(event.target.files[0]);
        }
    }

    render() {
        return (
            <HashRouter>
            <div>
                <input type="file" onChange={this.handleFile} />
                <Link to="/network">Network</Link>
                <Link to="/specs">Specs</Link>
                <Switch>
                    <Route path="/network">
                        <Network network={this.data?this.data.network:[]} />
                    </Route>
                    <Route path="/specs">
                        <Spec cableSpecs={this.data?this.data.cableSpecs:[]} />
                    </Route>
                    <Route path="/">
                        <Test value={this.state.data}/>
                    </Route>
                </Switch>
            </div>
            </HashRouter>
        );
    }
}

function Test(props) {
    return(<div>
        {JSON.stringify(props.value)}
        </div>)
}

export default App;