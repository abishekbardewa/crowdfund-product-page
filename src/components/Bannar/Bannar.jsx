import React, { useEffect, useState } from 'react';
import BannarDesktop from '../../assets/images/image-hero-desktop.jpg';
import BannarMobile from '../../assets/images/image-hero-mobile.jpg';
import styled from 'styled-components';

const BannarImg = styled.div`
	position: relative;
	img {
		width: 100%;
	}
`;
const Bannar = () => {
	const [isDesktop, setDesktop] = useState(false);

	useEffect(() => {
		if (window.innerWidth > 768) {
			setDesktop(true);
		} else {
			setDesktop(false);
		}

		const updateMedia = () => {
			if (window.innerWidth > 768) {
				setDesktop(true);
			} else {
				setDesktop(false);
			}
		};
		window.addEventListener('resize', updateMedia);
		return () => window.removeEventListener('resize', updateMedia);
	}, []);

	return <BannarImg>{isDesktop ? <img src={BannarDesktop} alt="Bannar" /> : <img src={BannarMobile} alt="Bannar" />}</BannarImg>;
};

export default Bannar;
