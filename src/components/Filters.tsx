import React from "react";
import styled from "styled-components";

const FilterButton = styled.button`
	padding: 0.5rem 1rem;
	margin: 0.5rem;
	border: none;
	border-radius: 4px;
	background-color: #008cba;
	color: white;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #005f7f;
	}
`;

// grid layout responsive
// md 768 px

const FiltersContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 1rem;
`;

const Filters = ({ onFilter }: { onFilter: (filter: string) => void }) => {
	return (
		<FiltersContainer>
			<FilterButton onClick={() => onFilter("date")}>Filter by Date</FilterButton>
			<FilterButton onClick={() => onFilter("type")}>Filter by Type</FilterButton>
		</FiltersContainer>
	);
};

export default Filters;
