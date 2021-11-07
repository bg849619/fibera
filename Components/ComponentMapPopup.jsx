import React from "react";

function ComponentMapPopup(props) {
    return(<div className="mapPopup">
        <h3>{props.value.name}</h3>
        <h4>{props.value.type}:{props.value.id}</h4>
        <button onClick={() => {props.handleMove(props.value)}}>Move</button>
        </div>
    );
}

export default ComponentMapPopup;