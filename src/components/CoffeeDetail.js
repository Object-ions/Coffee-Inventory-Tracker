import React from 'react';
import PropTypes from 'prop-types';

function CoffeeDetail(props) {

  const { coffee, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <h3>{coffee.name} - {coffee.origin}</h3>
      <h3>{coffee.roast} - {coffee.price}</h3>
      <button onClick={ props.onClickingEdit }>Update Coffee Item</button>
      <button onClick = { () => onClickingDelete(coffee.id) }>Delete Coffee Item</button>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default CoffeeDetail;