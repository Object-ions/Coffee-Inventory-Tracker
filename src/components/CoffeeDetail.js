import React from 'react';
import PropTypes from 'prop-types';

function CoffeeDetail(props) {

  const { coffee, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <h3>{coffee.name} - {coffee.origin}</h3>
      <h3>{coffee.roast} - {coffee.price}</h3>
      <button onClick = { () => onClickingDelete(coffee.id) }>Delete Coffee Item</button>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default CoffeeDetail;