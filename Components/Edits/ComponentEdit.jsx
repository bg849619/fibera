import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import {GlobalContext} from '../GlobalContext.js';
import JunctionEdit from './JunctionEdit.jsx';
import CableEdit from './CableEdit.jsx';

class ComponentEdit extends Component {
    static contextType = GlobalContext;
    constructor(props){
        super(props);
    }

    render() {
        let Page;
        let component = this.context.getComponent(this.props.match.params.id);
        
        switch(component.type){
            case 'cable': 
                Page = CableEdit;
                break;
            case 'junction':
                Page = JunctionEdit;
                break;
            default:
                Page = null;
        }

        return(<Page value={component} />);
    }
}

export default withRouter(ComponentEdit);