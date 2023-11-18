import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function newCoffeeForm(props) {

  function handleNewCoffeeFormSubmission(e) {
    e.preventDefault();
    props.onNewTicketCreation({
      name: e.target.name.value,
      origin: e.target.origin.value,
      roast: e.target.roast.value,
      price: parseInt(e.target.price.value),
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewCoffeeFormSubmission}>
        <input type='text' name='name' placeholder='Coffee name'/>
        <input type='text' name='origin' placeholder='Coffee origin'/>
        <input type='text' name='roast' placeholder='Roast'/>
        <input type='text' name='price' placeholder='Price'/>

        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}

newCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func
};

export default newCoffeeForm;