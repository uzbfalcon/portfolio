import React from 'react';
import { Link } from 'react-router-dom';
import { Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper } from './HeroStyles';
import {AiOutlineGithub, AiOutlineInstagram, AiFillLinkedin} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'
// import {BsInstagram} from 'react-icons/bs'

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/hero.mp4" autoPlay muted loop />
			<Container>
				<HeroText>
					Hello I'm
				</HeroText>
				<MainHeading>Khujamov Lochinbek</MainHeading>
				<HeroText>
					I'm Frontend developer
				</HeroText>
				<ButtonWrapper>
					<Link to="https://github.com/uzbfalcon">
						<button className='github'>
							<AiOutlineGithub className='git' />
						</button>
					</Link>
					<Link to='https://www.instagram.com/falcondeveloper_/'>
						<button className='instagram'>
							<AiOutlineInstagram  className='insta'/>
						</button>
					</Link>
					<Link to='https://www.linkedin.com'>
						<button className='linkedin'>
							<AiFillLinkedin className='link'/>
						</button>
					</Link>
					<Link to='https://www.telegram.com'>
						<button className='telegram'>
							<FaTelegramPlane className='tele'/>
						</button>
					</Link>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;