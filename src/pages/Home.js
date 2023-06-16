import React from 'react';
// import Carousel from '../components/Carousel/Carousel';
// import { Content } from '../components/Content/Content';
import Features from '../components/Features/Features';
// import Game from '../components/Game';
import Hero from '../components/Hero/Hero';
// import { hero/One, heroTwo, heroThree } from '../data/HeroData';
import Languages from '../components/Languages/Experience';
import Portfolio from '../components/Portfolio/Carousel';

// Hero Feature Content Carousel

const Home = () => {
	return (
		<>
			<Hero />
			<Portfolio/>
			<Languages/>
			<Features />
			{/* <Content {...heroTwo} /> */}
			{/* <Content {...heroThree} /> */}
			{/* <Carousel /> */}

			{/* <Game/> */}
		</>
	);
};

export default Home;