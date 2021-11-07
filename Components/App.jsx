import React, {Component} from 'react';
import { Switch , HashRouter, Route, Link} from 'react-router-dom';

import {GlobalContext} from './GlobalContext.js';
import Network from './Network.jsx';
import Spec from './Spec.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            filename: null,
            changed: false,
            getComponent = (id) => {
                for(let i in this.state.data.network)
                    if(this.state.data.network[i].id == id)
                        return this.state.data.network[i];
                return null;
            },
            setComponent = (id, value) => {
                for(let i in this.state.data.network)
                    if(this.state.data.network[i].id == id){
                        let network = this.state.data.network;
                        network[i] = value;
                        this.setState(state => ({
                            data: {...state.data, network},
                            changed: true
                        }));
                    }
            },
            getCableSpec = (id) => {
                for(let i in this.state.data.cableSpec)
                    if(this.state.data.cableSpec[i].id == id)
                        return this.state.data.cableSpec[i];
            },
            setCableSpec = (id, value) => {
                for(let i in this.state.data.cableSpec)
                    if(this.state.data.cableSpec[i].id == id){
                        let cableSpec = this.state.data.cableSpec;
                        cableSpec[i] = value;
                        this.setState(state => ({
                            data: {...state.data, cableSpec},
                            changed: true
                        }));
                    }
            },
            getSplitterSpec = (id) => {
                for(let i in this.state.data.splitterSpec)
                    if(this.state.data.splitterSpec[i].id == id)
                        return this.state.data.splitterSpec[i];
            },
            setSplitterSpec = (id, value) => {
                for(let i in this.state.data.splitterSpec)
                    if(this.state.data.splitterSpec[i].id == id){
                        let splitterSpec = this.state.data.splitterSpec;
                        splitterSpec[i] = value;
                        this.setState(state => ({
                            data: {...state.data, splitterSpec},
                            changed: true
                        }));
                    }
            },
            saveData = () => {
                let element = document.createElement('a');
                element.setAttribute('href', 'data:text/plain;charset=utf-8,'+encodeURIComponent(JSON.stringify(this.state.data)));
                element.setAttribute('download', this.state.filename || "network.fibera");
                element.style.display = 'none';
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
            }
        }
    }

    handleFile = (event) => {
        if(event.target.files.length > 0){
            const reader = new FileReader();
            reader.onload = (e) => {
                this.setState({
                    data: JSON.parse(e.target.result),
                    filename: e.target.value
                });
            }
            reader.readAsText(event.target.files[0]);
        }
    }

    render() {
        return (
            <GlobalContext.Provider value={this.state}>
            <HashRouter>
            <div>
                <input type="file" onChange={this.handleFile} />
                <Link to="/">Home</Link>
                <Link to="/network">Network</Link>
                <Link to="/specs">Specs</Link>
                <Switch>
                    <Route path="/network">
                        <Network network={this.state.data?this.state.data.network:[]} />
                    </Route>
                    <Route path="/specs">
                        <Spec cableSpec={this.state.data?this.state.data.cableSpec:[]} splitterSpec={this.state.data?this.state.data.splitterSpec:[]} />
                    </Route>
                    <Route path="/">
                        <Home loadFile={} saveFile={}/>
                    </Route>
                </Switch>
            </div>
            </HashRouter>
            </GlobalContext.Provider>
        );
    }
}

function Home(props) {
    return(<div></div>)
}

export default App;