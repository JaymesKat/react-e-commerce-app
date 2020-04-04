import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as Logo } from "../../assets/swift.svg";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { signOutStart } from "../../redux/user/user.actions"
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import {
	HeaderContainer,
	OptionsContainer,
	OptionLink,
	LogoContainer
} from "./header.styles";

const Header = () => {

	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);
	const hidden = useSelector(selectCartHidden);

	return (
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
					<OptionLink as='div' onClick={() => dispatch(signOutStart())}>SIGN OUT</OptionLink>
				) : (
					<OptionLink to='/signin'>SIGN IN</OptionLink>
				)}
				<CartIcon />
			</OptionsContainer>
			{hidden ? null : <CartDropdown />}
		</HeaderContainer>
	)
};

export default Header;
