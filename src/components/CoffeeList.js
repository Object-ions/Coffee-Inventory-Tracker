import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import Coffee from "./Coffee";

function CoffeeList(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.coffeeList.map((coffee, index) => 
        <Coffee name={coffee.name}
          origin={coffee.origin}
          price={coffee.price}
          roast={coffee.roast}
          id={v4()}
          key={coffee.index}/>
      )}
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array
};

export default CoffeeList;