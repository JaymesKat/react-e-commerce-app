import React from "react";
import { connect } from "react-redux";

import "./checkout-item.styles.scss";
import {
	clearItemFromCart,
	addItem,
	removeItem
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
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
				<div className='arrow' onClick={() => removeItem(cartItem)}>
					&#10094;
				</div>
				<div className='value'>{quantity}</div>
				<div className='arrow' onClick={() => addItem(cartItem)}>
					&#10095;
				</div>
			</span>
			<span className='price'>{price}</span>
			<span
				className='remove-button'
				onClick={() => clearItemFromCart(cartItem)}>
				&#10005;
			</span>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	clearItemFromCart: item => dispatch(clearItemFromCart(item)),
	addItem: item => dispatch(addItem(item)),
	removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
