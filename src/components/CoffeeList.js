import React from "react";
import { v4 } from 'uuid';
import Coffee from "./Coffee";

const mainCoffeeList = [
  {
    name: "Arabica",
    origin: "Ethiopia",
    price: "$ 6.99",
    roast: "Medium"
  },
  {
    name: "Robusta",
    origin: "Uganda",
    price: "$ 6.99",
    roast: "Medium"
  },
  {
    name: "Liberica",
    origin: "Liberia",
    price: "$ 6.99",
    roast: "Medium"
  },

];

function CoffeeList() {
  return (
    <React.Fragment>
      <hr/>
      {mainCoffeeList.map((coffee, index) => 
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

export default CoffeeList;