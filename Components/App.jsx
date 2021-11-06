import React, {Component} from 'react';
import {hot} from 'react-hot-loader/root';
import { Switch , HashRouter, Route, Link} from 'react-router-dom';

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
                <Link to="/test" >Test</Link>
                <Switch>
                    <Route path="/test">
                        <Test value="hello" />
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