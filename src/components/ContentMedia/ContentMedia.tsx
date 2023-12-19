import { Media } from "types/media";
import styled from "styled-components";
import { MediaType } from "types/mediaType";

const ContentMediaWrapper = styled.div`
	${({ theme }) => theme.flexCenter};
	flex-direction: column;
	width: 100%;
`;

const Image = styled.img`
	width: 100%;
`;

const Video = styled.video`
	width: 100%;
`;

const Iframe = styled.iframe`
	width: 100%;
`;

const Caption = styled.span`
	font-family: ${({ theme }) => theme.text.family.body};
	font-size: ${({ theme }) => theme.text.size.s12};
	font-weight: ${({ theme }) => theme.text.weight.light};
`;

export const ContentMedia = ({ type, src, alt, caption }: Media) => {
	let content;

	if (type === MediaType.image) {
		content = <Image src={src} alt={alt} />;
	} else if (type === MediaType.video) {
		content = <Video src={src} title={alt} autoPlay muted loop controls />;
	} else {
		content = <Iframe src={src} title={alt} />;
	}

	return (
		<ContentMediaWrapper>
			{content}
			{caption && <Caption>{caption}</Caption>}
		</ContentMediaWrapper>
	);
};
export default ContentMedia;
