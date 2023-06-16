import styled from 'styled-components';
import { Row } from '../../globalStyles';
import Slider from 'react-slick';

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 30px;

	@media screen and (max-width: 960px) {
		grid-template-columns: repeat(1, 1fr);
		gap: 70px;
		
	}
	@media screen and (max-width: 560px) {
		grid-template-columns: repeat(1, 1fr);
		padding-left: 40px;
	}	


`
export const Heading = styled.h2`
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  color: ${({ inverse }) => (inverse ? "$403ae3" : "#fff")};
  letter-spacing: 0.4rem;
  line-height: 1.06;
  text-align: center;
  width: ${({ width }) => (width ? width : "100%")};

	@media screen and (max-width: 560px) {
		margin: auto;
	}
`;

export const CarouselImage = styled.img`
	width: 100%;
	max-height: 350px;
	border-radius: 10px 10px 0 0;
	object-fit: cover;
	vertical-align: middle;
	border: 3px solid #1d609c;
`;

export const ImageWrapper = styled.div`
	width: 90%;
	display: flex !important;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;
	outline: none;
	max-height: 430px;
	@media screen and (min-width: 440px) {
		border: 1px solid #bebebe;
	}
`;

export const ButtonContainer = styled(Row)`
	& svg {
		margin: 0 1rem;
		cursor: pointer;
	}
	& svg:hover {
		opacity: 0.7;
		transition: opacity 0.2s ease-in;
	}
	@media screen and (max-width: 960px) {
		margin: 0 auto;
	}
`;

export const ReviewSlider = styled(Slider)`
	width: 100%;
	.slick-track {
		display: flex;
		padding: 30px;
		gap: 3rem;
	}
	.slick-slide {
		display: flex;
		justify-content: center;
		margin-bottom: 1;
		outline: none;
	}
	.slick-list {
		overflow: hidden;
	}
`;

export const CardButton = styled.button`
	background-color: #1d609c;
	font-size: 1.3rem;
	padding: 10px 10px;
	color: #fff;
	cursor: pointer;
	width: 100%;
	font-weight: 600;
	text-decoration: none;
	margin: auto 0 0 0;
	border: none;
	border-radius: 0 0 10px 10px;
	&:hover {
		background-color: #112f4a;
		transition: background-color 0.2s ease-in;
	}
`;