import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props) {
  const { coffee, onClickingDelete, onSellPound } = props;

  return (
    <div>
      <h1>Coffee Detail</h1>
      <h3>
        Name : <b>{coffee.name}</b>
      </h3>
      <h3>
        Origin: <b>{coffee.origin}</b>
      </h3>
      <h3>
        Roast: <b>{coffee.roast}</b>
      </h3>
      <h3>
        Weight: <b>{coffee.weight}</b> pounds
      </h3>
      <h3>
        Price: <b>{coffee.price}</b> $ per pound
      </h3>
      <button onClick={() => onSellPound(coffee.id)}>Sell 1 pound</button>

      <div className="detail">
        <button onClick={props.onClickingEdit}>Update Coffee Item</button>
        <button onClick={() => onClickingDelete(coffee.id)}>
          Delete Coffee Item
        </button>
      </div>
    </div>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onSellPound: PropTypes.func,
};

export default CoffeeDetail;
