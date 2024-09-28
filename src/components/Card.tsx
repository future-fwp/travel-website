import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
	border: 1px solid #ddd;
	border-radius: 8px;
	padding: 1rem;
	margin: 1rem;
	background-color: #fff;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h2`
	font-size: 1.5rem;
	margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
	font-size: 1rem;
	margin-bottom: 0.5rem;
`;

const CardDate = styled.p`
	font-size: 0.875rem;
	color: #666;
`;

const CardType = styled.p`
	font-size: 0.875rem;
	color: #666;
`;

const Card = ({ place }: { place: any }) => {
	return (
		<CardContainer>
			<CardTitle>{place.name}</CardTitle>
			<CardDescription>{place.description}</CardDescription>
			<CardDate>Date: {place.date}</CardDate>
			<CardType>Type: {place.type}</CardType>
		</CardContainer>
	);
};

export default Card;
