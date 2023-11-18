import React from "react";

function newCoffeeForm(props) {

  function handleNewCoffeeFormSubmission(e) {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.origin.value);
    console.log(e.target.roast.value);
    console.log(e.target.price.value);
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

export default newCoffeeForm;