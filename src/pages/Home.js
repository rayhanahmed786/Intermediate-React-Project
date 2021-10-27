import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import Client from '../components/Client/Client';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';


// Hero Feature Content Carousel

const Home = () => {
	return (
		<>
			<Hero />
			
			<Features />
			<Client/>
			<Carousel />
		</>
	);
};

export default Home;
