import React from 'react';
import { Link } from 'react-router-dom';
import { Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper } from './HeroStyles';
import { AiOutlineGithub, AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'
// import {BsInstagram} from 'react-icons/bs'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {

	// const { text } = useTypewriter({
	// 	words: ['Hello I`m Frontend developer'],
	// 	loop: {},
	// })

	// const handleType = (count: number) => {
	// 	// access word count number
	// 	console.log(count)}
	//   }
	
	  const handleDone = () => {
		console.log(`Done after 5 loops!`)
	  }

	return (
		<HeroSection>
			<HeroVideo src="./assets/hero.mp4" autoPlay muted loop />
			<Container>
				<MainHeading>Khujamov Lochinbek</MainHeading>
				<HeroText>
				<div className='App'>
						<Typewriter
							words={['Hello I`m Frontend developer!']}
							loop={59999999}
							cursor
							cursorStyle='_'
							typeSpeed={50}
							deleteSpeed={50}
							delaySpeed={1200}
							onLoopDone={handleDone}
							// onType={handleType}
						/>
					</div>
				</HeroText>
				<ButtonWrapper>
					<Link to="https://github.com/uzbfalcon">
						<button className='github'>
							<AiOutlineGithub className='git' />
						</button>
					</Link>
					<Link to='https://www.instagram.com/falcondeveloper_/'>
						<button className='instagram'>
							<AiOutlineInstagram className='insta' />
						</button>
					</Link>
					<Link to='https://www.linkedin.com'>
						<button className='linkedin'>
							<AiFillLinkedin className='link' />
						</button>
					</Link>
					<Link to='https://www.telegram.com'>
						<button className='telegram'>
							<FaTelegramPlane className='tele' />
						</button>
					</Link>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;