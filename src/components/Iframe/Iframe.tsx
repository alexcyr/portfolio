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
`;

const LoadingWrapper = styled.div`
	position: absolute;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: ${({ theme }) => theme.text.size.s32};

	&::after {
		content: "";
		position: absolute;
		inset: 0;
		background: ${({ theme }) => theme.color.primary1};
		opacity: 0.3;
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
	position: absolute;
	inset: 0;
	&::after {
		content: "";
		position: absolute;
		inset: 0;
		background: ${({ theme }) => theme.color.primary1};
		opacity: 0.3;
	}
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
						<span>
							<strong>Load Iframe</strong>
						</span>
						<span>Running can be computer intensive</span>
					</LoadIframeButton>
				)
			) : null}
		</IframeWrapper>
	);
};
