import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {

  const { defaultValues } = props;

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type='text' name='name' placeholder='Coffee name' defaultValue={defaultValues ? defaultValues.name : ''} required/>
        <input type='text' name='origin' placeholder='Coffee origin' defaultValue={defaultValues ? defaultValues.origin : ''} required/>
        <select name='roast' defaultValue='Light' required>
          <option value='Light'>Light Roast</option>
          <option value='Medium'>Medium Roast</option>
          <option value='Dark'>Dark Roast</option>
        </select>
        <input type='number' name='weight' placeholder='burlap sack in lb' defaultValue='130' min='0' max='500'/>
        <input type='number' name='price' placeholder='Price' defaultValue={defaultValues ? defaultValues.price : ''} required/>

        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  defaultValues: PropTypes.object
}

export default ReusableForm;