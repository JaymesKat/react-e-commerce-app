import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

	const onToken = token => {
		console.log(token);
		alert("Payment successful");
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='Slick Wear Ltd'
			billingAddress
			shippingAddress
			image='https://bit.ly/2ubyxEO'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
