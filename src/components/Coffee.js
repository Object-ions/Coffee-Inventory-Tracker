import React from "react";
import PropTypes from "prop-types";

function Coffee(props) {
  return (
    <React.Fragment>
      <div class="card" onClick = {() => props.whenCoffeeClicked(props.id)} >
        <h3>Name: {props.name}</h3>
        <h3>Origin: {props.origin}</h3>
        <h3>Roast: {props.roast}</h3>
        <h3>Weight: {props.weight}</h3>
        <h3>Price: {props.price} </h3>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;