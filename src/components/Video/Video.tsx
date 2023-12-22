import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { Video as VideoType } from "types/video";

const VideoWrapper = styled.div`
	width: 100%;
	position: relative;
`;

const VideoVid = styled.video`
	width: 100%;
	position: absolute;
	inset: 0;
`;

const VideoPoster = styled.img`
	width: 100%;
`;

export const Video = ({ src, alt, posterSrc, autoplay, controls }: VideoType) => {
	const { ref, inView } = useInView();

	return (
		<VideoWrapper ref={ref}>
			{inView ? (
				<VideoVid title={alt} autoPlay={autoplay} controls={controls} playsInline muted loop>
					<source src={src} type="video/mp4" />
				</VideoVid>
			) : null}
			{posterSrc && <VideoPoster src={posterSrc} loading="lazy" />}
		</VideoWrapper>
	);
};

export default Video;
