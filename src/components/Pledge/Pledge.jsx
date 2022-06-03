import React from 'react';
import Button from '../Button/Button';
import styled from 'styled-components';
const PledgeCard = styled.div`
	margin: 20px 0px;
	border: 1px solid #e4e2e2;
	border-radius: 10px;
	padding: 30px;
	opacity: ${({ daysLeft }) => (daysLeft === 0 ? '0.4' : '')};
	.pledge-title {
		display: flex;
		flex-direction: column;
		@media (min-width: 768px) {
			flex-direction: row;
			justify-content: space-between;
		}
		h2 {
			font-size: 16px;
			margin: 0px 0px 10px;
		}
		span {
			color: hsl(176, 50%, 47%);
			font-weight: 500;
			font-size: 16px;
		}
	}
	p {
		font-size: 16px;
	}
	.pledge-days {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		@media (min-width: 768px) {
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
			align-items: center;
			h1 {
				margin: 0px;
			}
		}
		h1 {
			font-size: 35px;
			span {
				font-size: 16px;
				color: #9e9e9e;
				margin-left: 10px;
				font-weight: 400;
			}
		}
	}
`;

const Pledge = ({ value, title, pledgeInfo, pledgeText, daysLeft, btnText, setModalOpen, modalOpen, setCheckedPledge }) => {
	return (
		<PledgeCard daysLeft={daysLeft}>
			<div className="pledge-title">
				<h2>{title}</h2>
				<span>{pledgeInfo}</span>
			</div>
			<p>{pledgeText}</p>
			<div className="pledge-days">
				<h1>
					{daysLeft}
					<span>left</span>
				</h1>
				<Button
					disabled={daysLeft === 0 ? true : false}
					onClick={() => {
						setCheckedPledge(value);
						setModalOpen(!modalOpen);
					}}
				>
					{btnText}
				</Button>
			</div>
		</PledgeCard>
	);
};

export default Pledge;
