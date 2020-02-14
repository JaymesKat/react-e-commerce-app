import React from "react";
import { connect } from 'react-redux'

import "./checkout-item.styles.scss";
import { clearItemFromCart } from "../../redux/cart/cart.actions";

const CheckoutItem = ({
    cartItem,
    clearItemFromCart
}) => {
    const { name, imageUrl, price, quantity, description } = cartItem
    return (
	<div className='checkout-item'>
		<div className='image-container'>
			<img src={imageUrl} alt={name} />
		</div>
		<span className='name'>{name}</span>
		<span className='description'>{description}</span>
		<span className='quantity'>{quantity}</span>
		<span className='price'>{price}</span>
		<span className='remove-button' onClick={() => clearItemFromCart(cartItem)}>&#10005;</span>
	</div>
)};

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
