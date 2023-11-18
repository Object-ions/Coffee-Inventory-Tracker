import React from "react";

function Coffee(props) {
  return (
    <React.Fragment>
      <h3> {props.location} - {props.names} </h3>
      <p>{props.issue}</p>
      <hr/>
    </React.Fragment>
  );
}

export default Coffee;