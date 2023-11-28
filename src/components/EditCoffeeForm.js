import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditCoffeeForm(props) {
  const { coffee } = props;
  function handleEditCoffeeFormSubmission(e) {
    e.preventDefault();
    props.onEditCoffee({
      name: e.target.name.value,
      origin: e.target.origin.value,
      roast: e.target.roast.value,
      weight: e.target.weight.value,
      price: e.target.price.value,
      id: coffee.id,
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditCoffeeFormSubmission}
        buttonText="Update Coffee"
      />
    </React.Fragment>
  );
}

EditCoffeeForm.propTypes = {
  coffee: PropTypes.object,
  onEditCoffee: PropTypes.func,
};

export default EditCoffeeForm;
