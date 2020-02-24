import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Logo } from "../../assets/swift.svg";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { auth } from "./../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import {
	HeaderContainer,
	OptionsContainer,
	OptionLink,
	LogoContainer
} from "./header.styles";

const Header = ({ currentUser, hidden }) => (
	<HeaderContainer>
		<LogoContainer to='/'>
			<Logo />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to='/shop'>SHOP</OptionLink>
			<OptionLink as='div' to='/contact'>
				CONTACT
			</OptionLink>
			{currentUser ? (
				<div onClick={() => auth.signOut()}>SIGN OUT</div>
			) : (
				<OptionLink to='/signin'>SIGN IN</OptionLink>
			)}
			<CartIcon />
		</OptionsContainer>
		{hidden ? null : <CartDropdown />}
	</HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
