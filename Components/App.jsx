import React, {Component} from 'react';
import { Switch , HashRouter, Route, Link} from 'react-router-dom';

import {GlobalContext} from './GlobalContext';
import Network from './Network.jsx';
import Spec from './Spec.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            filename: null,
            changed: false,
            getAllData: () => {
                return this.state.data;
            },
            getComponent: (id) => {
                for(let i in this.state.data.network)
                    if(this.state.data.network[i].id == id)
                        return this.state.data.network[i];
                return null;
            },
            setComponent: (id, value) => {
                for(let i in this.state.data.network)
                    if(this.state.data.network[i].id == id){
                        let network = this.state.data.network;
                        network[i] = value;
                        this.setState(state => ({
                            data: {...state.data, network},
                            changed: true
                        }));
                        return;
                    }
            },
            addComponent: (value) => {
                let id = this.findNewId('network');
                let network = this.state.data.network;
                network.push({...value, id});
                this.setState(state => ({
                    data: {...state.data, network}
                }));
            },
            deleteComponent: (id) => {
                let network = this.state.data.network;
                for(let i = 0; i < network.length; i++){
                    if(network[i].id == id){
                        network.splice(i, 1);
                        i++;
                    }
                    // Delete any junction maps to this component.
                    else if(network[i].type == 'junction'){
                        for(let j = 0; j < network[i].map.length; j++){
                            if(network[i].map[j][0].component == id || network[i].map[j][1].component == id){
                                network[i].map.splice(j, 1);
                                j--;
                            }
                        }
                    }
                    // Delete splitters that might rely on this component.
                    else if(network[i].type == 'splitter' && network[i].junction == id){
                        network.splice(i, 1)
                        i++;
                    }
                }
            },
            getCableSpec: (id) => {
                for(let i in this.state.data.cableSpec)
                    if(this.state.data.cableSpec[i].id == id)
                        return this.state.data.cableSpec[i];
            },
            addCableSpec: (value) => {
                let id = this.findNewId('cableSpec');
                let cableSpec = this.state.data.cableSpec;
                cableSpec.push({...value, id});
                this.setState(state => ({
                    data: {...state.data, cableSpec}
                }));
            },
            getSplitterSpec: (id) => {
                for(let i in this.state.data.splitterSpec)
                    if(this.state.data.splitterSpec[i].id == id)
                        return this.state.data.splitterSpec[i];
            },
            addSplitterSpec: (value) => {
                let id = this.findNewId('splitterSpec');
                let splitterSpec = this.state.data.splitterSpec;
                splitterSpec.push({...value, id});
                this.setState(state => ({
                    data: {...state.data, splitterSpec}
                }));
            },
            saveData: () => {
                let element = document.createElement('a');
                element.setAttribute('href', 'data:text/plain;charset=utf-8,'+encodeURIComponent(JSON.stringify(this.state.data)));
                element.setAttribute('download', this.state.filename || "network.fibera");
                element.style.display = 'none';
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
                this.setState({changed: false})
            }
        }
    }

    findNewId = (dataIndex) => {
        let highId = 0;
        for(let i in this.state.data[dataIndex])
            if(this.state.data[dataIndex][i] > highId)
                highId = this.state.data[dataIndex][i].id;

        return highId + 1;
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
                {this.state.changed?<button onClick={this.state.saveData.bind(this)}>Save Changes</button>:<></>}
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
                        <Home/>
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