import React from 'react';
// import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
// import { IconContext } from 'react-icons';
import { Row, Section, TextWrapper } from '../../globalStyles';
import {
	// ButtonContainer,
	// ReviewSlider,
	ImageWrapper,
	CarouselImage,
	CardButton,
	Container,
	Heading,
	Subtitle,
	Textwrapper
} from './CarouselStyles';
import img1 from '../../Assets/Screenshot (86).png'
import img2 from '../../Assets/Screenshot (87).png'
import img3 from '../../Assets/Screenshot (88).png'
import img4 from '../../Assets/Screenshot (89).png'
import img5 from '../../Assets/Screenshot (90).png'
import { Link } from 'react-router-dom';

const Portfolio = () => {
	// const [sliderRef, setSliderRef] = useState(null);

	return (
		<Section margin="auto" maxWidth="1280px" padding="50px 70px" inverse>
			<Row justify="space-between" margin="1rem" wrap="wrap">
				<Textwrapper>
					<Heading width="auto" inverse className='heading'>
						Portfolio
					</Heading>
					<Subtitle>
						My Recent Works
					</Subtitle>
				</Textwrapper>
				{/* <ButtonContainer>
					<IconContext.Provider value={{ size: '3rem', color: '#1d608c' }}>
						<FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
						<FaArrowCircleRight onClick={sliderRef?.slickNext} />
					</IconContext.Provider>
				</ButtonContainer> */}
			</Row>

			<Container  >
				<ImageWrapper >
					<CarouselImage src={img1} />
					<TextWrapper className='title' size="1.8rem" margin="0.4rem 0 0" weight="bold" textAlign='center'>
						Doniyor shifo Hospital
					</TextWrapper>
					<TextWrapper size="0.9rem" margin="0.7rem" color="#4f4f4f">
						This web site is Personal Hospital
					</TextWrapper>
					<Link to='https://doniyorshifo.uz/' target="_blank" style={{ textDecoration: 'none', width: '100%' }}>
						<CardButton>Go to web site</CardButton>
					</Link>
				</ImageWrapper>
				<ImageWrapper >
					<CarouselImage src={img2} />
					<TextWrapper size="1.8rem" margin="0.4rem 0 0" weight="bold">
						Houzing
					</TextWrapper>
					<TextWrapper size="0.9rem" margin="0.7rem" color="#4f4f4f">
						This website is for buying and selling houses
					</TextWrapper>
					<Link to='https://houzing-plus.netlify.app' target="_blank" style={{ textDecoration: 'none', width: '100%' }}>
						<CardButton>Go to web site</CardButton>
					</Link>
				</ImageWrapper>
				<ImageWrapper >
					<CarouselImage src={img3} />
					<TextWrapper size="1.8rem" margin="0.4rem 0 0" weight="bold">
						Plants
					</TextWrapper>
					<TextWrapper size="0.9rem" margin="0.7rem" color="#4f4f4f">
						This website is made just for plants
					</TextWrapper>
					<Link to='https://plants-falcon.netlify.app/' target="_blank" style={{ textDecoration: 'none', width: '100%' }}>
						<CardButton>Go to web site</CardButton>
					</Link>
				</ImageWrapper>
				<ImageWrapper >
					<CarouselImage src={img4} />
					<TextWrapper size="1.8rem" margin="0.4rem 0 0" weight="bold">
						CRUD Table
					</TextWrapper>
					<TextWrapper size="0.9rem" margin="0.7rem" color="#4f4f4f">
						It is based on HTML, CSS, Javascript. And you can do CRUD on it
					</TextWrapper>
					<Link to='https://crud-tablebyfalcon.netlify.app/' target="_blank" style={{ textDecoration: 'none', width: '100%' }}>
						<CardButton>Go to web site</CardButton>
					</Link>
				</ImageWrapper>
				<ImageWrapper >
					<CarouselImage src={img5} />
					<TextWrapper size="1.8rem" margin="0.4rem 0 0" weight="bold">
						Tic Tak Toe
					</TextWrapper>
					<TextWrapper size="0.9rem" margin="0.7rem" color="#4f4f4f">
						It is popular game
					</TextWrapper>
					<Link to='https://falcon-tiktaktoe.netlify.app/' target="_blank" style={{ textDecoration: 'none', width: '100%' }}>
						<CardButton>Go to web site</CardButton>
					</Link>
				</ImageWrapper>
			</Container>
		</Section>
	);
};

export default Portfolio;