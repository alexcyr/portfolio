import { css, keyframes } from "styled-components";
import styled from "styled-components";

interface ToggleProps {
	isChecked: boolean;
}

const topRow = keyframes`   
  0% {
  }
  50% {
    transform: translateY(200%);

  }
  100% {
    transform: translateY(200%) rotate(45deg);

    /* transform: rotate(45deg); */
  }
`;

const topRowOut = keyframes`   
      0% {
        transform: translateY(200%) rotate(45deg);
      }
      50% {
          transform: translateY(200%) ;
          
        }
        100% {
       
        }
`;

const middleRow = keyframes`   
  0% {
    visibility: visible;

  }
  50% {
    visibility: hidden;
  }
  100% {
    visibility: hidden;

  }
`;

const middleRowOut = keyframes`   
      0% {
        visibility: hidden;
    
      }
      50% {
          visibility: hidden;
        }
        100% {
          visibility: visible;
      
        }
        `;

const bottomRow = keyframes`   
  0% {
  }
  50% {
    transform: translateY(-200%);

  }
  100% {
    transform: translateY(-200%) rotate(-45deg) ;
  }
`;

const bottomRowOut = keyframes`   
      0% {
        transform: translateY(-200%) rotate(-45deg) ;
      }
      50% {
          transform: translateY(-200%);
          
        }
        100% {
          transform: translateY(0);
          }
`;

const placeholder = keyframes`   
      0% {
        rect: {animation: unset;}
      }
      100% {
        rect: {animation: unset;}
      }
`;

const StyledSvg = styled.svg<{ isChecked: boolean | null }>`
	display: block;
	width: 100%;
	height: 100%;
	animation: ${placeholder} 0.25s linear forwards;

	& rect {
		transform-box: fill-box;
		transform-origin: center;
		fill: ${({ theme }) => theme.color.primary1};

		${({ isChecked }) =>
			isChecked === null
				? ""
				: isChecked
				? css`
						animation: ${middleRow} 0.25s linear forwards;
				  `
				: css`
						animation: ${middleRowOut} 0.25s linear forwards;
				  `};
	}

	& rect:first-child {
		${({ isChecked }) =>
			isChecked === null
				? ""
				: isChecked
				? css`
						animation: ${topRow} 0.25s linear forwards;
				  `
				: css`
						animation: ${topRowOut} 0.25s linear forwards;
				  `};
	}

	& rect:last-child {
		${({ isChecked }) =>
			isChecked === null
				? ""
				: isChecked
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
