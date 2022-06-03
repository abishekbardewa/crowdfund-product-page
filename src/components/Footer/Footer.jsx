import styled from 'styled-components';

const FooterElement = styled.div`
	.attribution {
		font-size: 13px;
		text-align: center;
		margin: 15px 0px;
	}
	.attribution a {
		color: hsl(176, 50%, 47%);
	}
`;
const Footer = () => {
	return (
		<>
			<FooterElement>
				<div className="attribution">
					Challenge by
					<a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">
						Frontend Mentor
					</a>
					. Coded by <a href="https://github.com/abishekbardewa/crowdfund-product-page.git">Abishek Bardewa</a>.
				</div>
			</FooterElement>
		</>
	);
};
export default Footer;
