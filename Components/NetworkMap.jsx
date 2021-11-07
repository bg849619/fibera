import React, {Component} from 'react';
import {GoogleMap, LoadScript, Polyline} from '@react-google-maps/api';

class NetworkMap extends Component {
    constructor(props) {
        super(props);

        this.state={
            loaded: false,
        }
        console.log(this.props.networkComponents.filter(component => (component.type == 'cable')));
    }

    render() {

        const options = {
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 3,
            fillColor: '#FF0000',
            fillOpacity: '0.4',
            clickable: false,
            draggable: false,
            editable: false,
            visible: true,
        }

        return (
            <div>
                NetworkMap
                <LoadScript googleMapsApiKey="AIzaSyAdNbvfd4xE4OKnh_YpAJtfDp5VbWSimNY">
                    <GoogleMap
                        mapContainerClassName="mapContainer"
                        center={{lat: -3.745, lng: -38.523}}
                        zoom={10}
                        center={{lat: 39.33185634274213, lng: -83.40897022618257}}
                        onClick={(e) => {console.log({lat: e.latLng.lat(), lng: e.latLng.lng()})}}
                        >
                        {this.props.networkComponents?
                        this.props.networkComponents.filter(component => (component.type == "cable")).map(cable => (
                            <Polyline key={cable.id} path={cable.path} options={options} />
                        )):<></>}
                    </GoogleMap>
                </LoadScript>
            </div>
        );
    }
}

export default NetworkMap;