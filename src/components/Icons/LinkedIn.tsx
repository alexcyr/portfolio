import styled from "styled-components";

const StyledSvg = styled.svg`
	& path {
		fill: ${({ theme }) => theme.color.primary1};
	}
`;

export const LinkedInIcon = () => {
	return (
		<StyledSvg
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			width={32}
			height={32}
			x="0px"
			y="0px"
			viewBox="0 0 256 256"
			enableBackground="new 0 0 256 256"
		>
			<g>
				<g>
					<path
						fill={"#fff"}
						d="M128,10C62.8,10,10,62.8,10,128c0,65.2,52.8,118,118,118c65.2,0,118-52.8,118-118C246,62.8,193.2,10,128,10z M99.1,176.9H75.2V100h23.9V176.9z M87,90.6c-7.5,0-12.4-5.3-12.4-12c0-6.7,5-11.9,12.7-11.9s12.4,5.2,12.6,11.9C99.9,85.2,95,90.6,87,90.6z M186.4,176.9h-23.9v-42.6c0-9.9-3.5-16.7-12.1-16.7c-6.6,0-10.5,4.6-12.3,9c-0.6,1.6-0.8,3.8-0.8,6v44.3h-23.9v-52.4c0-9.6-0.3-17.6-0.6-24.5h20.8l1.1,10.7h0.5c3.2-5,10.9-12.4,23.7-12.4c15.7,0,27.5,10.5,27.5,33.2L186.4,176.9L186.4,176.9z"
					/>
				</g>
			</g>
		</StyledSvg>
	);
};
