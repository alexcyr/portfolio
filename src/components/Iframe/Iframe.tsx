import { PlayIcon } from "components/Icons/Play";
import { IframeContext } from "pages/Project/Project";
import { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { Media as IframeProps } from "types/media";

const IframeWrapper = styled.div`
	border: none;
	width: 100%;
	aspect-ratio: 1 / 1;
	position: relative;
`;

const IframeWindow = styled.iframe`
	position: absolute;
	inset: 0;
	width: 100%;
	max-height: 100%;
	aspect-ratio: 1/1;
	border: none;
`;

const LoadingWrapper = styled.div`
	position: absolute;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;

	&::after {
		content: "";
		position: absolute;
		inset: 0;
		background: ${({ theme }) => theme.color.primary1};
		opacity: 0.1;
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
	color: ${({ theme }) => theme.color.primary1};
	gap: ${({ theme }) => theme.space.s32};

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
		background: ${({ theme }) => theme.color.primary1};
		opacity: 0.1;
	}

	&:hover {
		transition: all 0.25s ease-in-out;
		&::after {
			background: ${({ theme }) => theme.color.primary2};
			transition: all 0.25s ease-in-out;
		}
		svg {
			transition: all 0.15s ease-in-out;
			transform: scale(1.05);
		}

		span {
			transition: all 3s ease-in-out;
			font-size: ${({ theme }) => theme.text.size.s18};

			strong {
				transition: all 3s ease-in-out;
				font-size: ${({ theme }) => theme.text.size.s32};
			}
		}
	}
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  gap: ${({ theme }) => theme.space.s4};
`;

export const Iframe = ({ src, alt, preload }: IframeProps) => {
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
			{!preload && !loaded && iframeId === alt && <LoadingWrapper>Loading</LoadingWrapper>}
			{inView ? (
				iframeId === alt || preload ? (
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
					</LoadIframeButton>
				)
			) : null}
		</IframeWrapper>
	);
};
