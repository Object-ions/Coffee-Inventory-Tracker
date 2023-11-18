import React, { Fragment } from "react";
import Coffee from "./Coffee";

const mainCoffeeList = [
  {

  },
  {

  },
  {

  }
];

function CoffeeList() {
  return (
    <React.Fragment>
      <Coffee
        location="Cello1"
        names="Moses and Poston"
        roast="No Issue" />
      <Coffee 
      location="cello-2"
      names="Xtine and Danny"
      issue="No Issue"/>
    </React.Fragment>
  );
}

export default CoffeeList;