import React from 'react';
import PropTypes from 'prop-types';

function CoffeeDetail(props) {

  const { coffee } = props;

  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <h3>{coffee.name} - {coffee.location}</h3>
      <h3>{coffee.roast} - {coffee.price}</h3>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object
};

export default CoffeeDetail;