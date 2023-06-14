import React from 'react';

import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSupport, BiDollar, BiCodeCurly, BiGroup } from 'react-icons/bi';
import { FaProjectDiagram } from 'react-icons/fa';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const LanguagesData = [
	{
		name: 'Best Security',
		description: 'We offer the best data security to our clients, which makes us stand out',
		icon: iconStyle(BsFillShieldLockFill),
		imgClass: 'one',
	},
	{
		name: 'Clients',
		description: '5+ Clients Worldwide',
		icon: iconStyle(BiGroup),
		imgClass: 'two',
	},
	{
		name: 'Projects',
		description: '5+ Successfully Completed Projects',
		icon: iconStyle(FaProjectDiagram),
		imgClass: 'three',
	},
	{
		name: '24/7 Support',
		description: 'Our team is available at all times in case you need us',
		icon: iconStyle(BiSupport),
		imgClass: 'four',
	},
	{
		name: 'Price',
		description: 'We offer the highest value/cost ratio',
		icon: iconStyle(BiDollar),
		imgClass: 'five',
	},
	{
		name: 'Experience',
		description: '1+ Years Working',
		icon: iconStyle(BiCodeCurly),
		imgClass: 'six',
	},
];