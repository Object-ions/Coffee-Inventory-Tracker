import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';


function EditCoffeeForm (props) {
  const { coffee } = props;

  function handleEditCoffeeFormSubmission(e) {
    e.preventDefault();
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditCoffeeFormSubmission}
        buttonText="Update Coffee Item"
        defaultValues={coffee} />
    </React.Fragment>
  );
}

EditCoffeeForm.propTypes = {
  coffee: PropTypes.object
};

export default EditCoffeeForm;