import styled from 'styled-components';
import { Button } from '../../globalStyles';

export const HeroSection = styled.section`
	height: 100vh;
	background-position: center;
	background-size: cover;
	padding-top: clamp(70px, 25vh, 220px);
	box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;

export const HeroVideo = styled.video`
	object-fit: cover;
	width: 100%;
	height: 100%;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
	top: 0;
	position: absolute;
	z-index: -1;
	`;

export const HeroText = styled.p`
	margin-bottom: 35px;
	font-size: clamp(0.9rem, 1.5vw, 1.3rem);
	line-height: 24px;
	text-align: center;
	letter-spacing: 2px;
	color: #fff;
	&:hover {
		transform: scale(1.02);
	}
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	gap: 0.5rem;
	color: white;
	button {
		margin: 10px;
		color: white;
		width: 40px;
		height: 40px;
	 }

	 .github:hover {
		color: black;
		background: white;
		border-radius: 40%;
		height: 40px;
		width: 40px;
	 }
	 .instagram:hover {
		color: white;
		background: linear-gradient(20deg, rgba(175,195,34,1) 0%, rgba(177,192,34,1) 0%, rgba(253,45,45,1) 46%);
		border-radius: 40%;
		height: 40px;
		width:40px;
	 }
	 .linkedin:hover {
		color: white;
		background: blue;
		border-radius: 5px;
		height: 40px;
		width: 40px;
	 }
	 .telegram:hover {
		color: white;
		background: #0072e9;
		border-radius: 5px;
		height: 40px;
		width: 40px;
	 }
	 .git, .insta, .link, .tele {
		height: 40px;
		width: 40px;
	 }

`;

export const HeroButton = styled(Button)`
	color: black;
	&:before {
		background: #fff;
		height: 500%;
	}
	&:hover:before {
		height: 0%;
	}
	&:hover {
		color: white;
	}
`;