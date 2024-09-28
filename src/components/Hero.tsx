import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background: url("https://picsum.photos/1920/1080") no-repeat center center/cover;
	color: white;
	text-align: center;
	padding: 0 1rem;

	@media (max-width: 768px) {
		height: 70vh;
	}
`;

const HeroTitle = styled.h1`
	font-size: 3rem;
	margin-bottom: 1rem;

	@media (max-width: 768px) {
		font-size: 2rem;
	}
`;

const HeroSubtitle = styled.p`
	font-size: 1.5rem;
	margin-bottom: 2rem;

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;

const CallToActionButton = styled.button`
	padding: 0.75rem 1.5rem;
	font-size: 1rem;
	color: white;
	background-color: #008cba;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #005f7f;
	}

	@media (max-width: 768px) {
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
	}
`;

const Hero = () => {
	return (
		<HeroContainer>
			<HeroTitle>Welcome to Our Website</HeroTitle>
			<HeroSubtitle>Your success is our priority</HeroSubtitle>
			<CallToActionButton>Get Started</CallToActionButton>
		</HeroContainer>
	);
};

export default Hero;
