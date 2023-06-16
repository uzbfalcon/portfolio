import React from 'react';
import { Container, Section } from '../../globalStyles';
import { GoVerified } from 'react-icons/go'
import {
	ExperienceText,
	ExperienceTitle,
	ExperienceWrapper,
	ExperienceColumn,
	// ExperienceImageWrapper,
	ExperienceName,
	ExperienceTextWrapper,
	// Wrapper,
	Experienceimg,
	ExperienceSubtitle,
} from './ExperienceStyles';
// import { ExperiencesData } from '../../data/FeaturesData';

const Languages = () => {
	// const initial = {
	// 	y: 40,
	// 	opacity: 0,
	// };
	// const animate = {
	// 	y: 0,
	// 	opacity: 1,
	// };

	return (
		<Section smPadding="50px 10px" position="relative" inverse id="about" style={{background:'rgb(7, 28, 47)'}}>
			<Container>
				<ExperienceTextWrapper>
					<ExperienceSubtitle>What Skills I Have</ExperienceSubtitle>
					<ExperienceTitle>My Experiences</ExperienceTitle>
				</ExperienceTextWrapper>
				<ExperienceWrapper>
					<ExperienceColumn>
						<Experienceimg><GoVerified className='icon_change_color'/></Experienceimg>
						<div>
							<ExperienceName>ReatcJs</ExperienceName>
							<ExperienceText>Experienced</ExperienceText>
						</div>
					</ExperienceColumn>
					<ExperienceColumn>
						<Experienceimg><GoVerified className='icon_change_color'/></Experienceimg>
						<div>
							<ExperienceName>JavaScript</ExperienceName>
							<ExperienceText>Experienced</ExperienceText>
						</div>
					</ExperienceColumn>
					<ExperienceColumn>
						<Experienceimg><GoVerified className='icon_change_color'/></Experienceimg>
						<div>
							<ExperienceName>HTML</ExperienceName>
							<ExperienceText>Experienced</ExperienceText>
						</div>
					</ExperienceColumn>
					<ExperienceColumn>
						<Experienceimg><GoVerified className='icon_change_color'/></Experienceimg>
						<div>
							<ExperienceName>CSS</ExperienceName>
							<ExperienceText>Experienced</ExperienceText>
						</div>
					</ExperienceColumn>
					<ExperienceColumn>
						<Experienceimg><GoVerified className='icon_change_color'/></Experienceimg>
						<div>
							<ExperienceName>Bootstrap</ExperienceName>
							<ExperienceText>Experienced</ExperienceText>
						</div>
					</ExperienceColumn>
					<ExperienceColumn>
						<Experienceimg><GoVerified className='icon_change_color'/></Experienceimg>
						<div>
							<ExperienceName>Ant design</ExperienceName>
							<ExperienceText>Experienced</ExperienceText>
						</div>
					</ExperienceColumn>
					<ExperienceColumn>
						<Experienceimg><GoVerified className='icon_change_color'/></Experienceimg>
						<div>
							<ExperienceName>Git</ExperienceName>
							<ExperienceText>Experienced</ExperienceText>
						</div>
					</ExperienceColumn>
					<ExperienceColumn>
						<Experienceimg><GoVerified className='icon_change_color'/></Experienceimg>
						<div>
							<ExperienceName>React-redux</ExperienceName>
							<ExperienceText>Intermediate</ExperienceText>
						</div>
					</ExperienceColumn>
					<ExperienceColumn>
						<Experienceimg><GoVerified className='icon_change_color'/></Experienceimg>
						<div>
							<ExperienceName>Figma</ExperienceName>
							<ExperienceText>Experienced</ExperienceText>
						</div>
					</ExperienceColumn>
					<ExperienceColumn>
						<Experienceimg><GoVerified className='icon_change_color'/></Experienceimg>
						<div>
							<ExperienceName>TypeScript</ExperienceName>
							<ExperienceText>Experienced</ExperienceText>
						</div>
					</ExperienceColumn>
					<ExperienceColumn>
						<Experienceimg><GoVerified className='icon_change_color'/></Experienceimg>
						<div>
							<ExperienceName>Redux</ExperienceName>
							<ExperienceText>Intermediate</ExperienceText>
						</div>
					</ExperienceColumn>
					<ExperienceColumn>
						<Experienceimg><GoVerified className='icon_change_color'/></Experienceimg>
						<div>
							<ExperienceName>Axios</ExperienceName>
							<ExperienceText>Experienced</ExperienceText>
						</div>
					</ExperienceColumn>
					<ExperienceColumn>
						<Experienceimg><GoVerified className='icon_change_color'/></Experienceimg>
						<div>
							<ExperienceName>Mui UI</ExperienceName>
							<ExperienceText>Experienced</ExperienceText>
						</div>
					</ExperienceColumn>
					<ExperienceColumn>
						<Experienceimg><GoVerified className='icon_change_color'/></Experienceimg>
						<div>
							<ExperienceName>NodeJs</ExperienceName>
							<ExperienceText>Intermediate</ExperienceText>
						</div>
					</ExperienceColumn>
					<ExperienceColumn>
						<Experienceimg><GoVerified className='icon_change_color'/></Experienceimg>
						<div>
							<ExperienceName>VueJs</ExperienceName>
							<ExperienceText>Intermediate</ExperienceText>
						</div>
					</ExperienceColumn>
				</ExperienceWrapper>
			</Container>
		</Section>
	);
};

export default Languages;