import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Overlay from '../Overlay/Overlay';
const TYModal = styled.div`
	width: 100%;
	z-index: 10;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	position: fixed;

	.thankyou-modal {
		background-color: #fff;
		margin: 0px 20px;
		padding: 30px;
		border-radius: 10px;
		width: 100%;
		max-width: 400px;
		text-align: center;
		h1 {
			font-size: 22px;
			padding: 20px 0px;
		}

		p {
			font-size: 15px;
			line-height: 1.6rem;
			color: #9e9e9e;
			margin-bottom: 25px;
		}
	}
`;
const ThankYouModal = ({ thankyouModal, setThankyouModal }) => {
	return (
		<>
			<Overlay open={thankyouModal} />
			<TYModal>
				<div className="thankyou-modal">
					<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
						<g fill="none" fillRule="evenodd">
							<circle fill="#3CB3AB" cx="32" cy="32" r="32" />
							<path stroke="#FFF" strokeWidth="5" d="M20 31.86L28.093 40 44 24" />
						</g>
					</svg>
					<h1>Thanks for your support!</h1>
					<p>
						Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is
						completed.
					</p>
					<Button
						onClick={() => {
							setThankyouModal(!thankyouModal);
						}}
					>
						Got it!
					</Button>
				</div>
			</TYModal>
		</>
	);
};

export default ThankYouModal;
