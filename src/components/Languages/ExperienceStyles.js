import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ExperienceTitle = styled.h2`
	text-align: center;
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	line-height: 1.06;
	/* letter-spacing: 0.4rem; */
	margin: auto;
	color: white;
`;
export const ExperienceSubtitle = styled.h2`
	text-align: center;
	font-size: 1.3rem;
	line-height: 1.06;
	/* letter-spacing: 0.1rem; */
	margin: auto;
	color: rgb(98, 104, 129);
`

export const ExperienceTextWrapper = styled.div`
	position: relative;
	padding: 0 0 20px;
	margin-bottom: 4rem;
	`;

export const ExperienceWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin-top: 4rem;
	grid-gap: 2rem;
	margin: auto;
	align-items: center;
	border: 2px solid #308AF0;
	color: white;
	/* background: #308AF0; */
	padding: 2rem 0 2rem 10rem;
	transition: 0.5s ease-in-out;
	border-radius: 50% 20% / 10% 40%;	
	box-shadow: 3px 3px 10px 3px white;
	&:hover {
		/* background-color: white;
		color: black; */
		box-shadow: 3px 3px 15px 30px white;
		transition: 0.3s ease-in-out 0.1s;
		border: 2px solid white;
	}
	

	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 3rem;
	}
	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(1, 1fr);
		margin: auto;
		align-items: center;
		padding: 1rem 0 1rem 4.2rem;
	}
`;

export const ExperienceColumn = styled(motion.div)`
	display: flex;
	flex-direction: row;
	gap: 10px;
	/* justify-content: center; */
	/* align-items: baseline; */
	max-width: 250px;
	width: 100%;
	position: relative;



	.icon_change_color {
		color: #308AF0;
		width: 18px;
		height: 18px;

	}
	
	/* justify-content: center; */
	/* align-items: center; */
	/* background: #f3f3f3; */
	/* padding: 10px; */
	/* box-shadow: 0 0 32px 8px #d0d0d0; */
	/* border-radius: 20px; */
`;

export const ExperienceImageWrapper = styled.div`
	margin-bottom: 1rem;
	border-radius: 50%;
	border: 2px solid #000;
	padding: 30px;
`;
export const ExperienceName = styled.h3`
	/* font-weight: 600;
	font-size: 1.3rem;
	letter-spacing: 2px; */

	@media screen and (max-width: 768px) {
		font-weight: 700;
		font-size: 1.2rem;
		letter-spacing: 1.3px;
	}
`;
export const ExperienceText = styled.p`
	/* margin: 1rem 0 auto;
	text-align: center;
	font-size: 0.9rem;
	line-height: 1.73;
	letter-spacing: 0.5px;
	color: #626881; */
	@media screen and (max-width: 768px) {
		/* display: none; */
	}
`;
export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`
export const Experienceimg = styled.div`
	margin-top: 4px;
	
		@media screen and (max-width: 768px) {
			max-width: 340px;
			max-height: 340px;
		}
	
`