import React, {Component} from 'react';
import {GoogleMap, InfoWindow, LoadScript, Polyline, Marker} from '@react-google-maps/api';

import ComponentMapPopup from './ComponentMapPopup';
import {GlobalContext} from './GlobalContext.js';

class NetworkMap extends Component {
    static contextType = GlobalContext;
    constructor(props) {
        super(props);

        this.state={
            loaded: false,
            popupComponent: null,
            popupPos: null,
            editingComponent: null,
            mapCenter: {lat: 39.33185634274213, lng: -83.40897022618257}
        }
    }

    handleMapClick(e) {
        if(this.state.popupComponent)
            this.setState({
                popupComponent: null,
            });
        console.log(e);
    }

    handleComponentClick(id, e) {
        let component;
        for(let i in this.props.networkComponents)
            if(this.props.networkComponents[i].id == id)
                component = this.props.networkComponents[i];
        
        this.setState({
            popupComponent: component,
            popupPos: {lat: e.latLng.lat(), lng: e.latLng.lng()}
        });
    }

    handleCableEdit(e) {
        let a = (e.edge !== undefined?0:1);
        let index = e.edge || e.vertex;
        let path = this.state.editingComponent.path;
        path.splice(index, a, {lat: e.latLng.lat(), lng: e.latLng.lng()});
        this.setState(state => ({
            editingComponent: {...state.editingComponent, path}
        }));
    }

    handleJunctionEdit(e) {
        this.setState(state => ({
            editingComponent: {...state.editingComponent, position: {lat: e.latLng.lat(), lng: e.latLng.lng()}}
        }));
    }

    handleMoveComponent(component) {
        this.setState({
            popupComponent: null,
            editingComponent: component
        });
    }

    endEdit() {
        this.context.setComponent(this.state.editingComponent.id, this.state.editingComponent);
        this.setState({
            editingComponent: null
        });
    }

    clearCenter() {
        this.setState({
            center: null
        });
    }

    render() {

        const options = {
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 3,
            fillColor: '#FF0000',
            fillOpacity: '0.4',
            clickable: true,
            draggable: false,
            editable: false,
            visible: true,
        }

        const markerOptions = {

        }

        return (
            <div>
                NetworkMap
                {this.state.editingComponent?(<button onClick={this.endEdit.bind(this)} >Save</button>):<></>}
                <LoadScript googleMapsApiKey="AIzaSyAdNbvfd4xE4OKnh_YpAJtfDp5VbWSimNY">
                    <GoogleMap
                        mapContainerClassName="mapContainer"
                        zoom={10}
                        onLoad={(e) => {this.clearCenter.bind(this)}}
                        center={this.state.mapCenter}
                        onClick={(e) => {this.handleMapClick(e)}} >
                        {
                            (this.props.networkComponents && !this.state.editingComponent)?
                            this.props.networkComponents.filter(component => (component.type == "cable" )).map(cable => (
                                <Polyline key={cable.id} path={cable.path} options={options} onClick={(e) => {this.handleComponentClick(cable.id, e)}}  />
                            )):<></>
                        }

                        {
                            (this.props.networkComponents && !this.state.editingComponent)?
                            this.props.networkComponents.filter(component => (component.type == 'junction')).map(junction => (
                                <Marker key={junction.id} position={junction.location} onClick={(e) => {this.handleComponentClick(junction.id, e)}}/>
                            )):<></>
                        }

                        {
                            (this.state.editingComponent && this.state.editingComponent.type=="cable")?
                            <Polyline path={this.state.editingComponent.path} options={{...options, editable: true}} onMouseUp={this.handleCableEdit.bind(this)} />
                            :<></>
                        }

                        {
                            (this.state.editingComponent && this.state.editingComponent.type=="junction")?
                                <Marker position={this.state.editingComponent.location} options={{draggable: true}} onMouseUp={this.handleJunctionEdit.bind(this)} />
                                :<></>
                        }


                        {this.state.popupComponent?
                        <InfoWindow position={this.state.popupPos} onCloseClick={this.handleMapClick.bind(this)}>
                            <ComponentMapPopup value={this.state.popupComponent} handleMove={this.handleMoveComponent.bind(this)}  />
                        </InfoWindow>
                        :<></>}
                    </GoogleMap>
                </LoadScript>
            </div>
        );
    }
}

export default NetworkMap;