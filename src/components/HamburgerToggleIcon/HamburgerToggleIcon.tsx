import { css, keyframes } from "styled-components";
import styled from "styled-components";

interface ToggleProps {
	isChecked: boolean;
}

const topRow = keyframes`   
  0% {
    y: 0;
  }
  50% {
    y: 8;
    transform: rotate(0);

  }
  100% {
    y: 8;
    transform: rotate(45deg);
  }
`;

const topRowOut = keyframes`   
      0% {
        y: 8;
        transform: rotate(45deg);
      }
      50% {
          y: 8;
          transform: rotate(0);
          
        }
        100% {
          y: 0;
        }
`;

const middleRow = keyframes`   
  0% {
    display: block;

  }
  50% {
    display:none;
  }
  100% {
    display:none;

  }
`;

const middleRowOut = keyframes`   
      0% {
        display:none;
    
      }
      50% {
          display:none;
        }
        100% {
          display: block;
      
        }
        `;

const bottomRow = keyframes`   
  0% {
    y: 16;
  }
  50% {
    y: 8;
    transform: rotate(0);

  }
  100% {
    y: 8;
    transform: rotate(-45deg);
  }
`;

const bottomRowOut = keyframes`   
      0% {
        y: 8;
        transform: rotate(-45deg);
      }
      50% {
          y: 8;
          transform: rotate(0);
          
        }
        100% {
          y: 16;
        }
`;

const StyledSvg = styled.svg<{ isChecked: boolean }>`
	display: block;
	width: 100%;
	height: 100%;

	& rect {
		transition: all 3s ease-in-out;
		transform-box: fill-box;
		transform-origin: center;
		fill: ${({ theme }) => theme.color.primary1};

		${({ isChecked }) =>
			isChecked
				? css`
						animation: ${middleRow} 0.25s linear forwards;
				  `
				: css`
						animation: ${middleRowOut} 0.25s linear forwards;
				  `};
	}

	& rect:first-child {
		${({ isChecked }) =>
			isChecked
				? css`
						animation: ${topRow} 0.25s linear forwards;
				  `
				: css`
						animation: ${topRowOut} 0.25s linear forwards;
				  `};
	}

	& rect:last-child {
		transform: all 0.25s ease-in-out;
		${({ isChecked }) =>
			isChecked
				? css`
						animation: ${bottomRow} 0.25s linear forwards;
				  `
				: css`
						animation: ${bottomRowOut} 0.25s linear forwards;
				  `};
	}
`;

export const HamburgerToggleIcon = ({ isChecked }: ToggleProps) => {
	return (
		<StyledSvg
			isChecked={isChecked}
			width="23"
			height="20"
			viewBox="0 0 23 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="23" height="4" rx="2" />
			<rect y="8" width="23" height="4" rx="2" />
			<rect y="16" width="23" height="4" rx="2" />
		</StyledSvg>
	);
};
