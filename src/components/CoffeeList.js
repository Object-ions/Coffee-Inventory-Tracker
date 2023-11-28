import React from "react";
import PropTypes from "prop-types";
import Coffee from "./Coffee";

function CoffeeList(props) {
  return (
    <React.Fragment>
      {props.coffeeList.map((coffee) => (
        <Coffee
          whenCoffeeClicked={props.onCoffeeSelection}
          name={coffee.name}
          origin={coffee.origin}
          price={coffee.price}
          roast={coffee.roast}
          weight={coffee.weight}
          id={coffee.id}
          key={coffee.id}
        />
      ))}
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func,
};

export default CoffeeList;
