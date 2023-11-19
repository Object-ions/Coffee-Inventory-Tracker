import React from 'react';
import ReusableForm from './ReusableForm';


function EditCoffeeForm (props) {
  return (
    <React.Fragment>
      <ReusableForm 
        buttonText = "Update Coffee Item" />
    </React.Fragment>
  );
}

export default EditCoffeeForm;