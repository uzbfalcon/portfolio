import React from 'react';
import { Container, Section } from '../../globalStyles';
import {
	FeatureText,
	FeatureTitle,
	FeatureWrapper,
	FeatureColumn,
	FeatureImageWrapper,
	FeatureName,
	FeatureTextWrapper,
	Wrapper,
	Featureimg,
} from './FeaturesStyles';
import { featuresData } from '../../data/FeaturesData';
import img from "../../Assets/Falconlogo.png"

const Features = () => {
	const initial = {
		y: 40,
		opacity: 0,
	};
	const animate = {
		y: 0,
		opacity: 1,
	};

	return (
		<Section smPadding="50px 10px" position="relative" inverse id="about">
			<Container>
				<FeatureTextWrapper>
					<FeatureTitle>About me</FeatureTitle>
				</FeatureTextWrapper>
				<Wrapper>
					<Featureimg>
						<img src={img} alt="" />
						<div className='bacg'> </div>
					</Featureimg>
					<FeatureWrapper>
						{featuresData.map((el, index) => (
							<FeatureColumn
								initial={initial}
								animate={animate}
								transition={{ duration: 0.5 + index * 0.1 }}
								key={index}
							>
								<FeatureImageWrapper className={el.imgClass}>
									{el.icon}
								</FeatureImageWrapper>
								<FeatureName>{el.name}</FeatureName>
								<FeatureText>{el.description}</FeatureText>
							</FeatureColumn>
						))}
					</FeatureWrapper>
				</Wrapper>
			</Container>
		</Section>
	);
};

export default Features;