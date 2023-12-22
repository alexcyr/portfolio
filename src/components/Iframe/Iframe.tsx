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
	aspect-ratio: 1/1;
`;

export const Iframe = ({ src, alt }: IframeProps) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		fallbackInView: true,
	});

	return (
		<IframeWrapper ref={ref}>
			{inView ? (
				<IframeWindow
					loading="lazy"
					src={src}
					title={alt}
					allow="accelerometer; camera; gyroscope; microphone; xr-spatial-tracking; midi;"
					sandbox="allow-scripts allow-downloads"
					scrolling=""
				/>
			) : null}
		</IframeWrapper>
	);
};
