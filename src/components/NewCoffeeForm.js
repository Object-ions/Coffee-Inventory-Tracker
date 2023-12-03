import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function newCoffeeForm(props) {
  function handleNewCoffeeFormSubmission(e) {
    e.preventDefault();
    props.onNewCoffeeCreation({
      name: e.target.name.value,
      origin: e.target.origin.value,
      roast: e.target.roast.value,
      weight: parseFloat(e.target.weight.value),
      price: parseFloat(e.target.price.value),
      id: v4(),
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewCoffeeFormSubmission}
        buttonText="Save"
      />
    </React.Fragment>
  );
}

newCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func,
};

export default newCoffeeForm;
