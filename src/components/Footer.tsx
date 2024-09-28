import styled from "styled-components";

const FooterContainer = styled.div`
	display: grid;
	padding: 2rem 1rem;
	background-color: #333;
	color: white;
	@media (min-width: 768px) {
		grid-template-columns: repeat(5, 1fr);
		gap: 1rem;
	}
	gap: 0.5rem;
`;

const FooterInfoContainer = styled.div`
	grid-column: 1 / -1;

	@media (min-width: 768px) {
		grid-column: 1 / span 2;
		text-align: left;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 1rem;
	}
`;

const FooterLinks = styled.div`
	display: flex;
	flex-direction: column;

	gap: 0.5rem;
	@media (min-width: 768px) {
		grid-column: span 1;
		align-items: flex-start;
	}
`;

const FooterLink = styled.a`
	text-decoration: none;
	color: white;
	font-size: 1rem;

	&:hover {
		text-decoration: underline;
	}
`;

const FooterLogo = styled.div`
	font-size: 1.5rem;
	font-weight: bold;
`;

const Footer = () => {
	return (
		<FooterContainer>
			<FooterInfoContainer>
				<FooterLogo>Logo</FooterLogo>
				<p>Contact: Lorem ipsum dolor sit amet</p>
				<p>Telephone number: xxxxxxxxxx</p>
			</FooterInfoContainer>
			<FooterLinks>
				<FooterLink href="#">Home</FooterLink>
				<FooterLink href="#">About</FooterLink>
				<FooterLink href="#">Contact</FooterLink>
				<FooterLink href="#">Services</FooterLink>
				<FooterLink href="#">Blog</FooterLink>
			</FooterLinks>
			<FooterLinks>
				<FooterLink href="#">Privacy Policy</FooterLink>
				<FooterLink href="#">Terms of Service</FooterLink>
				<FooterLink href="#">FAQ</FooterLink>
				<FooterLink href="#">Support</FooterLink>
				<FooterLink href="#">Careers</FooterLink>
			</FooterLinks>
			<FooterLinks>
				<FooterLink href="#">Facebook</FooterLink>
				<FooterLink href="#">Twitter</FooterLink>
				<FooterLink href="#">Instagram</FooterLink>
				<FooterLink href="#">LinkedIn</FooterLink>
				<FooterLink href="#">YouTube</FooterLink>
			</FooterLinks>
		</FooterContainer>
	);
};

export default Footer;
