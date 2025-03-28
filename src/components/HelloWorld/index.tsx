import styled from "styled-components";

const Title = styled.h1`
	color: red;
`;

const HelloWorld = () => (
	<>
		<Title>Hello World</Title>

		<hr />

		<h3>Environmental variables:</h3>
		<p>
			process.env.PRODUCTION: <b>{process.env.PRODUCTION.toString()}</b>
		</p>
		<p>
			process.env.NAME: <b>{process.env.NAME}</b>
		</p>
		<p>
			process.env.VERSION: <b>{process.env.VERSION}</b>
		</p>
	</>
);

export default HelloWorld;
