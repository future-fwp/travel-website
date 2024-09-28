import React, { useState } from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	background-color: #333;
	color: white;
	@media (max-width: 768px) {
		display: none;
	}
`;

const NavbarMobileContainer = styled.div`
	@media (max-width: 768px) {
		display: flex;
		justify-content: space-between;
		padding: 1rem;
		background-color: #333;
		color: white;
	}
	display: none;
`;

const Logo = styled.div`
	font-size: 1.5rem;
	font-weight: bold;
`;

const Hamburger = styled.div`
	display: none;
	flex-direction: column;
	cursor: pointer;

	span {
		height: 3px;
		width: 25px;
		margin-bottom: 4px;
		background-color: white;
		border-radius: 5px;
	}

	@media (max-width: 768px) {
		display: flex;
	}
`;

const NavMenu = styled.div<{ open: boolean }>`
	display: flex;
	gap: 1rem;
`;

const NavMenuMobile = styled.div`
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		width: calc(100% - 2rem);

		background-color: #333;
		padding: 1rem;
		transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
		transition: transform 0.3s ease-in-out;
	}
	display: none;
`;

const StyledNavLink = styled.a`
	color: white;
	text-decoration: none;
	padding: 0.5rem 1rem;
`;

const AuthButtons = styled.div`
	display: flex;
	gap: 0.5rem;
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		width: calc(100% - 2rem);
		position: absolute;
		top: 60px;
		left: 0;
		background-color: #333;
		padding: 1rem;
	}
`;

const Button = styled.button`
	padding: 0.5rem 1rem;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	color: white;

	&.sign-up {
		background-color: #4caf50;
	}
	&.sign-in {
		background-color: #008cba;
	}
	@media (max-width: 768px) {
		width: calc(100% - 2rem);
	}
`;

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<div>
			<NavbarContainer>
				<Logo>Logo</Logo>
				<NavMenu open={showMenu}>
					<StyledNavLink href="#">Home</StyledNavLink>
					<StyledNavLink href="#">About</StyledNavLink>
					<StyledNavLink href="#">Service</StyledNavLink>
					<StyledNavLink href="#">Contact</StyledNavLink>
				</NavMenu>
				<AuthButtons>
					<Button className="sign-up">Sign up</Button>
					<Button className="sign-in">Sign in</Button>
				</AuthButtons>
			</NavbarContainer>
			<NavbarMobileContainer>
				<Logo>Logo</Logo>
				<Hamburger onClick={() => setShowMenu(!showMenu)}>
					<span></span>
					<span></span>
					<span></span>
				</Hamburger>
			</NavbarMobileContainer>
			<NavMenuMobile open={showMenu}>
				<StyledNavLink href="#">Home</StyledNavLink>
				<StyledNavLink href="#">About</StyledNavLink>
				<StyledNavLink href="#">Service</StyledNavLink>
				<StyledNavLink href="#">Contact</StyledNavLink>
				<Button className="sign-up">Sign up</Button>
				<Button className="sign-in">Sign in</Button>
			</NavMenuMobile>
		</div>
	);
};

export default Navbar;
