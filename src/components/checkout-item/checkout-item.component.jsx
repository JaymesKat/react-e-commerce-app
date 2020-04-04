import React from "react";
import { useDispatch } from "react-redux";

import "./checkout-item.styles.scss";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity, description } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='description'>
        <div className='value'>{description}</div>
      </span>

      <span className='quantity'>
        <div
          className='arrow'
          onClick={(cartItem) => dispatch(removeItem(cartItem))}
        >
          &#10094;
        </div>
        <div className='value'>{quantity}</div>
        <div
          className='arrow'
          onClick={(cartItem) => dispatch(addItem(cartItem))}
        >
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <span
        className='remove-button'
        onClick={(cartItem) => dispatch(clearItemFromCart(cartItem))}
      >
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
