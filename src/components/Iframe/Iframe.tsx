import { PlayIcon } from "components/Icons/Play";
import { IframeContext } from "pages/Project/Project";
import { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled, { keyframes } from "styled-components";
import { Media as IframeProps } from "types/media";

const IframeWrapper = styled.div`
	border: none;
	width: 100%;
	aspect-ratio: 1 / 1;
	position: relative;
`;

const spin = keyframes`   
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderAnim = styled.div`
	position: absolute;
	z-index: 1;
	width: 35%;
	height: 35%;
	border: 8px solid ${({ theme }) => theme.color.surface2};
	border-radius: 50%;
	border-top: 8px solid ${({ theme }) => theme.color.primary1};
	animation: ${spin} 2s linear infinite;
`;

const IframeWindow = styled.iframe`
	position: absolute;
	inset: 0;
	width: 100%;
	max-height: 100%;
	aspect-ratio: 1/1;
	border: none;
	z-index: 1;
`;

const LoadingWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	font-family: ${({ theme }) => theme.text.family.title};

	&::after {
		content: "";
		position: absolute;
		inset: 0;
		background: #000;
		opacity: 0.7;
	}
`;

const BackdropBlur = styled.div`
	position: absolute;
	inset: 0;
	backdrop-filter: blur(2px);
	z-index: 1;
	transition: all 0.25s ease-in-out;

	&:hover {
		backdrop-filter: blur(3px);
	}
`;

const LoadIframeButton = styled.button`
	cursor: pointer;
	background: transparent;
	border: none;
	display: flex;
	flex-direction: column;
	gap: 4px;
	text-align: center;
	align-items: center;
	justify-content: center;
	position: absolute;
	inset: 0;
	color: #fff;
	gap: ${({ theme }) => theme.space.s32};
	width: 100%;

	svg {
		z-index: 2;
	}

	span {
		font-family: ${({ theme }) => theme.text.family.body};
		font-size: ${({ theme }) => theme.text.size.s16};
		font-weight: 300;
		letter-spacing: 1px;

		strong {
			font-family: ${({ theme }) => theme.text.family.title};
			font-size: ${({ theme }) => theme.text.size.s28};
			font-weight: 600;
			letter-spacing: 2px;
		}
	}

	&::after {
		content: "";
		position: absolute;
		inset: 0;
		background: #000;
		opacity: 0.7;
		transition: all 0.25s ease-in-out;
	}

	&:hover {
		transition: all 0.25s ease-in-out;
		&::after {
			opacity: 0.75;
		}
		svg {
			transition: all 0.15s ease-in-out;
			transform: scale(1.05);
		}

		span {
			transition: all 2s ease-in-out;
			transform: scale(1.05);

			strong {
				transition: all 2s ease-in-out;
				transform: scale(1.05);
			}
		}
	}
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	text-transform: uppercase;
	gap: ${({ theme }) => theme.space.s4};
	z-index: 2;
`;

const IframePoster = styled.img`
	position: absolute;
	inset: 0;
	width: 100%;
`;

export const Iframe = ({ src, alt, posterSrc }: IframeProps) => {
	const { iframeId, setIframeId } = useContext(IframeContext);
	const [loaded, setLoaded] = useState(false);

	const { ref, inView } = useInView({
		triggerOnce: true,
		fallbackInView: true,
	});

	useEffect(() => {
		setLoaded(false);
	}, [iframeId]);

	return (
		<IframeWrapper ref={ref}>
			{!loaded && iframeId === alt && (
				<LoadingWrapper>
					<LoaderAnim />
					Loading
				</LoadingWrapper>
			)}
			{inView ? (
				iframeId === alt ? (
					<IframeWindow
						loading="lazy"
						src={src}
						title={alt}
						onLoad={() => setLoaded(true)}
						allow="accelerometer; camera; gyroscope; microphone; xr-spatial-tracking; midi;"
						sandbox="allow-scripts allow-downloads"
						scrolling=""
					/>
				) : (
					<LoadIframeButton onClick={() => setIframeId(alt)} title={`load ${alt}`}>
						<PlayIcon />
						<TextWrapper>
							<span>
								<strong>Play Web App</strong>
							</span>
							<span>Attn: Can be computer intensive</span>
						</TextWrapper>
						<BackdropBlur />
						{posterSrc && <IframePoster src={posterSrc} />}
					</LoadIframeButton>
				)
			) : null}
		</IframeWrapper>
	);
};
